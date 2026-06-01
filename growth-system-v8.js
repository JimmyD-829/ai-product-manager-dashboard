// V8 Growth System Upgrade - AI Coach 2.0 + Learning Analytics + KPI + Interview Bank

const interviewQuestions = [
{category:"产品设计",type:"🎨 产品设计题",question:"设计一个AI智能客服系统",difficulty:"⭐⭐⭐ 中级",hint:"考虑用户场景、技术架构、商业价值、评估指标"},
{category:"产品设计",type:"🎨 产品设计题",question:"为老年人设计一款AI健康助手",difficulty:"⭐⭐⭐ 高级",hint:"关注易用性、隐私、家庭协作、医疗合规"},
{category:"产品设计",type:"🎨 产品设计题",question:"设计一个AI驱动的个性化学习平台",difficulty:"⭐⭐⭐ 中级",hint:"思考自适应学习路径、内容推荐、激励机制、效果衡量"},
{category:"AI产品",type:"🤖 AI产品题",question:"ChatGPT为什么成功？核心原因是什么？",difficulty:"⭐⭐ 入门",hint:"从产品形态、技术、时机、生态多维度分析"},
{category:"AI产品",type:"🤖 AI产品题",question:"Cursor vs GitHub Copilot，差异和各自优势？",difficulty:"⭐⭐⭐ 中级",hint："对比目标用户、产品定位、技术实现、商业模式"},
{category:"AI产品",type:"🤖 AI产品题",question:"如何评估一个AI产品的质量？",difficulty:"⭐⭐⭐ 高级",hint:"准确性、速度、成本、用户体验、安全性、可解释性"},
{category:"Agent",type:"🤖 Agent专题题",question:"Agent和Workflow的区别？什么时候用哪个？",difficulty:"⭐⭐⭐ 中级",hint：'Agent=自主决策+反馈循环；Workflow=预定义步骤'},
{category:"Agent",type:"🤖 Agent专题题",question:"MCP协议的价值是什么？为什么重要？",difficulty:"⭐⭐⭐ 高级",hint:"标准化接口、生态效应、降低集成成本"},
{category:"Agent",type:"🤖 Agent专题题",question:"如何设计Multi-Agent系统？关键挑战？",difficulty:"⭐⭐⭐⭐ 专家",hint:"任务分解、通信机制、冲突解决、状态同步"},
{category:"商业模式",type:"📊 商业模式题",question:"AI产品的定价策略有哪些？如何选择？",difficulty:"⭐⭐⭐ 中级",hint:"Freemium/Usage-based/Tiered/Enterprise，结合成本结构"},
{category:"商业模式",type:"📊 商业模式题",question:"Freemium如何转化为付费用户？关键驱动因素？",difficulty:"⭐⭐⭐ 中级",hint："价值感知触发点、使用深度指标、转化时机设计"},
{category:"Prompt",type:"📝 Prompt实战题",question:"优化这个Prompt让它更有效：'帮我写个PRD'",difficulty:"⭐⭐ 入门",hint："使用RCGCF框架，增加角色、背景、目标、约束、格式"}
];

const kpiData = {
skills:[
{name:"产品分析能力",score:75,target:90,icon:"📊",color:"#4ade80"},
{name:"用户研究能力",score:60,target:80,icon:"👥",color:"#60a5fa"},
{name:"Prompt工程能力",score:80,target:90,icon:"💬",color:"#f472b6"},
{name:"RAG技术理解",score:40,target:70,icon:"🔍",color:"#fbbf24"},
{name:"Agent应用能力",score:20,target:60,icon:"🤖",color:"#a78bfa"},
{name:"商业模式设计",score:55,target:75,icon:"💰",color:"#fb923c"},
{name:"数据分析能力",score:65,target:80,icon:"📈",color:"#2dd4bf"}
],
history:{}
};

const learningStats = {
totalProductsAnalyzed:28,
totalPromptsCreated:136,
totalStudyDays:42,
totalProjectsCompleted:5,
currentStreak:36,
weeklyHours:18,
thisWeekTasks:12,
interviewAnswered:15
};

