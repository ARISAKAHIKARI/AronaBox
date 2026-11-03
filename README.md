# AronaBox

阿罗娜桌宠，当前版本 2.7.1。克隆本仓库后，在仓库根目录运行 `build-win.cmd` 编译，或运行 `start.cmd` 启动。

仓库中的代理核心以压缩文件保存。编译、安装或启动时会自动还原并核对官方程序的 SHA-256；已有程序会直接复用，不需要手动解压。

## 2.7.1 终端编辑修复

终端新增复制、粘贴、全选、复制全部输出、清屏、滚动到底部和字号缩放；支持右键菜单。选中文字时 Ctrl+C 复制，无选区时仍中断 CLI；Ctrl+Shift+C 始终复制；Ctrl+V、Ctrl+Shift+V、Shift+Insert 粘贴；Ctrl+Shift+A 全选，Ctrl+Shift+K 清屏，Ctrl+加号/减号缩放，Ctrl+0 重置字号。普通 Ctrl+A、Ctrl+K 继续传给 CLI。粘贴使用 xterm 的粘贴接口，保留应用启用的 bracketed paste 行为。单次粘贴上限 60000 字。

清屏只清除当前终端的回滚显示，不结束任务；关闭后重开可能从会话缓存恢复历史输出。

验证：99 项 Node 测试通过，包括复制/粘贴快捷键、中文多行粘贴转交、剪贴板错误恢复、中断键兼容和字号边界。Windows 系统剪贴板与真实 CLI 交互尚未实机验证。

# 2.7.0 更新

新增 9 套独立“重绘版”，原有 26 套皮肤保留。选择内置皮肤自动同步角色名称。参考来源和细节见《重绘版说明-2.7.0.md》。

# 阿罗娜桌宠 2.6.2

## 2.6.2 专业模式与终端入口修正

- 宠物下方原来的“专业”按钮改为“终端”，仍打开本地 CLI 终端；设置中原来的终端区域也改为“终端”。
- 设置中新增独立的“专业模式 · CodeAgent Desktop”区域，右键“专业模式”同样启动 `resources/codeagent desktop/CodeAgent Desktop.exe`，不再打开 CLI。
- 源码启动时使用项目下的 resources；解压版使用 AronaDesk.exe 旁边的 resources；portable 单文件版优先使用该 EXE 旁边的 resources。也可以在设置中“选择程序”指定已有客户端；兼容旧 CodeAgentWeb 目录。
- CodeAgent Desktop 为独立程序，本更新包不包含它。请将其完整目录放到上述位置，不能只复制 EXE。编译后也需保留这个外置目录。
- 聊天中的斜杠命令继续引导到 CLI 终端。保留取消 10 分钟时限、CUDA 和代理功能。独立 CodeAgent Desktop 继承桌宠传入的代理环境变量，但是否遵循仍由该客户端决定。

91 项 Node 测试通过，包括新旧路径优先级、含空格路径启动、代理环境继承和按钮入口检查。实际 Windows CodeAgent Desktop 启动需在本机确认。

## 2.6.1 复杂任务超时修复

取消本地 CodeAgent / ClaudeCode 聊天任务固定 10 分钟后强制终止的限制。复杂任务可以持续执行，直到 CLI 返回、发生错误、用户点击“停止”或退出桌宠。连续一分钟没有新输出时，状态栏提示进程仍在运行与已等待时间，不把无输出判断为任务失败，也不自动重试任务。

保留手动停止、输出大小保护和独立的连接检测超时。这个修复针对桌宠本地 CLI 的总时长限制；API 服务自身、CLI 内部或网页模型的超时不由此设置控制。此前已被终止的任务不能原地恢复，需要重新发送任务；重新发送前可让助手检查已完成的修改，避免重复操作。

88 项 Node 测试通过，包括模拟运行超过 10 分钟、长时间无输出后成功完成、手动取消、进程启动错误和提示定时器清理。保留 2.6.0 的代理、CUDA 与内网编译功能。

## 2.6.0 桌宠专用 SSR / Trojan 代理

入口：“模型与连接 → 桌宠专用代理”。Windows x64 代理核心已经随包提供，首次使用不需要额外联网下载。

