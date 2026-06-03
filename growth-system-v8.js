// V8 Growth System Upgrade - AI Coach 2.0 + Learning Analytics + KPI + Interview Bank + Daily Tasks

// ===== 🎯 AI Coach 每日学习任务系统 =====
const dailyTaskSystem = {
    // 任务模板库
    taskTemplates: {
        // 产品研究类任务
        productStudy: [
            {
                id: 'ps_001',
                title: '深度拆解一个AI编程工具',
                type: 'product_study',
                icon: '🔍',
                difficulty: 'medium',
                estimatedTime: 45,
                xpReward: 25,
                category: 'AI编程工具',
                description: '从产品数据库中选择一个AI编程工具，完成完整的PM分析',
                steps: ['查看产品基本信息和定位', '分析目标用户和价值主张', '研究商业模式和定价策略', '总结成功原因和护城河', '思考如果我是PM如何改进'],
                hint: '建议选择Cursor或Copilot，它们的产品形态最成熟'
            },
            {
                id: 'ps_002',
                title: '对比两款竞品产品的差异',
                type: 'product_study',
                icon: '⚖️',
                difficulty: 'hard',
                estimatedTime: 60,
                xpReward: 35,
                category: '产品设计',
                description: '选择同赛道的两个产品，进行多维度对比分析',
                steps: ['确定对比维度（功能/体验/价格/生态）', '收集两个产品的实际使用体验', '制作对比表格', '得出结论：谁更适合什么场景？'],
                hint: '可以对比：ChatGPT vs Claude / Cursor vs Copilot / Figma vs Miro'
            }
        ],
        
        // Prompt实战类任务
        promptPractice: [
            {
                id: 'pp_001',
                title: '编写一个PRD生成Prompt',
                type: 'prompt_practice',
                icon: '✍️',
                difficulty: 'easy',
                estimatedTime: 20,
                xpReward: 15,
                category: 'Prompt工程',
                description: '使用RCGCF框架，写一个能生成高质量PRD的Prompt',
                steps: ['明确角色设定', '提供背景信息', '定义输出格式', '给出示例', '测试并迭代优化'],
                hint: '参考prompt-enhancement-v8.js中的RCGCF框架'
            },
            {
                id: 'pp_002',
                title: '优化一段糟糕的Prompt',
                type: 'prompt_practice',
                icon: '🔧',
                difficulty: 'medium',
                estimatedTime: 25,
                xpReward: 20,
                category: 'Prompt工程',
                description: '给定一个效果不好的Prompt，运用技巧进行优化',
                steps: ['识别原Prompt的问题', '应用优化技巧（角色/上下文/约束/示例）', '对比优化前后效果差异', '总结优化经验'],
                example: '原始Prompt: "帮我写个文档"\n优化后: "作为资深技术文档工程师，为以下API接口撰写开发者文档，包含请求参数、响应格式、错误码说明，以Markdown表格形式呈现"'
            },
            {
                id: 'pp_003',
                title: '设计一个Chain-of-Thought Prompt',
                type: 'prompt_practice',
                icon: '🧠',
                difficulty: 'hard',
                estimatedTime: 30,
                xpReward: 25,
                category: '高级Prompt',
                description: '创建一个引导AI逐步推理的复杂Prompt',
                steps: ['选择需要推理的场景', '设计思考步骤的引导语', '加入示例演示推理过程', '测试复杂问题的处理效果'],
                hint: '适合场景：代码审查、数据分析、方案评估'
            }
        ],
        
        // 面试准备类任务
        interviewPrep: [
            {
                id: 'ip_001',
                title: '模拟回答一道产品设计题',
                type: 'interview',
                icon: '🎤',
                difficulty: 'medium',
                estimatedTime: 40,
                xpReward: 30,
                category: '面试准备',
                description: '从面试题库随机抽取一道题目，用STAR法则组织答案',
                steps: ['阅读题目理解考察点', '构思框架（用户/场景/方案/指标）', '组织语言录制或书写答案', '对照提示检查是否遗漏要点'],
                hint: '记住：先确认问题，再给方案；展示思考过程比结论更重要'
            },
            {
                id: 'ip_002',
                title: '准备一个AI产品的商业分析',
                type: 'interview',
                icon: '📊',
                difficulty: 'hard',
                estimatedTime: 50,
                xpReward: 35,
                category: '面试准备',
                description: '选择一个热门AI产品，准备完整的商业分析框架',
                steps: ['市场规模估算（TAM/SAM/SOM）', '竞争格局分析', '商业模式画布', '风险与机会评估'],
                hint: '推荐产品：Midjourney / Notion AI / Jasper AI'
            }
        ],
        
        // 知识阅读类任务
        reading: [
            {
                id: 'rd_001',
                title: '学习RAG技术原理',
                type: 'reading',
                icon: '📚',
                difficulty: 'medium',
                estimatedTime: 35,
                xpReward: 20,
                category: '技术理解',
                description: '深入理解检索增强生成(RAG)的核心概念和应用场景',
                resources: [
                    {title: 'RAG入门指南', type: 'article'},
                    {title: '向量数据库基础', type: 'video'},
                    {title: 'Pinecone官方文档', type: 'doc'}
                ],
                quiz: 'RAG相比Fine-tuning的优势是什么？什么时候该用哪个？'
            },
            {
                id: 'rd_002',
                title: '研究Agent架构模式',
                type: 'reading',
                icon: '🤖',
                difficulty: 'hard',
                estimatedTime: 45,
                xpReward: 25,
                category: 'Agent专题',
                description: '了解Multi-Agent系统的设计模式和通信机制',
                resources: [
                    {title: 'AutoGen框架介绍', type: 'paper'},
                    {title: 'CrewAI最佳实践', type: 'tutorial'},
                    {title: 'MCP协议白皮书', type: 'spec'}
                ],
                quiz: 'ReAct、Plan-and-Execute、Multi-Agent各适合什么场景？'
            }
        ],
        
        // 实战项目类任务
        handsOn: [
            {
                id: 'ho_001',
                title: '搭建一个n8n自动化工作流',
                type: 'project',
                icon: '⚡',
                difficulty: 'medium',
                estimatedTime: 90,
                xpReward: 50,
                category: '实战项目',
                description: '使用n8n创建一个实际的AI工作流（如：自动邮件分类/内容发布）',
                steps: ['注册n8n账号或本地部署', '设计工作流逻辑', '配置节点和连接器', '测试运行并调试', '优化性能和错误处理'],
                deliverable: '截图+流程图+使用说明'
            },
            {
                id: 'ho_002',
                title: '完成一个完整的产品需求文档',
                type: 'project',
                icon: '📄',
                difficulty: 'hard',
                estimatedTime: 120,
                xpReward: 60,
                category: '实战项目',
                description: '为一个假想的AI产品撰写完整的PRD文档',
                sections: ['背景与目标', '用户画像与场景', '功能需求清单', '非功能需求', '数据指标定义', '路线图规划', '风险评估'],
                template: '使用标准PRD模板，不少于3000字'
            }
        ]
    },

    // 生成今日任务
    generateDailyTasks() {
        const today = this.getTodayKey();
        const savedTasks = localStorage.getItem(`dailyTasks_${today}`);
        
        if (savedTasks) {
            return JSON.parse(savedTasks);
        }

        // 基于能力短板智能推荐
        const weakestSkill = [...kpiData.skills]
            .sort((a, b) => (a.target - a.score) - (b.target - b.score))[0];
        
        const tasks = [];
        const usedIds = new Set();

        // 必做任务（2个）：针对最弱技能
        const requiredTasks = this.getTasksForSkill(weakestSkill.name, 2);
        requiredTasks.forEach(task => {
            if (!usedIds.has(task.id)) {
                tasks.push({...task, required: true, completed: false});
                usedIds.add(task.id);
            }
        });

        // 选做任务（3个）：混合其他类型
        const optionalTypes = ['productStudy', 'promptPractice', 'interviewPrep', 'reading', 'handsOn'];
        optionalTypes.forEach(type => {
            const pool = this.taskTemplates[type];
            const available = pool.filter(t => !usedIds.has(t.id));
            if (available.length > 0 && tasks.length < 5) {
                const task = available[Math.floor(Math.random() * available.length)];
                tasks.push({...task, required: false, completed: false});
                usedIds.add(task.id);
            }
        });

        // 保存到localStorage
        localStorage.setItem(`dailyTasks_${today}`, JSON.stringify(tasks));
        
        return tasks;
    },

    // 根据技能获取相关任务
    getTasksForSkill(skillName, count) {
        const skillMap = {
            '产品分析能力': ['productStudy'],
            'Prompt工程能力': ['promptPractice'],
            'RAG技术理解': ['reading'],
            'Agent应用能力': ['reading', 'handsOn'],
            '商业模式设计': ['interviewPrep'],
            '数据分析能力': ['productStudy', 'handsOn'],
            '用户研究能力': ['productStudy', 'interviewPrep']
        };

        const types = skillMap[skillName] || ['productStudy'];
        const allTasks = types.flatMap(type => this.taskTemplates[type]);
        
        return allTasks
            .sort(() => Math.random() - 0.5)
            .slice(0, Math.min(count, allTasks.length));
    },

    // 获取今日日期key
    getTodayKey() {
        return new Date().toISOString().split('T')[0];
    },

    // 标记任务完成
    completeTask(taskIndex) {
        const today = this.getTodayKey();
        const tasks = JSON.parse(localStorage.getItem(`dailyTasks_${today}`)) || [];
        
        if (tasks[taskIndex] && !tasks[taskIndex].completed) {
            tasks[taskIndex].completed = true;
            tasks[taskIndex].completedAt = new Date().toISOString();
            
            // 增加经验值
            addExp(tasks[taskIndex].xpReward);
            
            // 更新统计
            learningStats.thisWeekTasks++;
            
            // 保存
            localStorage.setItem(`dailyTasks_${today}`, JSON.stringify(tasks));
            
            // 刷新UI
            this.renderDailyTasks();
            
            return true;
        }
        return false;
    },

    // 获取今日完成进度
    getTodayProgress() {
        const today = this.getTodayKey();
        const tasks = JSON.parse(localStorage.getItem(`dailyTasks_${today}`)) || [];
        const completed = tasks.filter(t => t.completed).length;
        return {
            total: tasks.length,
            completed,
            percentage: tasks.length > 0 ? Math.round((completed / tasks.length) * 100) : 0
        };
    },

    // 渲染每日任务面板
    renderDailyTasks() {
        const container = document.getElementById('dailyTasksContainer');
        if (!container) return;

        const tasks = this.generateDailyTasks();
        const progress = this.getTodayProgress();
        const today = new Date().toLocaleDateString('zh-CN', { 
            month: 'long', 
            day: 'numeric',
            weekday: 'long'
        });

        container.innerHTML = `
<div style="background:linear-gradient(135deg,rgba(212,168,83,0.08),rgba(236,72,153,0.08));border:1px solid var(--border-color);border-radius:16px;padding:24px;margin:16px 0;">

<!-- 标题栏 -->
<div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:20px;">
<div style="display:flex;align-items:center;gap:14px;">
<span style="font-size:2.5rem;">📋</span>
<div>
<div style="font-family:'Cormorant Garamond',serif;font-size:1.7rem;color:var(--accent-gold);font-weight:600;">今日学习计划</div>
<div style="color:var(--text-secondary);margin-top:4px;font-size:0.9rem;">${today} · ${progress.completed}/${progress.total} 已完成</div>
</div>
</div>
<div style="text-align:right;">
<button onclick="dailyTaskSystem.refreshTasks()" style="padding:10px 18px;background:rgba(212,168,83,0.1);border:1px solid rgba(212,168,83,0.3);border-radius:10px;color:var(--accent-gold);cursor:pointer;font-size:0.9rem;display:flex;align-items:center;gap:6px;">
<span>🔄</span> 换一批任务
</button>
</div>
</div>

<!-- 进度条 -->
<div style="margin-bottom:24px;">
<div style="display:flex;justify-content:space-between;margin-bottom:8px;">
<span style="color:var(--text-secondary);font-size:0.9rem;">今日进度</span>
<span style="color:${progress.percentage === 100 ? '#4ade80' : 'var(--accent-coral)'};font-weight:600;font-size:0.9rem;">${progress.percentage}%</span>
</div>
<div style="background:rgba(255,255,255,0.1);border-radius:10px;height:12px;overflow:hidden;">
<div style="height:100%;width:${progress.percentage}%;background:linear-gradient(90deg,var(--accent-teal),#4ade80);border-radius:10px;transition:width 0.5s ease;"></div>
</div>
</div>

${progress.percentage === 100 ? `
<div style="background:linear-gradient(135deg,rgba(74,222,128,0.15),rgba(74,222,128,0.05));border:1px solid rgba(74,222,128,0.3);border-radius:12px;padding:20px;text-align:center;margin-bottom:20px;">
<div style="font-size:3rem;margin-bottom:12px;">🎉</div>
<div style="color:#4ade80;font-weight:700;font-size:1.3rem;margin-bottom:8px;">太棒了！今日任务全部完成！</div>
<div style="color:var(--text-secondary);font-size:0.95rem;">坚持就是胜利，明天继续加油！</div>
</div>
` : ''}

<!-- 任务列表 -->
<div style="display:flex;flex-direction:column;gap:14px;">
${tasks.map((task, index) => this.renderTaskCard(task, index)).join('')}
</div>

<!-- 底部操作区 -->
<div style="display:flex;gap:12px;margin-top:20px;padding-top:20px;border-top:1px solid var(--border-color);">
<button onclick="showLearningHistory()" class="btn btn-secondary" style="flex:1;">📊 历史记录</button>
<button onclick="shareDailyProgress()" class="btn btn-secondary" style="flex:1;">📤 分享进度</button>
</div>

</div>
`;
    },

    // 渲染单个任务卡片
    renderTaskCard(task, index) {
        const difficultyColors = {
            easy: {bg: 'rgba(74,222,128,0.1)', border: '#4ade80', text: '#4ade80', label: '简单'},
            medium: {bg: 'rgba(251,191,36,0.1)', border: '#fbbf24', text: '#fbbf24', label: '中等'},
            hard: {bg: 'rgba(239,68,68,0.1)', border: '#ef4444', text: '#ef4444', label: '困难'}
        };
        const diff = difficultyColors[task.difficulty];

        return `
<div style="background:${task.completed ? 'rgba(74,222,128,0.05)' : 'rgba(12,18,32,0.6)'};border:1px solid ${task.completed ? 'rgba(74,222,128,0.3)' : 'var(--border-color)'};border-radius:12px;padding:18px;transition:all 0.3s;${task.completed ? 'opacity:0.7;' : ''}">
<div style="display:flex;align-items:start;gap:14px;">
<!-- 复选框 -->
<button 
    onclick="dailyTaskSystem.completeTask(${index})" 
    style="${task.completed ? 'background:#4ade80;border-color:#4ade80;' : 'background:transparent;border-color:var(--border-color);'}width:26px;height:26px;border:2px;border-radius:8px;cursor:pointer;display:flex;align-items:center;justify-content:center;font-size:1rem;flex-shrink:0;margin-top:2px;transition:all 0.2s;"
    ${task.completed ? 'disabled' : ''}
>
${task.completed ? '✅' : ''}
</button>

<!-- 任务内容 -->
<div style="flex:1;min-width:0;">
<div style="display:flex;align-items:center;gap:10px;margin-bottom:8px;flex-wrap:wrap;">
<span style="font-size:1.4rem;">${task.icon}</span>
<span style="font-weight:600;color:${task.completed ? '#4ade80' : 'var(--text-primary)'};font-size:1.05rem;${task.completed ? 'text-decoration:line-through;' : ''}">${task.title}</span>
${task.required ? '<span style="background:var(--accent-coral);color:white;padding:2px 10px;border-radius:12px;font-size:0.75rem;font-weight:600;">必做</span>' : '<span style="background:rgba(255,255,255,0.1);color:var(--text-secondary);padding:2px 10px;border-radius:12px;font-size:0.75rem;">选做</span>'}
<span style="background:${diff.bg};border:1px solid ${diff.border};color:${diff.text};padding:2px 10px;border-radius:12px;font-size:0.75rem;font-weight:600;">${diff.label}</span>
</div>

<p style="color:var(--text-secondary);font-size:0.9rem;line-height:1.6;margin:0 0 12px 0;">${task.description}</p>

${task.steps ? `
<div style="background:rgba(255,255,255,0.03);border-radius:8px;padding:12px;margin-bottom:12px;">
<div style="color:var(--text-secondary);font-size:0.85rem;font-weight:600;margin-bottom:8px;">📝 执行步骤：</div>
<ol style="margin:0;padding-left:20px;color:var(--text-secondary);font-size:0.85rem;line-height:1.8;">
${task.steps.map(step => `<li>${step}</li>`).join('')}
</ol>
</div>
` : ''}

${task.hint ? `
<div style="background:rgba(251,191,36,0.06);border-left:3px solid #fbbf24;padding:10px 14px;border-radius:0 8px 8px 0;">
<div style="color:#fbbf24;font-size:0.85rem;font-weight:600;margin-bottom:4px;">💡 提示</div>
<div style="color:var(--text-secondary);font-size:0.85rem;line-height:1.6;">${task.hint}</div>
</div>
` : ''}

<!-- 底部信息栏 -->
<div style="display:flex;align-items:center;gap:16px;margin-top:12px;padding-top:12px;border-top:1px solid rgba(255,255,255,0.05);">
<span style="color:var(--text-secondary);font-size:0.85rem;display:flex;align-items:center;gap:4px;">
⏱️ ${task.estimatedTime}分钟
</span>
<span style="color:var(--accent-gold);font-size:0.85rem;display:flex;align-items:center;gap:4px;">
⭐ +${task.xpReward} XP
</span>
<span style="color:var(--text-secondary);font-size:0.85rem;background:rgba(255,255,255,0.05);padding:2px 10px;border-radius:12px;">
${task.category}
</span>
</div>
</div>
</div>
</div>
`;
    },

    // 刷新任务（换一批）
    refreshTasks() {
        const today = this.getTodayKey();
        localStorage.removeItem(`dailyTasks_${today}`);
        this.renderDailyTasks();
        addExp(1);
    },

    // 显示学习历史
    showHistory() {
        // 获取最近7天的任务记录
        const history = [];
        for (let i = 0; i < 7; i++) {
            const date = new Date();
            date.setDate(date.getDate() - i);
            const key = date.toISOString().split('T')[0];
            const tasks = JSON.parse(localStorage.getItem(`dailyTasks_${key}`));
            if (tasks) {
                history.push({
                    date: key,
                    tasks,
                    completed: tasks.filter(t => t.completed).length,
                    total: tasks.length
                });
            }
        }

        console.log('📊 学习历史:', history);
        alert(`最近7天学习记录：\n\n${history.map(h => `${h.date}: ${h.completed}/${h.total} 完成`).join('\n')}`);
    }
};

