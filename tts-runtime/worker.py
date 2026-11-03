"""Local CUDA only. Runs with an existing GPT-SoVITS installation's Python."""
import sys, os, json, traceback, pathlib, re, zipfile, io, wave
wire = sys.stdout
sys.stdout = sys.stderr

def reply(data):
    wire.write('@ARONA@' + json.dumps(data, ensure_ascii=False) + '\n')
    wire.flush()

root = pathlib.Path(sys.argv[1]).resolve()
os.chdir(root)
sys.path[:0] = [str(root), str(root / 'GPT_SoVITS')]
os.environ['PATH'] = str(root) + os.pathsep + str(root / 'runtime') + os.pathsep + os.environ.get('PATH', '')
os.environ['HF_HUB_OFFLINE'] = '1'
os.environ['TRANSFORMERS_OFFLINE'] = '1'
pipeline = None
loaded = None

def validate_bases():
    for name in ['chinese-hubert-base', 'chinese-roberta-wwm-ext-large']:
        folder = root / 'GPT_SoVITS/pretrained_models' / name
        if not (folder / 'config.json').is_file() or not any((folder / f).is_file() for f in ['pytorch_model.bin', 'model.safetensors']):
            raise RuntimeError('基础语音模型不完整：' + str(folder) + '。请使用含预训练模型的 GPT-SoVITS NVIDIA 整合包。')

def probe():
    import torch
    if not torch.cuda.is_available():
        raise RuntimeError('未检测到可用的 CUDA PyTorch。请使用 GPT-SoVITS 的 NVIDIA 整合包，并检查显卡驱动。')
    validate_bases()
    from GPT_SoVITS.TTS_infer_pack.TTS import TTS, TTS_Config
    import soundfile
    # Exercise a CUDA kernel as well as driver discovery (e.g. RTX 50 compatibility).
    torch.ones(1, device='cuda').sum().item()
    torch.cuda.synchronize()
    return {'gpu': torch.cuda.get_device_name(0), 'torch': torch.__version__, 'cuda': torch.version.cuda}

def references(req):
    dest = pathlib.Path(req['destination'])
    dest.mkdir(parents=True, exist_ok=True)
    found = []
    with zipfile.ZipFile(req['archive']) as z:
        total = 0
        for member in z.infolist():
            if not member.filename.lower().endswith('.wav') or member.file_size > 15_000_000:
                continue
            total += member.file_size
            if total > 150_000_000 or len(found) >= 500:
                raise ValueError('参考音频包超出限制')
            data = z.read(member)
            try:
                with wave.open(io.BytesIO(data)) as w:
                    duration = w.getnframes() / w.getframerate()
            except (wave.Error, EOFError):
                continue
            if not 3 <= duration <= 10:
                continue
            # Never extract archive paths. Write numbered files inside our cache only.
            target = dest / ('ref-%03d.wav' % len(found))
            target.write_bytes(data)
            name = pathlib.PurePosixPath(member.filename).stem
            text = re.sub(r'^【[^】]*】', '', name).replace('_', ' ').strip()
            found.append({'path': str(target), 'text': text, 'label': name, 'seconds': round(duration, 1)})
    return found

def synth(req):
    global pipeline, loaded
    import torch
    import soundfile as sf
    if not torch.cuda.is_available():
        raise RuntimeError('CUDA 不可用，已停止；不会静默切换到 CPU 或云端。')
    info = sf.info(req['reference'])
    if not 3 <= info.duration <= 10:
        raise ValueError('参考音频应为 3–10 秒')
    validate_bases()
    from GPT_SoVITS.TTS_infer_pack.TTS import TTS, TTS_Config
    key = (req['gpt'], req['sovits'])
    if key != loaded:
        pipeline = None
        import gc
        gc.collect()
        torch.cuda.empty_cache()
        config = TTS_Config({'custom': {
            'device': 'cuda', 'is_half': True, 'version': 'v2',
            't2s_weights_path': req['gpt'], 'vits_weights_path': req['sovits'],
            'cnhuhbert_base_path': str(root / 'GPT_SoVITS/pretrained_models/chinese-hubert-base'),
            'bert_base_path': str(root / 'GPT_SoVITS/pretrained_models/chinese-roberta-wwm-ext-large')}})
        config.configs_path = str(pathlib.Path(req['output']).parent / 'tts-config.yaml')
        pipeline = TTS(config)
        loaded = key
    chunks = list(pipeline.run({
        'text': req['text'], 'text_lang': req['language'],
        'ref_audio_path': req['reference'], 'prompt_text': req['prompt'],
        'prompt_lang': req['promptLanguage'], 'text_split_method': 'cut5',
        'batch_size': 1, 'speed_factor': req['speed'], 'media_type': 'wav',
        'streaming_mode': False, 'parallel_infer': True,
        'top_k': 15, 'top_p': 1, 'temperature': 1, 'seed': -1,
        'repetition_penalty': 1.35, 'fragment_interval': 0.3}))
    if not chunks:
        raise RuntimeError('模型没有返回音频')
    import numpy as np
    rates = {rate for rate, _ in chunks}
    if len(rates) != 1:
        raise RuntimeError('模型返回了不同采样率')
    sf.write(req['output'], np.concatenate([audio for _, audio in chunks]), chunks[0][0], subtype='PCM_16')
    return {'path': req['output']}

for line in sys.stdin:
    req = {}
    try:
        req = json.loads(line)
        op = req.get('op')
        result = probe() if op == 'probe' else references(req) if op == 'references' else synth(req) if op == 'synth' else None
        if result is None:
            raise ValueError('Unknown operation')
        reply({'id': req['id'], 'result': result})
    except Exception as e:
        traceback.print_exc(file=sys.stderr)
        reply({'id': req.get('id'), 'error': str(e)})
