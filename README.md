# AI PM Academy - Dashboard V6

面向 AI 产品经理的学院级学习平台 - 从"会用 AI"到"会设计 AI 产品"

## 🎓 V6 重大升级

**核心理念转变：** 不再是面对空白框，而是拥有完整案例库和学习系统的 **AI PM Academy**

## ✨ 七大核心模块

### 🏠 首页 - 每日启动台
- **📰 AI 新闻入口**: OpenAI Blog, Anthropic News, Hugging Face, VentureBeat AI
- **🔥 灵感发现**: Product Hunt AI, There's An AI For That, GitHub Trending, Y Combinator
- **✅ 今日任务系统**: 任务管理 + 实时统计
- **💡 快速笔记**: 记录灵感和想法

### 📚 产品拆解学院 - 5个完整案例库
每个产品都包含：
- 产品定位与目标用户
- 核心价值主张与商业模式
- 详细学习重点（5-6个关键点）
- "如果是我会如何优化"思考题

**案例列表：**
1. **ChatGPT** - 对话式 AI 的标杆 (SaaS)
2. **Perplexity** - AI 搜索引擎革命 (Prosumer)
3. **Cursor** - AI 原生编程工具 (Developer Tools)
4. **Lovable** - Prompt 生成应用平台 (No-Code)
5. **n8n** - 工作流自动化与 Agent 平台 (Open Source)

### 🧠 Prompt训练营 - 分级练习体系

**三级训练体系：**
- 🟢 **入门级** (Beginner): 掌握 RCGCF 公式基础
- 🟡 **进阶级** (Intermediate): 多轮对话设计
- 🔴 **高级** (Advanced): System Prompt 架构设计

**学习资源：**
- RCGCF 公式详解表
- ❌ vs ✅ Prompt 对比案例
- Prompt 收藏库（支持分类）

### 🔬 AI 知识库 - 三大核心技术

1. **RAG (检索增强生成)**
   - 核心原理与架构
   - 关键组件详解
   - PM 决策要点

2. **Agent (智能体)**
   - Agent 核心特征
   - 主流框架对比 (LangChain, CrewAI, AutoGPT)
   - 设计模式 (ReAct, Plan-and-Execute)

3. **MCP (Model Context Protocol)**
   - Anthropic 开放标准
   - 三层架构解析
   - 为什么 PM 要关注 MCP

### 💻 项目中心 + GitHub 同步

**项目管理：**
- 项目添加与状态管理（规划中/进行中/已完成）
- Smart Recipe Recommender 项目详情模板
- 项目进展记录

**GitHub 同步：**
- 仓库配置
- 自动同步任务、笔记、复盘数据
- 一键推送更新

### 📊 周报自动生成系统

**功能特性：**
- 本周数据自动统计（完成任务、学习时长、经验值）
- 四维度内容填写：成就、学习、挑战、计划
- 一键生成专业周报格式
- 复制到剪贴板功能
- 历史周报查看

### 🏆 成长系统 - 游戏化激励

**等级体系：**
```
Lv.1 AI 使用者      (0 XP)
Lv.2 Prompt 工程师   (250 XP) ← 起点
Lv.3 AI 产品经理     (750 XP)
Lv.4 AI Builder      (1500 XP)
Lv.5 AI Founder      (3000 XP)
```

**打卡机制：**
- 每日打卡 +10 XP
- 连续 7 天奖励 +50 XP
- 连续 30 天奖励 +300 XP
- 完成案例学习 +20 XP
- 提交 Prompt 练习 +15~40 XP
- 可视化进度环 + 连续天数统计
- 成长日志记录

## 🎨 V6 设计升级

### 视觉风格
- **学院派美学**：Cormorant Garamond（优雅衬线）+ Outfit（现代几何）
- **金色主题**：琥珀金主色调 (#d4a853) + 青绿辅助色 (#2dd4bf)
- **标签页导航**：7大模块清晰分类
- **案例卡片**：渐变背景 + 结构化信息展示
- **等级徽章**：颜色编码的学习阶段标识

### 交互体验
- 流畅的标签页切换动画
- 卡片悬停发光效果
- 进度环动态展示
- 打卡网格可视化
- 一键复制周报

## 💾 数据持久化 (LocalStorage)

所有数据本地保存：
- `v6_tasks` - 任务列表
- `v6_projects` - 项目数据
- `v6_reviews` - 复盘记录
- `v6_prompts` - Prompt 收藏库
- `v6_weekly` - 周报历史
- `v6_checkins` - 打卡记录
- `v6_journal` - 成长日志
- `v6_exp` - 经验值
- `v6_exercises` - 练习提交记录

## 🚀 快速开始

```bash
# 方式一：直接打开
双击 AI_PM_OS_Dashboard_V6.html

# 方式二：使用本地服务器（推荐）
python -m http.server 8000
# 浏览器访问 http://localhost:8000/AI_PM_OS_Dashboard_V6.html
```

## 📱 技术栈

- **HTML5** - 语义化结构
- **CSS3** - Grid/Flexbox布局、动画、渐变
- **Vanilla JavaScript (ES6+)** - 无框架依赖
- **LocalStorage API** - 数据持久化
- **Google Fonts** - Cormorant Garamond + Outfit
- **SVG** - 进度环可视化

## 🆚 V5 vs V6 对比

| 特性 | V5 | V6 |
|------|----|----|
| 定位 | Dashboard | Academy 学习平台 |
| 案例 | 1个示例 | 5个完整拆解案例 |
| Prompt | 展示为主 | 分级练习体系 |
| 知识 | 无 | RAG/Agent/MCP 三大模块 |
| 周报 | 手动填写 | 自动生成 |
| 成长 | 静态地图 | 动态等级+打卡+XP |
| 新闻入口 | 无 | 8个精选网站链接 |
| GitHub同步 | 无 | 支持 |

## 🎯 适用人群

✅ AI 产品经理（初级→高级）  
✅ Prompt 工程师  
✅ AI 创业者  
✅ 想要系统学习 AI 产品设计的转型者  
✅ 需要 AI 产品灵感的产品团队  

## 📄 License

MIT License

---

**作者**: JimmyD  
**版本**: V6 - AI PM Academy  
**更新时间**: 2026-05-31  
**GitHub**: https://github.com/JimmyD-829/ai-product-manager-dashboard