function renderAICoach20() {
const coachSection = document.getElementById('aiCoachRecommendation');
if(!coachSection) return;

const weakestSkill = [...kpiData.skills].sort((a,b)=>(a.target-a.score)-(b.target-b.score))[0];
const strongestSkill = [...kpiData.skills].sort((a,b)=>(b.score/a.target)-(a.score/b.target))[0];

coachSection.innerHTML = `
<div style="background:linear-gradient(135deg,rgba(212,168,83,0.1),rgba(45,212,191,0.1));border:1px solid var(--border-color);border-radius:16px;padding:24px;margin:16px 0;">

<div style="display:flex;align-items:center;gap:14px;margin-bottom:20px;">
<span style="font-size:2.5rem;">🧠</span>
<div>
<div style="font-family:'Cormorant Garamond',serif;font-size:1.7rem;color:var(--accent-gold);font-weight:600;">Hi Jimmy! 👋</div>
<div style="color:var(--text-secondary);margin-top:4px;">你的私人AI PM导师</div>
</div>
<div style="margin-left:auto;text-align:right;">
<div style="font-size:0.9rem;color:var(--text-secondary);">连续学习</div>
<div style="font-size:1.8rem;color:var(--accent-teal);font-weight:700;">${learningStats.currentStreak}天 🎉</div>
</div>
</div>

<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:12px;margin-bottom:20px;">
<div style="background:rgba(12,18,32,0.6);padding:14px;border-radius:10px;text-align:center;">
<div style="font-size:1.5rem;color:var(--accent-gold);">${learningStats.totalProductsAnalyzed}</div>
<div style="font-size:0.85rem;color:var(--text-secondary);">拆解产品</div>
</div>
<div style="background:rgba(12,18,32,0.6);padding:14px;border-radius:10px;text-align:center;">
<div style="font-size:1.5rem;color:var(--accent-teal);">${learningStats.totalPromptsCreated}</div>
<div style="font-size:0.85rem;color:var(--text-secondary);">Prompt练习</div>
</div>
<div style="background:rgba(12,18,32,0.6);padding:14px;border-radius:10px;text-align:center;">
<div style="font-size:1.5rem;color:var(--accent-coral);">${learningStats.weeklyHours}h</div>
<div style="font-size:0.85rem;color:var(--text-secondary);">本周学习</div>
</div>
<div style="background:rgba(12,18,32,0.6);padding:14px;border-radius:10px;text-align:center;">
<div style="font-size:1.5rem;color:#4ade80;">${learningStats.thisWeekTasks}</div>
<div style="font-size:0.85rem;color:var(--text-secondary);">完成任务</div>
</div>
</div>

<div style="background:rgba(12,18,32,0.5);border-left:3px solid var(--accent-coral);padding:16px;border-radius:8px;margin-bottom:16px;">
<div style="color:var(--accent-coral);font-weight:600;margin-bottom:10px;font-size:1rem;">🎯 本周建议 - 重点提升 ${weakestSkill.icon} ${weakestSkill.name}</div>
<ul style="margin:0;padding-left:20px;color:var(--text-secondary);font-size:0.9rem;line-height:1.9;">
<li><strong>推荐学习：</strong>${weakestSkill.name === 'Agent应用能力' ? 'n8n工作流实战 / Dify平台探索' : weakestSkill.name === 'RAG技术理解' ? 'Pinecone向量数据库实践 / RAG应用案例' : `${weakestSkill.name}相关课程和实践`}</li>
<li><strong>预计时间：</strong>${weakestSkill.target - weakestSkill.score >= 30 ? '8-12小时（需要重点突破）' : '4-6小时（稳步提升即可）'}</li>
<li><strong>推荐资源：</strong>知识库相关章节 + 产品数据库中对应案例</li>
</ul>
</div>

<div style="background:rgba(45,212,191,0.08);border:1px solid rgba(45,212,191,0.2);padding:16px;border-radius:12px;margin-bottom:16px;">
<div style="color:var(--accent-teal);font-weight:600;margin-bottom:10px;font-size:1rem;">📊 当前能力雷达</div>
<div style="display:flex;flex-wrap:wrap;gap:10px;">
${kpiData.skills.map(skill => `
<div style="flex:1;min-width:140px;background:rgba(12,18,32,0.5);padding:10px;border-radius:8px;">
<div style="font-size:0.85rem;color:var(--text-secondary);margin-bottom:6px;">${skill.icon} ${skill.name}</div>
<div style="background:rgba(255,255,255,0.1);border-radius:6px;height:8px;overflow:hidden;">
<div style="height:100%;width:${(skill.score/skill.target)*100}%;background:${skill.color};border-radius:6px;transition:width 0.3s;"></div>
</div>
<div style="display:flex;justify-content:space-between;margin-top:4px;font-size:0.8rem;">
<span style="color:${skill.color};">${skill.score}分</span>
<span style="color:var(--text-secondary);">目标${skill.target}</span>
</div>
</div>
`).join('')}
</div>
</div>

<div style="background:rgba(12,18,32,0.4);border-radius:10px;padding:14px;">
<div style="color:var(--accent-gold);font-weight:600;margin-bottom:8px;font-size:0.95rem;">💡 今日灵感金句</div>
<div style="color:var(--text-primary);font-style:italic;line-height:1.6;">"${getDailyQuote()}"</div>
</div>

</div>

<div style="display:flex;gap:12px;flex-wrap:wrap;margin-top:16px;">
<button class="btn" onclick="refreshCoachAdvice()" style="flex:1;min-width:150px;">🔄 换一个建议</button>
<button class="btn btn-secondary" onclick="showLearningDashboard()" style="flex:1;min-width:150px;">📊 查看完整报告</button>
</div>
`;
}