1. 展开“添加节点”，粘贴 `ssr://` 或 `trojan://` 分享链接；也可手动填写服务器、端口、密码和协议参数。支持多个节点，一次启用一个。暂不支持订阅链接。
2. 选择节点，勾选“启用桌宠代理”，点击“保存并应用 / 重试”。Trojan 支持 TCP、WebSocket、gRPC，并验证 TLS 证书；不会为了连通而关闭证书验证。
3. 点击“测试 HTTPS 连接”检查真实远端连通性。它使用 gstatic 的 204 测试地址，15 秒超时；“核心已启动”只表示本地进程就绪，不代表节点、ChatGPT 或 API 已经可用。
4. 内网网站或 API 可加入直连域名，如 `.huawei.com`。域名前的点表示包含子域名；多个域名用逗号分隔。localhost、127.0.0.1 和 ::1 不经过代理，以保留本地桥接和服务。
5. 切换节点或关闭代理前，先停止聊天回复、结束专业终端会话，并等待下载完成。之后启动的新终端继承新配置。删除当前节点前先关闭代理；修改节点可重新添加后删除旧节点。

作用范围：桌宠内置 ChatGPT / Gemini / DeepSeek / 豆包网页、桌宠通过 Electron 发出的模型和环境下载，以及桌宠启动的 CodeAgent / ClaudeCode 会话、其中配置的 API、专业终端及遵循代理环境变量的子命令。只为这些子进程传递 HTTP_PROXY / HTTPS_PROXY / ALL_PROXY / NO_PROXY 等变量，不修改系统环境、注册表、系统代理或网卡；默认关闭，不启用 TUN。关闭后，桌宠网页恢复原有系统网络设置。

**CLI 与终端的边界：** 环境变量不能强制代理所有程序。自行清空代理变量的 CodeAgent 启动脚本、忽略代理变量的软件、自行覆盖网络设置的插件仍可能直连；这不是 VPN。外部 Edge 扩展模式使用外部浏览器，不受桌宠的专用代理控制；需要该代理时请切换“内置网页”。你单独打开的浏览器、终端和其他应用不会被自动接管。

节点凭据由 Electron safeStorage 使用本机系统加密保存，界面状态不返回密码。启动核心时在应用用户目录生成当前用户使用的临时配置，停止时删除；下次启动也清理崩溃遗留配置。复制配置到另一台电脑时需重新添加节点。代理核心绑定 127.0.0.1 随机端口，无 LAN 监听、无控制面板。核心退出后保持网页代理设置并阻止新的 CLI 启动，显示错误；不会自动改为直连。正常退出桌宠会停止核心。若系统强制终止整个应用，遗留的 mihomo.exe 可在任务管理器结束。

保留 2.5.0 客户端一键 CUDA 配置、已有环境复用、下载进度与取消、断点续传、离线整合包导入、TTS 开关及此前内网编译和 CodeAgent 免路径配置修复。开启代理后 CUDA / 角色下载也使用桌宠代理。

验证：85 项 Node 测试通过；设置页分享链接导入、SSR 手动添加、节点切换/删除、密码输入清空和 CUDA 控件共存通过 Chromium 操作检查；真实 Mihomo 核心通过 SSR / Trojan 配置检查，并在本地 TLS 测试服务器完成 Trojan 握手和 HTTP 请求往返，验证核心退出后阻止新启动与显式关闭后恢复设置。实际 Windows 打包运行、用户的远端 SSR / Trojan 服务和真实 NVIDIA CUDA 推理未在此 Linux 环境实测。

核心为官方 Mihomo v1.19.31，启动前验证固定 SHA-256；原始许可证、对应版本源码与获取信息在 `proxy-runtime` 中。参考：
- https://wiki.metacubex.one/en/config/proxies/ssr/
- https://wiki.metacubex.one/en/config/proxies/trojan/
- https://www.electronjs.org/docs/latest/api/session

升级：将本包完整内容覆盖旧项目，保留已有 `node_modules`、`.runtime` 和用户数据；运行 `build-win.cmd`，内网仍选 1，公网选 2。内网输出完整 Windows ZIP，解压后运行；不要只复制 AronaDesk.exe。

