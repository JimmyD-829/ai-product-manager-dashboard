// V8 Portfolio System - Project Center Enhancement

const portfolioProjects = [
{
id:1,
title:"AI 产品拆解分析报告",
category:"产品分析",
status:"completed",
date:"2026-05-15",
thumbnail:"📊",
description:"对ChatGPT、Claude、Midjourney等10个主流AI产品进行深度拆解分析",
skills:["产品分析","竞品研究","PRD撰写"],
metrics:{views:156,score:4.8,feedback:"结构清晰，洞察深刻"},
link:"#",
images:3,
tags:["ChatGPT","Claude","Midjourney"]
},
{
id:2,
title:"Prompt 工程实战手册",
category:"Prompt工程",
status:"completed",
date:"2026-05-20",
thumbnail:"💬",
description:"从入门到高级的完整Prompt编写指南，包含50+实战案例",
skills:["Prompt设计","Few-shot","CoT"],
metrics:{views:234,score:4.9,feedback:"非常实用，案例丰富"},
link:"#",
images:8,
tags:["RCGCF","System Prompt","Chain-of-Thought"]
},
{
id:3,
title:"RAG 知识库助手原型",
category:"产品设计",
status:"progress",
date:"2026-05-28",
thumbnail:"🔍",
description:"基于RAG技术的企业知识库查询系统原型设计与Demo",
skills:["RAG","产品设计","原型制作"],
metrics:{views:89,score:null,feedback:null},
link:"#",
images:5,
tags:["Pinecone","LangChain","Vector DB"]
},
{
id:4,
title:"Agent 工作流平台概念设计",
category:"系统设计",
status:"planning",
date:"2026-06-01",
thumbnail:"🤖",
description:"Multi-Agent协作平台的产品架构和核心流程设计",
skills:["Agent","工作流","系统架构"],
metrics:{views:0,score:null,feedback:null},
link:"#",
images:0,
tags:["n8n","Dify","MCP"]
}
];

function renderPortfolio() {
const container = document.getElementById('portfolioContainer');
if(!container) return;

container.innerHTML = `
<h3 style="font-family:'Cormorant Garamond',serif;font-size:1.5rem;color:var(--accent-gold);margin:0 0 16px 0;">💼 作品集 Portfolio <span style="font-size:0.85rem;color:var(--text-secondary);font-weight:400;">(${portfolioProjects.length}个项目)</span></h3>

<div style="display:flex;gap:10px;flex-wrap:wrap;margin-bottom:16px;">
<button onclick="filterPortfolio('all')" class="btn btn-secondary" style="padding:8px 16px;font-size:0.85rem;">全部项目</button>
${[...new Set(portfolioProjects.map(p=>p.category))].map(cat => `
<button onclick="filterPortfolio('${cat}')" class="btn btn-secondary" style="padding:8px 16px;font-size:0.85rem;">${cat}</button>
`).join('')}
</div>

<div id="portfolioGrid" style="display:grid;grid-template-columns:repeat(auto-fill,minmax(350px,1fr));gap:18px;">
${portfolioProjects.map(project => `
<div style="background:rgba(12,18,32,0.5);border:1px solid var(--border-color);border-radius:14px;overflow:hidden;transition:all 0.3s;" onmouseover="this.style.transform='translateY(-4px)';this.style.borderColor='var(--accent-gold)'" onmouseout="this.style.transform='translateY(0)';this.style.borderColor='var(--border-color)'">
<div style="background:linear-gradient(135deg,rgba(212,168,83,0.12),rgba(45,212,191,0.08));padding:24px;text-align:center;">
<span style="font-size:3.5rem;display:block;margin-bottom:12px;">${project.thumbnail}</span>
<div style="display:inline-block;background:${project.status === 'completed' ? 'rgba(74,222,128,0.2)' : project.status === 'progress' ? 'rgba(251,191,36,0.2)' : 'rgba(96,165,250,0.2)'};color:${project.status === 'completed' ? '#4ade80' : project.status === 'progress' ? '#fbbf24' : '#60a5fa'};padding:4px 14px;border-radius:20px;font-size:0.82rem;font-weight:600;">
${project.status === 'completed' ? '✅ 已完成' : project.status === 'progress' ? '🔄 进行中' : '📋 规划中'}
</div>
</div>
<div style="padding:20px;">
<h4 style="color:var(--text-primary);margin:0 0 8px 0;font-size:1.15rem;font-weight:600;">${project.title}</h4>
<p style="color:var(--text-secondary);font-size:0.88rem;line-height:1.6;margin:0 0 14px 0;">${project.description}</p>

<div style="display:flex;flex-wrap:wrap;gap:6px;margin-bottom:14px;">
${project.skills.map(skill => `<span style="background:rgba(167,139,250,0.15);color:#a78bfa;padding:3px 10px;border-radius:12px;font-size:0.75rem;">${skill}</span>`).join('')}
</div>

${project.metrics.score ? `
<div style="background:rgba(12,18,32,0.4);border-radius:8px;padding:12px;margin-bottom:14px;">
<div style="display:flex;justify-content:space-between;font-size:0.85rem;margin-bottom:6px;">
<span style="color:var(--text-secondary);">浏览量</span><span style="color:var(--text-primary);">${project.metrics.views}</span>
</div>
<div style="display:flex;justify-content:space-between;font-size:0.85rem;">
<span style="color:var(--text-secondary);">评分</span><span style="color:#fbbf24;">⭐ ${project.metrics.score}</span>
</div>
</div>
` : ''}

<div style="display:flex;gap:8px;flex-wrap:wrap;margin-bottom:12px;">
${project.tags.slice(0,3).map(tag => `<span style="background:rgba(45,212,191,0.1);color:var(--accent-teal);padding:2px 8px;border-radius:10px;font-size:0.72rem;">#${tag}</span>`).join('')}
</div>

<div style="display:flex;align-items:center;justify-content:space-between;padding-top:12px;border-top:1px solid rgba(255,255,255,0.06);">
<span style="font-size:0.82rem;color:var(--text-secondary);">📅 ${project.date}</span>
<button onclick="showProjectDetail(${project.id})" class="btn btn-secondary" style="padding:6px 16px;font-size:0.85rem;">查看详情 →</button>
</div>
</div>
</div>
`).join('')}
</div>

<div style="margin-top:24px;background:linear-gradient(135deg,rgba(212,168,83,0.08),rgba(45,212,191,0.08));border:1px solid var(--border-color);border-radius:12px;padding:20px;text-align:center;">
<p style="color:var(--text-secondary);margin:0 0 12px 0;font-size:0.95rem;">想要添加新项目到你的作品集？</p>
<button onclick="showAddProjectModal()" class="btn" style="padding:12px 28px;font-size:0.95rem;">➕ 添加新项目</button>
</div>
`;
}