function getDailyQuote() {
const quotes = [
"好的PM不是回答问题，而是定义问题",
"简单是复杂的最终形式",
"不要问用户想要什么，观察他们做什么",
"产品经理是CEO的预科班",
"数据告诉你发生了什么，用户告诉你为什么",
"最好的产品是用户觉得理所当然的产品",
"PM的核心能力是把复杂变简单",
"先解决问题，再优化方案",
"用户体验不是功能，是感受",
"每一个像素都有存在的理由"
];
const today = new Date().getDate();
return quotes[today % quotes.length];
}

function refreshCoachAdvice() {
renderAICoach20();
addExp(2);
}

function showLearningDashboard() {
switchTab('growth');
addExp(1);
}

function renderKPIRadar() {
const container = document.getElementById('kpiRadarContainer');
if(!container) return;

container.innerHTML = `
<h3 style="font-family:'Cormorant Garamond',serif;font-size:1.5rem;color:var(--accent-gold);margin:0 0 16px 0;">🎯 PM 能力模型</h3>
<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:14px;">
${kpiData.skills.map(skill => `
<div style="background:rgba(12,18,32,0.5);padding:16px;border-radius:10px;border-left:3px solid ${skill.color};">
<div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;">
<span style="font-weight:600;color:var(--text-primary);">${skill.icon} ${skill.name}</span>
<span style="font-size:0.85rem;color:var(--text-secondary);">差距: ${skill.target - skill.score}分</span>
</div>
<div style="background:rgba(255,255,255,0.08);border-radius:8px;height:20px;overflow:hidden;position:relative;">
<div style="position:absolute;left:0;top:0;height:100%;width:${skill.target}%;background:rgba(255,255,255,0.05);border-right:2px dashed rgba(255,255,255,0.3);"></div>
<div style="height:100%;width:${Math.min((skill.score/skill.target)*100,100)}%;background:linear-gradient(90deg,${skill.color},${skill.color}dd);border-radius:8px;transition:width 0.5s ease;"></div>
</div>
<div style="display:flex;justify-content:space-between;margin-top:6px;font-size:0.85rem;">
<span style="color:${skill.color};font-weight:600;">${skill.score}/100</span>
<span style="color:var(--text-secondary);">目标 ${skill.target}</span>
</div>
</div>
`).join('')}
</div>
`;
}

