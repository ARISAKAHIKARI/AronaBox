# 第三方组件与素材说明

Required Notice: Copyright in the first-party AronaBox code remains with its respective contributors.

本项目权利人有权授权的程序及相关内容按根目录 [LICENSE](LICENSE) 提供。以下组件与素材不因此被重新授权；各自许可、版权声明和权利人的要求继续有效。本清单记录仓库中已识别的主要项目，并非对所有间接依赖或素材授权的完整审计。

## 随仓库提供的第三方软件

| 组件 | 用途 | 许可与来源 |
| --- | --- | --- |
| Mihomo v1.19.31 | 独立代理核心 | GPL-3.0；原文及对应源码见 [proxy-runtime](proxy-runtime/)，来源和哈希见 [mihomo-source.txt](proxy-runtime/mihomo-source.txt)。项目以独立进程调用它。 |
| 7-Zip / 7zr | 解压工具 | 见 [LICENSE-7zip.txt](tts-runtime/LICENSE-7zip.txt) 和 [7zip-source.txt](tts-runtime/7zip-source.txt)。 |
| Three.js | MMD 和弹球界面渲染 | MIT；见 [THREE-LICENSE.txt](vendor/THREE-LICENSE.txt)。 |
| xterm.js 与 fit 插件 | 终端显示 | 分别见 [XTERM-LICENSE.txt](vendor/XTERM-LICENSE.txt) 和 [XTERM-FIT-LICENSE.txt](vendor/XTERM-FIT-LICENSE.txt)。 |
| @lydell/node-pty | Windows 伪终端 | 见 [vendor/pty-win32-x64/LICENSE](vendor/pty-win32-x64/LICENSE)。 |
| Electron、electron-builder 及其他 npm 依赖 | 运行与构建 | 各依赖适用其自身许可；版本及依赖清单见 [package-lock.json](package-lock.json) 和各上游项目。 |

编译后的 Windows 包中，项目许可证及本说明位于 `resources/`；Three.js 和 xterm 许可位于 `resources/third-party/`，其余随包组件的许可分别位于对应的 `resources/pty-win32-x64/`、`resources/tts-runtime/` 与 `resources/proxy-runtime/`。

## 角色、参考图和语音素材

- 《蔚蓝档案》角色名称、形象及相关原作权利归各自权利人所有；AronaBox 是非官方二创，不代表获得官方授权或认可。
- 内置皮肤为参考角色设定制作的二创。原有角色权利及其他第三方权利不因项目许可证而转让；素材的使用和再分发仍须遵守适用要求。
- [reference-materials/](reference-materials/) 包含官方及其他作者作品的参考图片；来源见 [皮肤参考与动作说明](皮肤参考与动作说明.md) 和 [2.7.0 重绘说明](重绘版说明-2.7.0.md)。这些参考图的再分发授权尚未逐项核实，请在使用或转载前确认。
- 用户自行添加的 MMD 模型、动作、外置游戏及按需下载的 GPT-SoVITS 环境、角色权重和参考语音均按其各自来源的许可使用；项目许可证不代替这些许可。
