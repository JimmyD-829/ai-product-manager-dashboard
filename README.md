# AI PM Academy Dashboard V9 - Learning Engine

面向 AI 产品经理的职业训练系统。V9 在原 V8 Dashboard 的基础上做增量优化，保留原有内容与模块，同时加入“目标 -> 任务 -> 产出 -> 作品集”的学习闭环。

## V9 核心变化

- **保留 V8 原内容**：首页、产品数据库、Prompt 训练营、AI 知识库、项目中心、成长系统、作品集增强脚本继续保留。
- **首页增量增强**：在原首页顶部新增 V9 Learning Engine 面板，而不是重做整个页面。
- **证据型任务**：今日任务必须填写真实产出，V9 使用 `v9_` LocalStorage 前缀，不覆盖旧版数据。
- **产品拆解生成器**：基于原有产品数据库生成产品拆解报告，并可保存为作品集素材。
- **AI PM 工作流模板**：新增 PRD / RAG / Agent 类工作流模板入口。
- **能力模型**：7 个维度追踪 AI PM 能力差距：AI 技术理解、产品分析、AI UX、Prompt / Workflow、数据评估、商业化、作品表达。

## 访问地址

- GitHub Pages 根入口：`https://jimmyd-829.github.io/ai-product-manager-dashboard/`
- V9 直达：`https://jimmyd-829.github.io/ai-product-manager-dashboard/AI_PM_OS_Dashboard_V9.html`
- V8 历史版：`AI_PM_OS_Dashboard_V8.html`
- V5 历史版：`AI_PM_OS_Dashboard_V5.html`

## 本地打开

直接打开：

```bash
AI_PM_OS_Dashboard_V9.html
```

如果需要本地服务，可以用任意静态服务器托管当前目录。

## 技术栈

- HTML5
- CSS3 Grid / Flexbox
- Vanilla JavaScript
- LocalStorage
- GitHub Pages

## 版本说明

V9 保持纯静态架构，不接后端，不在前端暴露 API Key。第一版采用规则型逻辑，重点是在不破坏原 V8 内容的前提下补上“学习目标 -> 每日训练 -> 产出证据 -> 作品集”的闭环。
