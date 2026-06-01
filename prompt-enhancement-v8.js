// V8 Prompt Training Camp Enhancement - Statistics + Template Library

const promptTemplates = [
{
id:1,
name:"RCGCF 标准框架",
category:"🎯 结构化Prompt",
icon:"📝",
description:"Role-Context-Goal-Constraints-Format，适用于大多数场景",
template:`# Role
你是一位{角色}

# Context
我正在{背景情况}，需要你的帮助

# Goal
请帮我完成{具体目标}

# Constraints
- {约束条件1}
- {约束条件2}
- 输出语言：中文

# Format
请按以下格式输出：
1. {格式要求}
2. {格式要求}`,
usageCount:45,
rating:4.9,
tags:["通用","标准","入门必学"]
},
{
id:2,
name:"产品分析框架",
category:"🔍 产品拆解专用",
icon:"📊",
description:"用于AI产品的深度分析和PRD撰写",
template:`# 任务
对【{产品名称}】进行全面的AI产品经理视角分析

# 分析维度
## 1. 产品定位
- 目标用户是谁？
- 解决什么核心痛点？
- 与竞品的差异化？

## 2. 技术架构
- 使用了哪些AI技术？
- 数据流如何设计？
- 模型选择依据？

## 3. 商业模式
- 如何盈利？
- 定价策略？
- 增长飞轮？

## 4. PM洞察
- 成功关键因素
- 潜在风险点
- 改进建议

# 输出要求
使用Markdown格式，每个维度至少300字`,
usageCount:32,
rating:4.8,
tags:["产品分析","深度","PM必备"]
},
{
id:3,
name:"用户研究助手",
category:"👥 用户研究",
icon:"🎤",
description:"生成用户访谈大纲和问卷设计",
template:`# 背景
我们正在开发{产品类型}，目标用户是{用户群体}

# 任务
帮我设计一份用户访谈指南

# 要求
1. 开场白（破冰问题）
2. 用户画像探索（5个核心问题）
3. 痛点挖掘（场景化提问）
4. 需求优先级排序（Kano模型）
5. 结束语和后续跟进

# 输出格式
- 问题类型（开放式/封闭式）
- 预期回答时长
- 后续追问建议`,
usageCount:28,
rating:4.7,
tags:["用户研究","访谈","定性"]
},
{
id:4,
name:"PRD撰写助手",
category:"📋 文档生成",
icon:"📄",
description:"快速生成产品需求文档框架",
template:`# PRD：【{产品名称}】产品需求文档

## 1. 文档信息
- 版本：v1.0
- 作者：{你的名字}
- 日期：{当前日期}
- 状态：草稿/评审中/已批准

## 2. 项目背景
{为什么做这个产品？业务价值是什么？}

## 3. 用户故事
作为一个{用户角色}，
我希望{核心功能}，
以便{获得的价值}。

## 4. 功能需求
### 4.1 核心功能
| 功能点 | 优先级 | 验收标准 |
|--------|--------|----------|
| {功能1} | P0 | {标准} |

### 4.2 非功能需求
- 性能：{指标}
- 安全性：{要求}
- 兼容性：{范围}

## 5. 数据指标
-北极星指标：{核心指标}
- 关键指标：{辅助指标列表}

## 6. 风险与依赖
{潜在风险和外部依赖}`,
usageCount:56,
rating:4.9,
tags:["PRD","文档","结构化"]
},
{
id:5,
name:"竞品分析框架",
category:"🔬 竞品研究",
icon:"⚔️",
description:"系统化的竞品对比分析方法",
template:`# 竞品分析报告：【{你的产品}】vs 【{竞品名称}】

## 分析框架
### 1. 基本信息
- 公司背景
- 成立时间
- 融资情况
- 团队规模

### 2. 产品对比
| 维度 | 我的产品 | 竞品 |
|------|---------|------|
| 核心功能 | | |
| 目标用户 | | |
| 定价策略 | | |
| 技术栈 | | |

### 3. SWOT分析
#### 我的优势 (Strengths)
-

#### 我的劣势 (Weaknesses)
-

#### 竞品机会 (Opportunities)
-

#### 竞品威胁 (Threats)
-

### 4. 战略建议
基于以上分析，我应该：
1.
2.
3.`,
usageCount:23,
rating:4.6,
tags:["竞品","战略","决策"]
},
{
id:6,
name:"数据分析Prompt",
category:"📈 数据驱动",
icon:"📊",
description:"让AI帮你进行数据解读和分析",
template:`# 数据分析任务

## 数据概览
{粘贴数据或描述数据来源}

## 分析要求
1. **描述性统计**
   - 数据的基本特征
   - 分布情况
   - 异常值检测

2. **趋势分析**
   - 时间序列变化
   - 季节性规律
   - 增长率计算

3. **洞察挖掘**
   - 关键发现（Top 3）
   - 异常原因推测
   - 相关性分析

4. **行动建议**
   - 基于数据的决策建议
   - A/B测试假设
   - 下一步数据采集建议

## 输出格式
- 使用图表描述（Mermaid语法）
- 关键数字加粗
- 结论先行，再展开论证`,
usageCount:19,
rating:4.7,
tags:["数据","分析","可视化"]
},
{
id:7,
name:"代码审查助手",
category:"💻 技术协作",
icon:"🔍",
description："非技术人员也能用的代码审查Prompt",
template:`# 代码审查请求

## 代码片段
\`\`\`{编程语言}
{粘贴代码}
\`\`\`

## 审查重点
请从以下角度审查：

### 1. 正确性
- 逻辑是否正确？
- 边界条件处理？
- 异常捕获？

### 2. 可读性
- 变量命名是否清晰？
- 注释是否充分？
- 函数长度是否合理？

### 3. 性能
- 时间复杂度？
- 是否有性能瓶颈？
- 优化建议？

### 4. 安全性
- SQL注入风险？
- XSS漏洞？
- 敏感信息泄露？

## 输出格式
✅ 优点：...
⚠️ 警告：...
❌ 问题：...
💡 建议：...`,
usageCount:15,
rating:4.5,
tags:["代码","审查","技术"]
},
{
id:8,
name:"会议纪要生成器",
category:"📝 协作工具",
icon:"📋",
description："将杂乱的会议记录整理成结构化文档",
template:`# 会议纪要整理

## 原始记录
{粘贴会议录音转文字或笔记}

## 整理要求

### 基本信息
- 会议主题：
- 参会人员：
- 时间：
- 会议类型：周会/评审/头脑风暴/决策

### 核心内容提炼
1. **讨论议题**（列出所有讨论点）
2. **关键决策**（明确记录决定事项）
3. **待办事项**（Action Items）
   - [ ] 任务1 - 负责人 - 截止日期
   - [ ] 任务2 - 负责人 - 截止日期

4. **遗留问题**（未解决的问题）
5. **下次会议安排**

### 输出风格
- 使用简洁的商务语言
- 重点内容加粗
- 使用表格展示对比信息`,
usageCount:34,
rating:4.8,
tags:["会议","效率","协作"]
}
];