function showProjectDetail(id) {
const project = portfolioProjects.find(p => p.id === id);
if(!project) return;

alert(`📋 项目详情\n\n标题：${project.title}\n分类：${project.category}\n状态：${project.status}\n日期：${project.date}\n\n描述：${project.description}\n\n技能：${project.skills.join(', ')}`);
addExp(1);
}

function filterPortfolio(category) {
console.log('Filter portfolio by:', category);
addExp(1);
}

function showAddProjectModal() {
const title = prompt('请输入项目名称：');
if(title) {
alert(`✅ 项目"${title}"已添加到作品集！\n\n（实际功能需要后端支持）`);
addExp(3);
}
}

function renderPortfolioStats() {
const container = document.getElementById('portfolioStatsContainer');
if(!container) return;

const completed = portfolioProjects.filter(p=>p.status==='completed').length;
const inProgress = portfolioProjects.filter(p=>p.status==='progress').length;
const totalViews = portfolioProjects.reduce((sum,p)=>sum+(p.metrics.views||0),0);

container.innerHTML = `
<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(150px,1fr));gap:12px;margin-bottom:16px;">
<div style="text-align:center;background:linear-gradient(135deg,rgba(74,222,128,0.1),rgba(74,222,128,0.02));border:1px solid rgba(74,222,128,0.2);border-radius:12px;padding:16px;">
<div style="font-size:1.8rem;color:#4ade80;font-weight:700;">${completed}</div>
<div style="font-size:0.85rem;color:var(--text-secondary);margin-top:4px;">已完成</div>
</div>
<div style="text-align:center;background:linear-gradient(135deg,rgba(251,191,36,0.1),rgba(251,191,36,0.02));border:1px solid rgba(251,191,36,0.2);border-radius:12px;padding:16px;">
<div style="font-size:1.8rem;color:#fbbf24;font-weight:700;">${inProgress}</div>
<div style="font-size:0.85rem;color:var(--text-secondary);margin-top:4px;">进行中</div>
</div>
<div style="text-align:center;background:linear-gradient(135deg,rgba(96,165,250,0.1),rgba(96,165,250,0.02));border:1px solid rgba(96,165,250,0.2);border-radius:12px;padding:16px;">
<div style="font-size:1.8rem;color:#60a5fa;font-weight:700;">${totalViews}</div>
<div style="font-size:0.85rem;color:var(--text-secondary);margin-top:4px;">总浏览量</div>
</div>
</div>
`;
}

console.log('✅ V8 Portfolio System Loaded - Project Management + Showcase');