// 全局函数供HTML调用
function showLearningHistory() {
    dailyTaskSystem.showHistory();
}

function shareDailyProgress() {
    const progress = dailyTaskSystem.getTodayProgress();
    const streak = learningStats.currentStreak;
    const text = `🎯 PM学习打卡第${streak}天\n✅ 今日完成: ${progress.completed}/${progress.total}\n📈 完成率: ${progress.percentage}%\n\n#PM成长 #AI产品经理 #每日学习`;
    
    if (navigator.clipboard) {
        navigator.clipboard.writeText(text);
        alert('已复制到剪贴板，可以分享到朋友圈或社交媒体！');
    } else {
        alert(text);
    }
    addExp(1);
}

// ===== 📝 面试题库 =====
const interviewQuestions = [
{category:"产品设计",type:"🎨 产品设计题",question:"设计一个AI智能客服系统",difficulty:"⭐⭐⭐ 中级",hint:"考虑用户场景、技术架构、商业价值、评估指标"},
{category:"产品设计",type:"🎨 产品设计题",question:"为老年人设计一款AI健康助手",difficulty:"⭐⭐⭐ 高级",hint:"关注易用性、隐私、家庭协作、医疗合规"},
{category:"产品设计",type:"🎨 产品设计题",question:"设计一个AI驱动的个性化学习平台",difficulty:"⭐⭐⭐ 中级",hint:"思考自适应学习路径、内容推荐、激励机制、效果衡量"},
{category:"AI产品",type:"🤖 AI产品题",question:"ChatGPT为什么成功？核心原因是什么？",difficulty:"⭐⭐ 入门",hint:"从产品形态、技术、时机、生态多维度分析"},
{category:"AI产品",type:"🤖 AI产品题",question:"Cursor vs GitHub Copilot，差异和各自优势？",difficulty:"⭐⭐⭐ 中级",hint:"对比目标用户、产品定位、技术实现、商业模式"},
{category:"AI产品",type:"🤖 AI产品题",question:"如何评估一个AI产品的质量？",difficulty:"⭐⭐⭐ 高级",hint:"准确性、速度、成本、用户体验、安全性、可解释性"},
{category:"Agent",type:"🤖 Agent专题题",question:"Agent和Workflow的区别？什么时候用哪个？",difficulty:"⭐⭐⭐ 中级",hint:"Agent=自主决策+反馈循环；Workflow=预定义步骤"},
{category:"Agent",type:"🤖 Agent专题题",question:"MCP协议的价值是什么？为什么重要？",difficulty:"⭐⭐⭐ 高级",hint:"标准化接口、生态效应、降低集成成本"},
{category:"Agent",type:"🤖 Agent专题题",question:"如何设计Multi-Agent系统？关键挑战？",difficulty:"⭐⭐⭐⭐ 专家",hint:"任务分解、通信机制、冲突解决、状态同步"},
{category:"商业模式",type:"📊 商业模式题",question:"AI产品的定价策略有哪些？如何选择？",difficulty:"⭐⭐⭐ 中级",hint:"Freemium/Usage-based/Tiered/Enterprise，结合成本结构"},
{category:"商业模式",type:"📊 商业模式题",question:"Freemium如何转化为付费用户？关键驱动因素？",difficulty:"⭐⭐⭐ 中级",hint:"价值感知触发点、使用深度指标、转化时机设计"},
{category:"Prompt",type:"📝 Prompt实战题",question:"优化这个Prompt让它更有效：'帮我写个PRD'",difficulty:"⭐⭐ 入门",hint:"使用RCGCF框架，增加角色、背景、目标、约束、格式"}
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
const coachSection = document.getElementById('aiCoachV8Container');
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

<!-- 📋 每日学习任务面板 -->
<div id="dailyTasksContainer"></div>

<div style="display:flex;gap:12px;flex-wrap:wrap;margin-top:16px;">
<button class="btn" onclick="refreshCoachAdvice()" style="flex:1;min-width:150px;">🔄 换一个建议</button>
<button class="btn btn-secondary" onclick="showLearningDashboard()" style="flex:1;min-width:150px;">📊 查看完整报告</button>
</div>
`;

// 渲染每日学习任务
dailyTaskSystem.renderDailyTasks();
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

function showQuestionHint(question,hint) {
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