const promptStats = {
totalCreated:136,
thisWeek:12,
favoriteTemplates:3,
averageRating:4.7,
streakDays:15,
categories:{
"结构化Prompt":45,
"产品拆解专用":28,
"用户研究":18,
"文档生成":22,
"竞品研究":12,
"数据驱动":8,
"技术协作":3
}
};

function renderPromptStats() {
const container = document.getElementById('promptStatsPanel');
if(!container) return;

container.innerHTML = `
<div style="background:linear-gradient(135deg,rgba(244,114,182,0.08),rgba(167,139,250,0.08));border-radius:14px;padding:20px;margin-bottom:16px;">
<h4 style="color:#f472b6;margin:0 0 16px 0;font-family:'Cormorant Garamond',serif;">📊 Prompt 统计面板</h4>
<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(140px,1fr));gap:12px;">
<div style="text-align:center;background:rgba(12,18,32,0.5);padding:14px;border-radius:10px;">
<div style="font-size:1.8rem;color:#f472b6;font-weight:700;">${promptStats.totalCreated}</div>
<div style="font-size:0.85rem;color:var(--text-secondary);margin-top:4px;">累计创作</div>
</div>
<div style="text-align:center;background:rgba(12,18,32,0.5);padding:14px;border-radius:10px;">
<div style="font-size:1.8rem;color:#a78bfa;font-weight:700;">${promptStats.thisWeek}</div>
<div style="font-size:0.85rem;color:var(--text-secondary);margin-top:4px;">本周新增</div>
</div>
<div style="text-align:center;background:rgba(12,18,32,0.5);padding:14px;border-radius:10px;">
<div style="font-size:1.8rem;color:#fbbf24;font-weight:700;">${promptStats.streakDays}</div>
<div style="font-size:0.85rem;color:var(--text-secondary);margin-top:4px;">连续天数</div>
</div>
<div style="text-align:center;background:rgba(12,18,32,0.5);padding:14px;border-radius:10px;">
<div style="font-size:1.8rem;color:#4ade80;font-weight:700;">${promptStats.averageRating}</div>
<div style="font-size:0.85rem;color:var(--text-secondary);margin-top:4px;">平均评分</div>
</div>
</div>
</div>

<div style="background:rgba(12,18,32,0.4);border-radius:12px;padding:16px;margin-bottom:16px;">
<h4 style="color:var(--accent-teal);margin:0 0 12px 0;">📂 分类分布</h4>
${Object.entries(promptStats.categories).map(([cat,count]) => `
<div style="margin-bottom:10px;">
<div style="display:flex;justify-content:space-between;margin-bottom:4px;font-size:0.88rem;">
<span>${cat}</span>
<span style="color:var(--accent-teal);">${count}</span>
</div>
<div style="background:rgba(255,255,255,0.08);border-radius:6px;height:6px;overflow:hidden;">
<div style="height:100%;width:${(count/promptStats.totalCreated)*100}%;background:linear-gradient(90deg,#2dd4bf,#a78bfa);border-radius:6px;"></div>
</div>
</div>
`).join('')}
</div>

<div style="background:rgba(251,191,36,0.08);border:1px solid rgba(251,191,36,0.2);border-radius:10px;padding:14px;">
<div style="color:#fbbf24;font-weight:600;margin-bottom:8px;font-size:0.95rem;">💡 本周推荐</div>
<div style="color:var(--text-secondary);font-size:0.9rem;line-height:1.6;">
根据你的学习进度，推荐练习：<strong style="color:var(--text-primary);">Agent工作流设计</strong>和<strong style="color:var(--text-primary);">RAG系统优化</strong>相关的Prompt模板。
</div>
</div>
`;
}