## 2.5.0 客户端一键配置 CUDA 语音环境

入口：“模型与连接 → 角色语音 → 一键配置 CUDA 环境”。支持 Windows x64 + NVIDIA。

1. 有已配置环境时先执行 CUDA 检测，成功直接复用，不重新下载。
2. 首次安装可点击“更改安装位置”选择其他磁盘；默认放在应用用户目录的 `tts-environments`，要求至少 35 GiB 可用空间。配置不会写入系统 Python 或全局 PATH，也不需要管理员权限。
3. 选择 Hugging Face 官方或 HF-Mirror 国内镜像，点击“一键配置 CUDA”。程序读取 NVIDIA 显卡名称，普通显卡使用官方 `GPT-SoVITS-v2pro-20250604.7z`（8.19 GB），RTX 50 / Blackwell 使用 `GPT-SoVITS-v2pro-20250604-nvidia50.7z`（8.84 GB）。也可手动指定版本。
4. 下载支持进度显示、取消、断点续传和完整 SHA-256 校验。固定仓库 revision 和哈希保存在 `tts-bundles.cjs`；两种源下载内容必须一致。失败时保留部分下载，下次点击继续。
5. 自动解压后，检查 Python、CUDA 版 PyTorch、基础语音模型，并实际执行小型 CUDA 运算。验证成功才保存 root/python 路径。安装过程失败不会覆盖原有语音配置；已经解压的环境保留供后续检测复用。
6. 环境就绪后，在上方选择角色并下载对应模型、设置参考语音，再开启 TTS。环境安装本身不会替你开启自动朗读。

内网无法访问下载源时，可以先在可联网的电脑下载上述指定版本的官方 .7z，传入本机后点击“导入离线整合包”，选匹配的显卡版本。客户端会校验并自动解压配置，无需手动解压或填路径；也可继续手动选择已有整合包目录。模型权重和参考音频仍需按角色准备。

一键配置包含 GPT-SoVITS Python、PyTorch CUDA 运行库和基础模型，**不自动安装 NVIDIA 显卡驱动，也无需另装完整 CUDA Toolkit**。缺少驱动时明确提示；老驱动或不兼容显卡会在 CUDA 运算检测中报错。此前的内网 npm／Electron 选项只负责桌宠编译，不能为 Hugging Face 整合包提供公司内网镜像，因此这里单独提供源选择与离线导入。

解压工具 `7zr.exe` 从 7-Zip 官方网站取得，以原样二进制随客户端分发，并在执行前校验；许可证和源码获取链接位于 `tts-runtime/LICENSE-7zip.txt` 与 `7zip-source.txt`。配置过程不会依赖额外下载解压工具。整合包和解压后的运行环境独立保存，不打包进桌宠 EXE／ZIP。

来源：https://github.com/RVC-Boss/GPT-SoVITS/blob/main/docs/cn/README.md 、https://huggingface.co/lj1995/GPT-SoVITS-windows-package 、https://www.7-zip.org/download.html 。已核实文件元数据与固定版本。78 项 Node 测试和 Chromium 界面操作检查通过，包含断点续传、哈希失败拒绝、取消、环境复用、磁盘不足及通过检测后才保存配置；完整 8–9 GB 整合包下载解压与真实 Windows CUDA 推理尚未在此环境实测。

## 2.4.4 CodeAgent 免路径配置与退出修复

- 聊天和“检测连接”在 Windows 上先通过与专业终端共用的 PATH/PATHEXT 解析查找 codeagent.bat/cmd/exe，忽略供 Unix 使用的无扩展名入口，并支持标准 Program Files/CodeAgentCLI 目录回退。命令框填写 `codeagent` 即可；明确填写的有效路径仍保留。升级程序后应彻底退出并重启桌宠以刷新 PATH。
- 原生 exe 直接启动，批处理经 CMD /d 启动（不执行 AutoRun、不经过 PowerShell），保留包含空格的路径。
- CLI 错误输出先严格检测 UTF-8，失败时按 GB18030 解码，避免中文“系统找不到指定的路径”变成乱码。
- 内置网页保存 webContents 引用用于 closed 回调，避免销毁后再次访问窗口属性；退出时停止任务与轮询，迟到回调不再显示对话框或刷新已退出的桌宠窗口。
- 70 项测试通过，包括裸 codeagent 命令解析、GBK 错误解码、内置网页带任务退出后触发 closed 的回归测试。Windows 新版 CodeAgent 的完整真实运行仍需本机确认。