function renderInterviewBank() {
const container = document.getElementById('interviewBankContainer');
if(!container) return;

const todayQuestions = getRandomQuestions(3);

container.innerHTML = `
<h3 style="font-family:'Cormorant Garamond',serif;font-size:1.5rem;color:var(--accent-coral);margin:0 0 16px 0;">❓ AI PM 面试题库 <span style="font-size:0.85rem;color:var(--text-secondary);font-weight:400;">(${interviewQuestions.length}道题)</span></h3>

<div style="background:linear-gradient(135deg,rgba(236,72,153,0.08),rgba(167,139,250,0.08));border:1px solid rgba(236,72,153,0.2);border-radius:12px;padding:18px;margin-bottom:16px;">
<div style="color:var(--accent-coral);font-weight:600;margin-bottom:12px;display:flex;align-items:center;gap:8px;">
<span>🎲 今日随机题目</span>
<button onclick="refreshInterviewQuestions()" style="margin-left:auto;padding:6px 14px;background:rgba(236,72,153,0.1);border:1px solid rgba(236,72,153,0.3);border-radius:8px;color:var(--accent-coral);cursor:pointer;font-size:0.85rem;">换一批</button>
</div>
${todayQuestions.map((q,i) => `
<div style="background:rgba(12,18,32,0.5);padding:14px;border-radius:8px;margin-bottom:10px;">
<div style="display:flex;align-items:center;gap:8px;margin-bottom:8px;">
<span style="background:${q.difficulty.includes('入门') ? '#4ade80' : q.difficulty.includes('中级') ? '#fbbf24' : '#ef4444'};color:white;padding:2px 10px;border-radius:12px;font-size:0.75rem;font-weight:600;">${q.difficulty}</span>
<span style="color:var(--text-secondary);font-size:0.85rem;">${q.type}</span>
</div>
<div style="color:var(--text-primary);font-weight:500;line-height:1.6;">Q${i+1}: ${q.question}</div>
<button onclick="showQuestionHint('${q.question.replace(/'/g,"\\'")}','${q.hint.replace(/'/g,"\\'")}')" style="margin-top:8px;padding:6px 14px;background:none;border:1px dashed var(--border-color);border-radius:6px;color:var(--text-secondary);cursor:pointer;font-size:0.85rem;">💡 查看提示</button>
</div>
`).join('')}
</div>

<div style="display:flex;gap:10px;flex-wrap:wrap;margin-bottom:16px;">
${[...new Set(interviewQuestions.map(q=>q.type))].map(type => `
<button onclick="filterByCategory('${type}')" style="padding:8px 16px;background:rgba(12,18,32,0.5);border:1px solid var(--border-color);border-radius:20px;color:var(--text-secondary);cursor:pointer;font-size:0.85rem;">${type}</button>
`).join('')}
</div>

<div id="questionHintDisplay" style="display:none;background:rgba(251,191,36,0.08);border:1px solid rgba(251,191,36,0.3);border-radius:10px;padding:16px;margin-top:12px;">
<div style="color:#fbbf24;font-weight:600;margin-bottom:8px;">💡 解题思路提示</div>
<div id="hintContent" style="color:var(--text-secondary);line-height:1.7;"></div>
</div>
`;
}

function getRandomQuestions(count) {
const shuffled = [...interviewQuestions].sort(() => Math.random() - 0.5);
return shuffled.slice(0, count);
}

function refreshInterviewQuestions() {
renderInterviewBank();
addExp(1);
}

function showQuestionQuestion(question,hint) {
const display = document.getElementById('questionHintDisplay');
const content = document.getElementById('hintContent');
if(display && content) {
display.style.display = 'block';
content.textContent = hint;
display.scrollIntoView({behavior:'smooth',block:'nearest'});
}
addExp(1);
learningStats.interviewAnswered++;
}

function filterByCategory(type) {
const filtered = interviewQuestions.filter(q => q.type === type);
alert(`${type}: 共${filtered.length}道题目\n\n第一题：${filtered[0]?.question}`);
}