function renderTemplateLibrary() {
const container = document.getElementById('templateLibraryContainer');
if(!container) return;

container.innerHTML = `
<h3 style="font-family:'Cormorant Garamond',serif;font-size:1.5rem;color:var(--accent-gold);margin:0 0 16px 0;">📚 Prompt 模板库 <span style="font-size:0.85rem;color:var(--text-secondary);font-weight:400;">(${promptTemplates.length}个模板)</span></h3>

<div style="display:flex;gap:10px;flex-wrap:wrap;margin-bottom:16px;">
<button onclick="filterTemplates('all')" class="btn btn-secondary" style="padding:8px 16px;font-size:0.85rem;">全部</button>
${[...new Set(promptTemplates.map(t=>t.category))].map(cat => `
<button onclick="filterTemplates('${cat}')" class="btn btn-secondary" style="padding:8px 16px;font-size:0.85rem;">${cat}</button>
`).join('')}
</div>

<div id="templateGrid" style="display:grid;grid-template-columns:repeat(auto-fill,minmax(320px,1fr));gap:14px;">
${promptTemplates.map(template => `
<div style="background:rgba(12,18,32,0.5);border:1px solid var(--border-color);border-radius:12px;padding:18px;transition:all 0.3s;" onmouseover="this.style.borderColor='var(--accent-gold)'" onmouseout="this.style.borderColor='var(--border-color)'">
<div style="display:flex;align-items:center;gap:10px;margin-bottom:10px;">
<span style="font-size:1.8rem;">${template.icon}</span>
<div style="flex:1;">
<div style="font-weight:600;color:var(--text-primary);font-size:1.05rem;">${template.name}</div>
<div style="font-size:0.82rem;color:var(--text-secondary);">${template.category}</div>
</div>
<div style="text-align:right;">
<div style="color:#fbbf24;font-size:0.9rem;">⭐ ${template.rating}</div>
<div style="font-size:0.75rem;color:var(--text-secondary);">使用${template.usageCount}次</div>
</div>
</div>
<p style="color:var(--text-secondary);font-size:0.88rem;line-height:1.5;margin:0 0 12px 0;">${template.description}</p>
<div style="display:flex;flex-wrap:wrap;gap:6px;margin-bottom:12px;">
${template.tags.map(tag => `<span style="background:rgba(212,168,83,0.15);color:var(--accent-gold);padding:3px 10px;border-radius:12px;font-size:0.75rem;">${tag}</span>`).join('')}
</div>
<button onclick="useTemplate(${template.id})" class="btn" style="width:100%;padding:10px;font-size:0.9rem;">📋 使用此模板</button>
</div>
`).join('')}
</div>
`;
}

function useTemplate(id) {
const template = promptTemplates.find(t => t.id === id);
if(!template) return;

const promptArea = document.getElementById('promptLibrary');
if(promptArea) {
promptArea.value = template.template;
addExp(2);
alert(`已加载模板：${template.name}\n\n你可以直接编辑或复制使用！`);
}
}

function filterTemplates(category) {
console.log('Filter templates by:', category);
addExp(1);
}

console.log('✅ V8 Prompt Enhancement Loaded - Stats Panel + Template Library');