## 2.4.3 内网打包修复

内网选项 1 改为 electron-builder `--dir`，然后用 Windows 自带 .NET ZIP 功能压缩完整 `dist/win-unpacked`，输出 `dist/AronaDesk-2.4.3-Windows-x64.zip`。解压全部内容后运行 AronaDesk.exe；必须保留旁边的 DLL、resources 等文件。ZIP 包含程序、桌宠资源及 TTS worker，角色权重仍独立缓存。

这避免了 portable 单文件封装步骤所需工具的外网下载。公网选项 2 保留 portable EXE。这里不声称内网选项能生成单文件 EXE，也不猜测无法核实的内网打包工具镜像。仍需可用的公司 npm 源与华为 Electron 镜像（环境已完整时复用）。

已经生成 win-unpacked 的 2.4.2 用户，无需重新编译即可右键压缩整个目录使用；升级后编译脚本会自动完成 ZIP 打包。66 项原有测试和新增打包分支回归测试通过；Windows .NET ZIP 步骤尚未在此 Linux 环境实测。

## 2.4.2 锁文件修复

修复 8 个依赖（含一个可选依赖）的 version 被误写为 2.2.0、但 resolved/integrity 仍对应原始包的问题。保留版本检测，恢复与原始锁文件下载地址和哈希一致的真实版本。已有依赖可以正常通过检查，避免重复 npm ci。新增全锁文件版本与 tarball URL 一致性回归检查。

## 2.4.1 内网安装修复

内网选项恢复旧版行为：npm 沿用本机用户／公司配置，Electron 使用 `https://mirrors.tools.huawei.com/electron/`，保留代理及证书。移除项目强制公网 registry，锁文件恢复 npm 的标准 registry 地址，使 npm 根据实际 registry 配置替换下载主机；并非要求直连 npm 官方公网。

将完整新版目录内容覆盖到旧项目目录（包括 `.npmrc`、`package-lock.json` 和所有 CMD），保留已有 `node_modules` 和 `.runtime`，运行 `build-win.cmd` 选择 1。`install.cmd` 与 `start.cmd` 同样提供 1／2 选项。环境完整时跳过 npm 安装，也不要求访问 registry。

内网缺少依赖时，先读取有效 npm registry。若仍为 npmjs／npmmirror 等已知公网地址，立即停止，不执行 npm ci、不切换公网。可用 `npm.cmd config get registry` 检查原有公司配置；如曾被修改，请恢复自己以前可用的公司 registry，或在 CMD 使用 `set ARONA_NPM_REGISTRY=实际公司源地址` 再编译。这里不猜测公司源地址，也不改写用户全局设置。

公网选项仍使用 npmmirror，支持 `ARONA_NPM_REGISTRY` 显式覆盖 npm 源。Electron 的镜像环境变量保留 `ELECTRON_MIRROR`，去除本项目注入的不受 npm 支持的 electron-mirror 配置。用户配置中的 no-proxy/chromedriver/puppeteer 警告不由本项目擅自删除。

该修复对照已保存的纯内网旧版完成。公司内网连通性无法在此环境实测。

## 2.4.0 更新

- 编译／安装／启动前检测 Node.js、npm、锁文件中的依赖版本和 Electron 可执行文件、版本及路径。已有环境直接复用；只在依赖缺失或版本不匹配时执行 npm ci，只有 Electron 运行时缺失时单独补下载。仅切换下载源或升级桌宠版本不会触发重装。
- 增加 GPT-SoVITS 角色 TTS：仅本地 CUDA、默认关闭、主窗口和桌宠都有开关；支持自动朗读、手动朗读、停止、语速和音量。
- 核实并登记 8 套 Hugging Face 模型，按角色下载，固定仓库版本并校验 SHA-256。模型及音频缓存独立存放，不打包进 EXE。
- 修复切换皮肤时 `Cannot set property codeagent ... which has only a getter`：状态快照只读取动态 CLI 名称。