function renderLearningStats() {
const container = document.getElementById('learningStatsContainer');
if(!container) return;

container.innerHTML = `
<h3 style="font-family:'Cormorant Garamond',serif;font-size:1.5rem;color:var(--accent-teal);margin:0 0 16px 0;">📈 学习数据中心</h3>

<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(180px,1fr));gap:14px;margin-bottom:20px;">
<div style="background:linear-gradient(135deg,rgba(74,222,128,0.1),rgba(74,222,128,0.02));border:1px solid rgba(74,222,128,0.2);border-radius:12px;padding:18px;text-align:center;">
<div style="font-size:2.2rem;color:#4ade80;font-weight:700;">${learningStats.totalProductsAnalyzed}</div>
<div style="color:var(--text-secondary);margin-top:4px;font-size:0.9rem;">累计拆解产品</div>
</div>
<div style="background:linear-gradient(135deg,rgba(244,114,182,0.1),rgba(244,114,182,0.02));border:1px solid rgba(244,114,182,0.2);border-radius:12px;padding:18px;text-align:center;">
<div style="font-size:2.2rem;color:#f472b6;font-weight:700;">${learningStats.totalPromptsCreated}</div>
<div style="color:var(--text-secondary);margin-top:4px;font-size:0.9rem;">累计Prompt练习</div>
</div>
<div style="background:linear-gradient(135deg,rgba(96,165,250,0.1),rgba(96,165,250,0.02));border:1px solid rgba(96,165,250,0.2);border-radius:12px;padding:18px;text-align:center;">
<div style="font-size:2.2rem;color:#60a5fa;font-weight:700;">${learningStats.totalStudyDays}</div>
<div style="color:var(--text-secondary);margin-top:4px;font-size:0.9rem;">累计学习天数</div>
</div>
<div style="background:linear-gradient(135deg,rgba(251,191,36,0.1),rgba(251,191,36,0.02));border:1px solid rgba(251,191,36,0.2);border-radius:12px;padding:18px;text-align:center;">
<div style="font-size:2.2rem;color:#fbbf24;font-weight:700;">${learningStats.currentStreak}</div>
<div style="color:var(--text-secondary);margin-top:4px;font-size:0.9rem;">连续打卡天数</div>
</div>
</div>

<div style="background:rgba(12,18,32,0.4);border-radius:12px;padding:18px;margin-bottom:16px;">
<h4 style="color:var(--text-primary);margin:0 0 14px 0;">🏅 成就徽章</h4>
<div style="display:flex;flex-wrap:wrap;gap:10px;">
<div style="background:${learningStats.totalProductsAnalyzed >= 1 ? 'rgba(74,222,128,0.15)' : 'rgba(255,255,255,0.03)'};border:1px solid ${learningStats.totalProductsAnalyzed >= 1 ? '#4ade80' : 'var(--border-color)'};padding:10px 16px;border-radius:10px;display:flex;align-items:center;gap:8px;">
<span style="font-size:1.3rem;">🎓</span><div><div style="font-weight:600;font-size:0.9rem;color:${learningStats.totalProductsAnalyzed >= 1 ? '#4ade80' : 'var(--text-secondary)'};">初学者</div><div style="font-size:0.75rem;color:var(--text-secondary);">拆解1个产品</div></div>
</div>
<div style="background:${learningStats.totalProductsAnalyzed >= 10 ? 'rgba(74,222,128,0.15)' : 'rgba(255,255,255,0.03)'};border:1px solid ${learningStats.totalProductsAnalyzed >= 10 ? '#4ade80' : 'var(--border-color)'};padding:10px 16px;border-radius:10px;display:flex;align-items:center;gap:8px;">
<span style="font-size:1.3rem;">⭐</span><div><div style="font-weight:600;font-size:0.9rem;color:${learningStats.totalProductsAnalyzed >= 10 ? '#4ade80' : 'var(--text-secondary)'};">探索者</div><div style="font-size:0.75rem;color:var(--text-secondary);">拆解10个产品</div></div>
</div>
<div style="background:${learningStats.currentStreak >= 7 ? 'rgba(251,191,36,0.15)' : 'rgba(255,255,255,0.03)'};border:1px solid ${learningStats.currentStreak >= 7 ? '#fbbf24' : 'var(--border-color)'};padding:10px 16px;border-radius:10px;display:flex;align-items:center;gap:8px;">
<span style="font-size:1.3rem;">💪</span><div><div style="font-weight:600;font-size:0.9rem;color:${learningStats.currentStreak >= 7 ? '#fbbf24' : 'var(--text-secondary)'};">坚持者</div><div style="font-size:0.75rem;color:var(--text-secondary);">连续7天打卡</div></div>
</div>
<div style="background:${learningStats.totalPromptsCreated >= 50 ? 'rgba(244,114,182,0.15)' : 'rgba(255,255,255,0.03)'};border:1px solid ${learningStats.totalPromptsCreated >= 50 ? '#f472b6' : 'var(--border-color)'};padding:10px 16px;border-radius:10px;display:flex;align-items:center;gap:8px;">
<span style="font-size:1.3rem;">✍️</span><div><div style="font-weight:600;font-size:0.9rem;color:${learningStats.totalPromptsCreated >= 50 ? '#f472b6' : 'var(--text-secondary)'};">Prompt达人</div><div style="font-size:0.75rem;color:var(--text-secondary);">50个Prompt</div></div>
</div>
</div>
</div>
`;
}

console.log('✅ V8 Growth System Loaded - AI Coach 2.0 + KPI + Interview Bank');
