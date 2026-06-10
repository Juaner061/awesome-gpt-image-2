# GPT-Image2 游戏研发 Template Lab

这个 fork 已经移除原项目的跨行业案例库，改为围绕游戏研发交付模板重新搭建。

## 当前包含

- 12 套游戏研发交付模板：[docs/templates.md](docs/templates.md)
- 一个以 Template 为核心的可预览网页
- Codex/Claude Skill：[agents/skills/gpt-image-2-game-style-library/SKILL.md](agents/skills/gpt-image-2-game-style-library/SKILL.md)
- 模板数据源：[data/style-library.json](data/style-library.json)
- 空案例数据：[data/cases.json](data/cases.json)，仅为兼容现有网页和 API 代码保留

## 模板集合

- 角色生产设定表
- 2D 动作帧表
- UI 面板切图表
- 游戏图标图集
- Tilemap 瓦片图集
- 场景关卡布局表
- 道具装备三视图
- 技能特效序列表
- 怪物战斗可读性表
- 建筑升级套装
- 商店与投放素材包
- 项目美术风格规范

## 本地运行

双击启动：

~~~cmd
D:\My-Agent\start-gpt-image-game-lab.cmd
~~~

或手动运行：

~~~bash
npm install
npm run dev -- --host 127.0.0.1 --port 5173
~~~

构建和验证：

~~~bash
npm run build
npm run pack:skill
~~~

## Agent Skill

可这样调用：

~~~text
用 gpt-image-2-game-style-library 技能生成手游 RPG UI 面板切图表 Prompt。
~~~

Skill 参考文件由 [data/style-library.json](data/style-library.json) 生成：

~~~bash
npm run generate:style-skill
~~~

## 说明

原来的 `docs/gallery*.md` 和 `data/images/case*.jpg/png` 已经有意移除。后续新增内容应作为游戏研发 Template 或经过筛选的游戏专项参考，不再恢复泛行业案例库。

## License

MIT。见 [LICENSE](LICENSE)。