## Windows 安装与启动

1. 解压完整目录。双击 `install.cmd` 检测桌宠依赖，已有环境会复用。也可直接运行 `build-win.cmd`，它会先检测再编译。
2. 使用 Claude Code 时双击 `install-claude.cmd` 安装；使用公司已安装的 CodeAgent 时可跳过。
3. 双击 `start.cmd` 启动桌宠。
4. 在“模型与连接 → Claude Code API”填写 API 地址、认证方式、密钥、模型名称并保存；或关闭自定义 API，在 Claude Code 终端完成原有账号登录。
5. 需要 EXE 时双击 `build-win.cmd`：按 1 使用华为内网 Electron，按 2 使用 npmmirror 公网 Electron。已有可用 Electron 时复用本机文件，不强制重新下载。`npm run dist:win` 默认公网；在 CMD 中先执行 `set ARONA_ELECTRON_SOURCE=intranet` 可选择内网。内网选项不自动从公网安装缺失的 Node.js，请提前安装 Node.js 24+。内网选项继承本机公司 npm 配置，不再强制 npmmirror。

安装入口会优先使用项目 `.runtime/node`，否则使用现有 Node.js 24+；未满足条件时从 npmmirror 下载 Node.js 24 Windows x64 ZIP，并核对 SHA256 后解压到项目 `.runtime/node`，不修改系统 PATH。便携 Node.js 如需升级，可移走该目录后重新运行安装入口。

- npm：https://registry.npmmirror.com
- Node.js：https://npmmirror.com/mirrors/node/latest-v24.x/
- Electron：https://npmmirror.com/mirrors/electron/
- Electron Builder：https://npmmirror.com/mirrors/electron-builder-binaries/

以上是下载镜像，不是 API 网络代理。服务商 API 仍需可从本机访问；不会关闭 TLS 证书校验。Windows PowerShell 仅以进程级 ExecutionPolicy Bypass 运行包内 Node.js 下载脚本，不修改系统执行策略。

## Claude Code 与 API

“模型与连接 → 本地助手 → 运行程序”可选择 Claude Code 或系统 CodeAgent（兼容模式）。聊天、文件直接发送、专业终端和技能目录跟随此选择，不依赖 CodeAgentWeb。两个程序分别保存启动路径与 CLI 会话 ID，聊天记录仍保留在同一本地助手会话中。切换前需停止正在生成的回复并结束专业终端会话。CodeAgent 模式保留系统登录、代理和证书环境，不注入桌宠保存的 Claude API 密钥；技能导入目标为 .cac/skills。CodeAgent 须支持既有 stream-json / resume CLI 参数，可使用“检测连接”确认。若找不到启动命令，可在设置填写本机 claude.exe / claude.cmd 的完整路径。推荐同时安装 Git for Windows，供 CLI 工具使用。

自定义 API 使用 Anthropic Messages 兼容协议。API 地址填服务商提供的 base URL，不要自行拼接 `/messages`；认证可选 X-Api-Key 或 Bearer。模型名称填该服务商的模型 ID，设置也会映射到 Haiku/Sonnet/Opus 子模型，避免服务商不支持默认模型名。

仅提供 OpenAI Chat Completions / Responses 的服务不能直接填写使用，须先使用支持 Anthropic 协议的转换网关。第三方服务的工具调用、流式输出和上下文支持仍取决于服务商。Claude Code 的全局/项目配置可能覆盖启动环境；如实际路由不符，请检查 `.claude/settings*.json` 中的 env。

密钥通过 Electron safeStorage 使用本机系统加密后保存，不回传给聊天页面，不进入源码包。更换 API 地址需重新填写密钥，防止旧密钥被发往新地址。API 变更后聊天开始新 CLI 会话，已启动的专业终端需结束并重新启动才能应用；历史消息保留。关闭自定义 API 后沿用本机 CLI 登录与环境配置。

首次从旧版本升级会将命令改为 `claude`，清除旧 CLI 会话 ID，关闭旧跳过授权开关，保留聊天、待办、便签及其他设置。内部数据目录和 provider ID 保持原名以延续数据。已有 `.cac/skills` 不自动复制；需要时通过导入技能选择原目录，目标为 `.claude/skills`。

