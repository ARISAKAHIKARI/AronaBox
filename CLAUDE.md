# 桌宠项目维护说明

Electron 原生 HTML/CSS/JS；main.cjs 为主进程。用户在 Windows 内网使用本机 codeagent，Node.js 26。

- 内网下载配置在 bootstrap.cjs；必须保留华为 Electron 镜像和系统 CA 支持。不要覆盖用户 npm 仓库或公司代理。已有 Electron 直接复用。
- npm start / npm run pack:win / npm run dist:win。后两项在 Windows 运行。
- codeagent 使用 stdin 输入、stream-json 输出。保留 UTF-8 StringDecoder，消息不可拼接到 CMD。
- settings.skipPermissions 是用户明确请求的开关，默认 false；打开需确认，才使用 bypassPermissions。不要默认跳过权限。
- 主进程 state.threads 以 codeagent/chatgpt/doubao/gemini/deepseek 分隔；runs Map 按 provider 保存独立任务。切换模型不能取消旧任务。事件必须带 provider，渲染层过滤。
- 网页代聊通过 web-bridge.cjs 和 edge-extension。只绑定127.0.0.1，连接码认证，不开放任意远程页面跨域请求。
- 扩展只操作用户通过 popup 手动连接的标签页，不读取 Cookie、不处理登录、不绕过验证码/管理策略。
- 网页内容脚本选择器需按真实 DOM 验证；README 标注真实网页未验收。不要假称四个网页已可用。
- main IPC 白名单、contextIsolation/sandbox/nodeIntegration=false、CSP 必须保留。
- 游戏逻辑 mines-engine.js 与 UI 分开；头像昵称由 chat-ui.js 共用。
- 所有新增代码保持 npm test 通过；不改动用户 codeagent 安装目录里的 .bat。

- 1.8.0 新增 builtin-web.cjs 免配对内置模式；网页隔离 preload 不得暴露主应用 IPC。修改扩展 content.js 后运行 node build-web-preload.cjs，并同步 component-examples/edge-bridge 校验和。
- 专业模式启动外置 CodeAgentWeb，原终端从聊天右键打开；不得打包 resources/CodeAgentWeb。

- 1.8.1 Edge 后台保持通过用户连接时选中的模型标签页 debugger 实现，默认仅使用 Emulation.setFocusEmulationEnabled；断开和跨域跳转释放。不读取 Cookie、不重新附加用户取消的调试连接、不绕过公司策略。
- 内置网页允许正常 HTTP/HTTPS 确认页与 about:blank 弹窗；只有 HTTPS 实际聊天页能连接。新域名需原生确认，未选中的弹窗不能上报聊天事件。

- 1.8.2 可选 HTTP 模式允许 Network.enable/disable/streamResourceContent/getResponseBody，仅匹配已连接页、本次发送后、同源且含完整当前提示词的 POST 聊天请求。不得重放请求或导出凭据，未知协议回退 DOM。
- 外置游戏菜单和游戏库只展示有效安装；移除入口不删除文件，也不重新自动加入已移除音游。自动提示词由 chat-prompt.cjs 统一构造，专业原文模式优先。