## 皮肤与其他功能

13 套角色/服装各提供游戏 Q 版与正常比例立绘，共 26 套皮肤。涵盖阿罗娜/普拉娜日常、夏日、冬日，以及梓、水梓、小春、小桃、小绿、爱丽丝、凯伊。以旧版阿罗娜和普拉娜重绘为线条/上色参考，Q 版参考游戏 SD 比例，立绘版采用正常人物比例。重复的阿罗娜 Q 版/迷你条目合并并自动迁移；经典/清透仍删除。新增画风筛选。所有素材为参考角色设定的 AI 二创，并非官方资源。阿罗娜/普拉娜夏日采用防晒外套和短裤，季节服装属于二创。每套 12 帧，右键动作菜单随角色和服装变化。完整参考、性格动作设计及素材路径见《皮肤参考与动作说明.md》。暂时躲开仍使用星形恢复入口。

保留截图选区预览/移动/调整、文件直接发送、Markdown、网页代理、内置网页、便签待办互转和独立组件管理。动作不左右滑动。外置游戏仅在添加且文件存在时显示；模型、外部游戏、CodeAgentWeb 不随包分发。

## 验证范围

59 项自动测试通过；浏览器验证 26 套皮肤列表、312 次动作切帧、两种画风筛选、后端名称描述、切换角色后动作重置，以及 CLI/API 设置切换、待机动画与减少动态效果开关。附带对照页已验证角色选择、专项表情、参考图片加载及待机切换。此环境未运行 Windows 安装器、未使用你的 API 密钥执行真实请求；镜像在你所在网络的实际可达性、Windows 安装和第三方 API 兼容性仍需本机验证。

参考：
- https://code.claude.com/docs/en/setup
- https://code.claude.com/docs/en/env-vars
- https://code.claude.com/docs/en/llm-gateway
- https://www.electronjs.org/docs/latest/tutorial/installation

## 2.3.0 角色还原与待机更新

保留已确认的梓 Q 版和立绘；其余 24 套重新对照官图、游戏 SD 和表情参考绘制。水梓加入“别在那里发电”，小春加入“不可以色色”，每个动作对应独立图帧。小桃、小绿、爱丽丝、凯伊以及阿罗娜、普拉娜修正发型、光环、衣装配色和表情。详细来源及修正项见《皮肤参考与动作说明.md》，参考素材放在 reference-materials。

待机采用呼吸、轻微转向和摇摆，间隔穿插当前角色的安静动作。手动动作及回复中不被打断；专项制止表情不随机自动播放。动作切换增加 240ms 淡入过渡，系统“减少动态效果”设置会关闭视觉动画。

皮肤保持两种风格共 26 套，每套 12 个动作。素材属于二创重绘；阿罗娜、普拉娜的夏日和冬日服装是同人设计。编译 CMD 的 1 内网 / 2 公网、Claude Code / 系统 CodeAgent 切换继续保留。

解压后可先打开 `review/skin-review.html` 对照动作与参考图，无需安装依赖。编译脚本统一采用 ASCII 文本及 Windows CRLF 换行，保留 1 内网 / 2 公网选择，避免中文编码造成命令截断。


## 角色语音 TTS（本地 NVIDIA CUDA）

### 手动设置（也可使用上方的一键配置）

1. 在“模型与连接 → 角色语音 → CUDA 环境”点击“获取官方整合包”，从 GPT-SoVITS 官方项目下载并解压 **NVIDIA 整合包**。已有 GPT-SoVITS 环境无需重装。整合包需包含 `GPT_SoVITS/TTS_infer_pack/TTS.py`、CUDA 版 PyTorch，以及 `GPT_SoVITS/pretrained_models/chinese-hubert-base` 和 `chinese-roberta-wwm-ext-large`。普拉娜建议使用支持 v2Pro GPT 权重的新版整合包。
2. 点“选择 GPT-SoVITS 目录”，选择包含上述文件夹的根目录。自动识别 `runtime/python.exe` 或 `.venv` 的 Python；使用其他虚拟环境可手动选其中的 `python.exe`。点“检测 CUDA”确认显卡、PyTorch 和 CUDA。仅装 CUDA Toolkit 不代表安装了 CUDA 版 PyTorch。
3. 选择角色，点击“下载此角色”。每套权重约 240 MB；梓、水梓、小春、小桃、小绿、爱丽丝另有约 12–19 MB 的参考音频 ZIP。模型使用时才加载到 GPU，重启无需重新下载。
4. 有参考包的角色点击“加载仓库参考音频”，选择一条 3–10 秒语音，开启 TTS 后可“试听参考音频”，核对并修正台词。社区音频分类和文件名可能不准确，不能直接当作已核实的转录。阿罗娜、普拉娜仓库未附参考音频，需导入对应角色的干净 WAV，并填写准确台词及参考语言。
5. 开启 TTS，保存并试听。试听针对管理列表选中的角色；正常聊天勾选“音色随皮肤变化”时使用当前皮肤对应角色。取消此选项则固定使用手动选中的音色。

### 已接入的社区模型

| 音色 | Hugging Face 仓库 | 参考语音 |
| --- | --- | --- |
| 阿罗娜 | https://huggingface.co/xingguangcuican6666/arona-sovits | 自行导入；默认 normal 配套权重 |
| 普拉娜 | https://huggingface.co/xingguangcuican6666/plana-gptsovits-v2 | 自行导入；GPT v2Pro / SoVITS v2 配套 |
| 梓、水梓、小春、小桃、小绿、爱丽丝 | https://huggingface.co/UnlimitedBurst/GPT-SoVITS | 仓库提供日语参考 ZIP，需试听核对 |

具体文件、固定 revision、字节大小和 SHA-256 在 `tts-models.cjs`。这些是社区训练模型，并非官方配音产品。阿罗娜作者将权重标注为 GPL-3.0 并限定个人、研究及非商业使用；其他仓库标注 MIT，角色素材权利和源项目要求仍应遵守。凯伊暂无已核实配套模型，随皮肤模式下明确提示暂不可用，不会冒用其他音色。

### 行为与环境复用

- 开关默认关闭；关闭或点击停止语音会中止播放、终止本程序的推理子进程并释放其显存。再次朗读会重新加载模型。不会终止用户自行启动的 GPT-SoVITS。
- 开启自动朗读后，只朗读当前会话的成功回复；两窗口只播放一次。合成繁忙时不会堆积回复。每条最多 800 字，跳过 Markdown 代码块和链接地址。
- 文本通过本地管道传给 Python，合成阶段强制离线，不上传到 Hugging Face 或云端。CUDA 不可用则报错，不静默转 CPU。Hugging Face 仅用于模型文件下载。
- 模型保存在 `%APPDATA%/arona-codeagent-desktop/tts-cache`；GPT-SoVITS 整合包独立放在用户选择的目录。安装桌宠、编译、开关 TTS 都不会重复 pip 安装或重新下载缓存有效的权重。
- 配置和参考音频按角色保存；水梓有独立权重，Q 版和立绘共用同一角色音色。角色表情动作不触发自动语音。
- 模型下载支持取消，半成品清理后可重试；完成文件校验后复用。下载失败请检查 Hugging Face 连通性；程序保留系统代理和证书设置。
- 无需启动 `api_v2.py` 或开放监听端口。桌宠使用所选 Python 的 GPT-SoVITS 推理类，保持一个常驻 CUDA 进程，并在切换权重时释放前一个模型。

### 验证范围

本版通过 64 项 Node 测试；另通过 Chromium 主窗口／桌宠窗口操作检查，以及 Python worker 协议、CUDA 必需条件、WAV 输出和 ZIP 安全解包测试（GPU 和模型使用测试替身）。尚未在真实 Windows NVIDIA 环境加载这 8 套权重试听，也未在本环境生成 Windows EXE；交付为可在 Windows 编译的完整源码包。模型质量、驱动兼容性及实际显存需求需在本机“检测 CUDA／保存并试听”确认。

推理接口依据：https://github.com/RVC-Boss/GPT-SoVITS/blob/main/GPT_SoVITS/TTS_infer_pack/TTS.py
