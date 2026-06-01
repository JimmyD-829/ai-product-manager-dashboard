// V8 AI Product Database - Core Functions (Fixed Version)
console.log('🚀 product-database.js loading...');

const productDatabase = [
{id:1,name:"ChatGPT",category:"chat",icon:"🤖",url:"https://chat.openai.com",users:"5亿+",pricing:"Freemium + Plus $20/mo",rating:9.9,hot:true,founded:"2022",team:"500+",funding:"$11B",desc:"OpenAI出品的对话式AI助手引领生成式AI浪潮的标志性产品",position:"通用AI助手通过自然语言交互提供信息创意和解决方案降低AI使用门槛",targetUsers:"学生开发者产品经理企业用户研究人员内容创作者",valueProp:"提问即获得答案 - 极简交互强大能力多场景适用",features:{primary:["多轮对话与上下文记忆","GPT-4/GPT-4o多模型支持","插件与GPT Store生态","代码解释器(数据分析/绘图)","DALL-E 3图像生成","语音对话模式"],secondary:["自定义指令(个性化)","文件上传与分析","浏览联网搜索","团队工作区(Enterprise)","API接口服务"]},businessModel:{freemium:"免费版提供GPT-3.5限制使用频率",subscription:"Plus $20/mo (GPT-4优先) / Team $25/user/mo",enterprise:"SSO管理控制台数据隔离无限速"},pmAnalysis:{successReason:["1. 产品形态极简：单输入框零学习成本\n2. 技术领先性：GPT系列模型持续迭代\n3. 先发优势：定义了Chatbot产品范式\n4. 生态构建：Plugin/GPT Store形成飞轮\n5. 品牌效应：ChatGPT成为AI代名词"],moat:["1. 数据飞轮：海量用户反馈优化模型\n2. 模型壁垒：GPT-4仍保持领先\n3. 开发者生态：API+Plugin网络效应\n4. 品牌认知：用户心智占领\n5. 资源优势：Microsoft深度合作"],growthFlywheel:["用户体验→口碑传播→更多用户→更多训练数据→模型更优→体验更好"]}},
{id:2,name:"Claude",category:"chat",icon:"🔮",url:"https://claude.ai",users:"数百万",pricing:"Free + Pro $20/mo",rating:9.8,hot:true,founded:"2021",team:"300+",funding:"$7.3B",desc:"Anthropic出品的AI助手以安全性和长上下文处理能力著称",position:"安全优先的AI助手在能力与安全之间找到平衡点适合对安全性要求高的场景",targetUsers:"企业用户开发者研究者法律金融从业者教育工作者",valueProp:"Helpful Harmless and Honest - 可靠安全诚实的AI伙伴",features:{primary:["200K token超长上下文窗口","Constitutional AI安全机制","多文档同时分析","代码能力(GitHub集成)","Artifacts实时预览"],secondary:["项目组织(Knowledge)团队协作空间API服务PDF/图像理解"]},businessModel:{freemium:"免费版提供Claude 3 Sonnet",subscription:"Pro $20/mo (Opus优先) / Team $30/user/5mo",enterprise:"Admin console SCIM 审计日志 SLA保证"},pmAnalysis:{successReason:["1. 差异化定位：安全优先建立信任\n2. 长上下文优势：200K token行业领先\n3. 学术背景：AI安全研究权威\n4. 多模型策略：Opus/Sonnet/Haiku分层"],moat:["1. Constitutional AI方法论\n2. 安全研究积累\n3. 长上下文技术优势\n4. 企业信任度"],growthFlywheel:["安全声誉→企业客户→高质量反馈→模型优化→更强能力"]}},
{id:3,name:"Perplexity",category:"chat",icon:"🔍",url:"https://perplexity.ai",users:"1000万+",pricing:"Free + Pro $20/mo",rating:9.7,hot:true,founded:"2022",team:"50+",funding:"$100M+",desc:"AI驱动的搜索引擎每句话都附带引用来源重新定义信息获取方式",position:"AI搜索引擎结合大语言模型与实时搜索提供带引用的可信回答",targetUsers:"研究者学生专业人士知识工作者记者分析师",valueProp:"搜索+总结+引用 - 一站式获取可信信息减少幻觉",features:{primary:["引用来源(每句话可追溯)","实时联网搜索(非训练数据)","Follow-up问题链引导探索","Collections研究收藏夹","Pro搜索(高级筛选)"],secondary:["学术搜索模式图像生成(DALL-E/Stable Diffusion)API接口Spaces主题社区"]},businessModel:{freemium:"免费版每日5次Pro搜索",subscription:"Pro $20/mo (无限GPT-4/Claude + 300次Pro搜索)",enterprise:"API access 内部知识库集成"},pmAnalysis:{successReason:["1. 解决LLM痛点：引用机制消除幻觉疑虑\n2. 产品体验优秀：快速准确可验证\n3. 差异化明显：与传统Google不同\n4. 学术友好：天然适配研究场景"],moat:["1. 搜索引擎整合技术\n2. 引用系统专利\n3. 用户使用习惯养成\n4. 实时数据管道"],growthFlywheel:["用户查询→搜索结果优化→回答质量提升→用户留存→更多查询"]}},
{id:4,name:"Cursor",category:"code",icon:"⚡",url:"https://cursor.sh",users:"开发者群体",pricing:"Free + Pro $20/mo",rating:9.9,hot:true,founded:"2022",team:"40+",funding:"$80M(估值$4B)",desc:"AI原生代码编辑器重新定义编程体验GitHub 40K+ Stars",position:"AI-first代码编辑器从写代码升级为描述需求让AI实现",targetUsers:"全栈工程师前端后端开发者技术创业者学生开发者",valueProp:"从写代码到描述需求 - AI深度集成的编程新范式",features:{primary:["Composer模式(多文件同时编辑)","Codebase索引(理解整个项目)","Cmd+K/Cmd+L(内联编辑聊天)","Tab补全(智能代码预测)",".cursorrules(AI规则配置)"],secondary:["终端集成Git操作调试助手多模型切换(GPT-4/Claude/自研)"]},businessModel:{freemium:"免费版(2000次补全/月)",subscription:"Pro $20/mo (无限补全 + 慢速Composer)\nBusiness $40/user/mo (更快速度 + 管理功能)",enterprise:"管理员控制台SSO审计日志优先支持"},pmAnalysis:{successReason:["1. 产品形态创新：AI原生IDE\n2. 开发者口碑：Product Hunt #1\n3. Fork VS Code：降低迁移成本\n4. 补充体验：快如闪电"],moat:["1. Codebase Indexing技术\n2. 开发者使用习惯\n3. 训练数据(代码编辑行为)\n4. 速度优势(本地推理)"],growthFlywheel:["开发者使用→代码数据→模型优化→体验提升→更多开发者"]}},
{id:5,name:"GitHub Copilot",category:"code",icon:"🐙",url:"https://github.com/features/copilot",users:"150万+付费",pricing:"Free + $10/$19 mo",rating:9.6,hot:true,founded:"2021",team:"GitHub/Microsoft",funding:"Microsoft",desc:"GitHub官方AI编程助手VS Code/JetBrains等多IDE支持",position:"全球最主流的AI编程工具IDE内置的AI Pair Programmer",targetUsers:"所有程序员前端后端移动数据科学学生",valueProp:"AI Pair Programmer - 与你结对编程的AI助手",features:{primary:["行内代码补全(灰色建议文字)","Chat模式(对话框式交互)","Copilot Chat(自然语言改代码)","Copilot Enterprise(企业级)","多IDE支持(VS Code/JetBrains/VS/Neovim)"],secondary:["Copilot X(Pull Request描述摘要)CLI命令行安全过滤(避免漏洞代码)"]},businessModel:{freemium:"Verified students/teachers free\nOpen source maintainers free",subscription:"Individual $10/mo\nBusiness $19/user/mo",enterprise:"Enterprise $39/user/mo (IP indemnification + policy management)"},pmAnalysis:{successReason:["1. GitHub生态绑定：1亿+开发者\n2. IDE覆盖广：VS Code预装\n3. 微软资源：GPT-4模型支持\n4. 先发优势：2021年推出"],moat:["1. GitHub代码库训练数据\n2. IDE市场份额\n3. 企业GitHub依赖\n4. Microsoft算力支持"],growthFlywheel:["GitHub用户→Copilot试用→付费转化→更多代码数据→模型优化"]}},
{id:6,name:"Lovable",category:"code",icon:"🎨",url:"https://lovable.dev",users:"数十万",pricing:"Free + Pro $20/mo",rating:9.5,hot:true,founded:"2023",team:"20+",funding:"$20M+",desc:"自然语言生成完整Web应用的AI平台Product Hunt #1产品",position:"No-Code + AI的应用构建平台说一句话得到一个可运行的App",targetUsers:"非技术人员创业者产品原型设计师独立开发者MVP验证者",valueProp:"Say it Build it - 自然语言到生产级应用的桥梁",features:{primary:["Natural Language to UI(自然语言转界面)","Real-time Preview(边说边看效果)","Auto Database(Supabase自动CRUD)","One-click Deploy(Vercel一键上线)","Iterative Editing(对话式修改)"],secondary:["Template Library(模板市场)Custom Domain(自定义域名)Team Collaboration"]},businessModel:{freemium:"Free tier(3 projects limited)",subscription:"Pro $20/mo (unlimited projects + custom domain + priority support)",enterprise:"White-label solution Dedicated support Custom integrations"},pmAnalysis:{successReason:["1. 降低门槛：无需编程知识\n2. 即时满足：秒级看到效果\n3. PH成功：病毒式增长\n4. 技术栈现代：Next.js + Supabase"],moat:["1. NL-to-UI转换引擎\n2. 组件库积累\n3. 用户项目模板\n4. 部署流水线"],growthFlywheel:["用户创建项目→模板库丰富→吸引新用户→更多项目→更多模板"]}},
{id:7,name:"Midjourney",category:"creative",icon:"🎨",url:"https://midjourney.com",users:"1600万+",pricing:"Basic $10/Standard $30 mo",rating:9.9,hot:true,founded:"2022",team:"40+",funding:"Self-funded(盈利)",desc:"顶级AI图像生成工具年收入$2亿+Discord原生体验",position:"专业级AI图像生成工具艺术家和设计师的首选",targetUsers:"设计师艺术家内容创作者营销人员游戏开发者",valueProp:"从想象到图像 - 专业级艺术创作AI工具",features:{primary:["V6模型(照片级真实感)","--stylize风格控制","--sref参考图一致性","Pan/Zoom/Varies扩展","Discord社区互动"],secondary:["网站版本alpha参数调整批量生成"]},businessModel:{freemium:"无免费版仅试用",subscription:"Basic $10/mo (3.5h快)/ Standard $30/mo (15h快) / Pro $60/mo (30h快)",enterprise:"暂无企业版"},pmAnalysis:{successReason:["1. 图像质量业界顶尖\n2. Discord作为载体获客成本低\n3. 社区文化形成飞轮\n4. 参数系统满足专业需求"],moat:["1. 训练数据质量高\n2. 艺术家社区粘性\n3. 提示词文化壁垒\n4. 模型迭代速度"],growthFlywheel:["用户作品分享→吸引新用户→更多付费→算力投入→模型更优"]}},
{id:8,name:"Gamma",category:"creative",icon:"📊",url:"https://gamma.app",users:"5000万+演示文稿",pricing:"Free + Pro $10 mo",rating:9.3,hot:true,founded:"2020",team:"30+",funding:"$30M+",desc:"AI驱动的演示文稿制作平台重新定义PPT创作流程",position:"AI演示文稿工具从大纲到成品的一键生成平台",targetUsers:"商务人士教育工作者创业者营销人员",valueProp:"Say it Design it - 从想法到精美演示只需分钟",features:{primary:["大纲引导(先结构后内容)","一键生成完整PPT","设计自动化排版配色","多格式导出(PDF/PPT/Web)","实时协作编辑"],secondary:["品牌套件模板库嵌入内容分析"]},businessModel:{freemium:"Free tier (400 AI credits/mo)",subscription:"Pro $10/mo (unlimited credits + 品牌套件)",enterprise:"Team plan + SSO + 管理功能"},pmAnalysis:{successReason:["1. 解决痛点：做PPT耗时耗力\n2. 质量输出：设计水平超越普通人\n3. 分享传播：生成的PPT自带推广\n4. 易用性：极低学习成本"],moat:["1. 设计模板积累\n2. 用户生成内容数据\n3. 分享链接病毒传播\n4. 工作流整合深度"],growthFlywheel:["用户生成PPT→分享传播→新用户注册→更多内容→模板库丰富"]}},
{id:9,name:"Runway",category:"creative",icon:"🎬",url:"https://runwayml.com",users:"数百万",pricing:"Free + $12/$28 mo",rating:9.1,hot:false,founded:"2018",team:"100+",funding:"$200M+(估值$4B)",desc:"AI视频创作平台Gen-2模型引领AI视频生成赛道",position:"专业级AI视频生成工具电影制作人广告创意者的新选择",targetUsers:"视频创作者电影制作人广告代理商独立导演",valueProp:"Text/Image to Video - 文字或图片转视频的专业工具",features:{primary:["Gen-2模型(文本/图片转视频)","Motion Brush(局部动画控制)","Camera Control(镜头运动)","Green Screen(绿幕抠图)","Frame Interpolation(插帧)"],secondary:["视频编辑工具云渲染团队协作API服务"]},businessModel:{freemium:"Free tier (125 credits one-time)",subscription:"Standard $12/mo (625 credits/mo) / Pro $28/mo (2250 credits/mo)",enterprise:"Enterprise定制方案 API access"},pmAnalysis:{successReason:["1. 视频生成技术领先\n2. Hollywood合作提升品牌\n3. Gen-2模型效果惊艳\n4. 创作者生态建设"],moat:["1. 视频生成算法专利\n2. 训练数据稀缺性\n3. 行业合作关系\n4. 技术团队背景(NYU)"],growthFlywheel:["创作者作品展示→吸引新创作者→更多训练数据→模型改进→更优作品"]}},
{id:10,name:"Canva AI",category:"creative",icon:"✨",url:"https://canva.com",users:"1.35亿+",pricing:"Free + Pro $13 mo",rating:9.4,hot:true,founded:"2012",team:"3000+",funding:"Public(上市)",desc:"在线设计平台集成AI能力让设计触手可及",position:"全民设计工具 + AI增强 = 设计民主化的终极形态",targetUsers:"非设计师社交媒体运营者小企业主教育工作者",valueProp:"Design for Everyone - AI让任何人都能做出专业设计",features:{primary:["Magic Design(AI模板推荐)","Magic Eraser(智能抠图)","Magic Write(AI文案生成)","Translate(100+语言翻译)","Brand Kit(品牌一致性)"],secondary:["海量模板库团队协作打印服务视频编辑"]},businessModel:{freemium:"Free version (基本功能+部分AI)",subscription:"Pro $13/mo (全套AI功能) / Teams $15/user/mo / Enterprise定制",enterprise:"Enterprise高级安全合规管理功能"},pmAnalysis:{successReason:["1. 庞大用户基础1.35亿+\n2. AI自然融入现有工作流\n3. 模板生态护城河深厚\n4. 教育市场渗透率高"],moat:["1. 模板库规模(数百万)\n2. 用户习惯和数据\n3. 品牌认知度高\n4. 平台网络效应"],growthFlywheel:["用户创建设计→模板库增长→吸引新用户→更多设计→更多模板"]}},
{id:11,name:"Notion AI",category:"productivity",icon:"📝",url:"https://notion.so",users:"数千万",pricing:"Add-on $8/mo",rating:9.2,hot:true,founded:"2013",team:"500+",funding:"Public(估值$10B)",desc:"知识管理工具集成AI能力成为All-in-One workspace",position:"知识管理 + AI助手 = 第二大脑智能化升级",targetUsers:"知识工作者项目经理产品经理学生创业者",valueProp:"Your connected workspace + AI - 知识管理与AI助手的完美结合",features:{primary:["Q&A(基于你的笔记回答问题)","Writer(AI写作辅助)","Summarize(自动总结长文档)","Database Fill(数据库自动填充)","Translate(多语言翻译)"],secondary:["页面生成任务提取表格分析"]},businessModel:{freemium:"Notion Free + AI单独付费",subscription:"AI Add-on $8/member/mo (叠加在任何Notion计划上)",enterprise:"Business/Enterprise计划含AI管理功能"},pmAnalysis:{successReason:["1. Notion用户基数大转化容易\n2. AI增强核心价值而非独立功能\n3. 基于用户数据的个性化\n4. 工作流无缝整合"],moat:["1. 用户笔记数据资产\n2. Workspace锁定效应\n3. 模板和生态系统\n4. 团队协作网络"],growthFlywheel:["用户记录更多→AI能力更强→用户粘性更高→记录更多→AI更强"]}},
{id:12,name:"Zapier AI",category:"productivity",icon:"⚡",url:"https://zapier.com",users:"200万+企业",pricing:"Free + $20/$70 mo",rating:9.0,hot:false,founded:"2011",team:"800+",funding:"$365M(估值$5B)",desc:"自动化工作流平台集成AI让连接变得更智能",position:"工作流自动化 + AI = 企业效率倍增器",targetUsers:"运营人员市场营销销售开发人员小企业主",valueProp:"Automate your work with AI - 5000+应用智能连接",features:{primary:["Chatbots(构建AI对话机器人)","AI Actions(在Zap中调用LLM)","Natural Language Actions(描述想要的操作)","Interface(无代码UI构建)","5000+ App集成"],secondary:["Paths(条件逻辑) Webhooks Tables"]},businessModel:{freemium:"Free plan (100 tasks/mo)",subscription:"Starter $20/mo (750 tasks) / Professional $70/mo (2000 tasks) / Team $120/user/mo",enterprise:"Company custom pricing + dedicated support"},pmAnalysis:{successReason:["1. 集成数量业界第一5000+\n2. AI降低使用门槛(自然语言)\n3. B端客户粘性强\n4. 平台效应明显"],moat:["1. App集成数量壁垒\n2. 用户工作流数据\n3. 生态系统合作伙伴\n4. 技术基础设施"],growthFlywheel:["App集成增加→用户选择更多→使用场景扩展→更多App接入→生态更强"]}},
{id:13,name:"Otter.ai",category:"productivity",icon:"🎙️",url:"https://otter.ai",users:"1000万+",pricing:"Free + $17/$30 mo",rating:8.9,hot:false,founded:"2016",team:"150+",funding:"$80M+",desc:"AI会议记录工具实时转录会议内容并生成摘要",position:"会议场景的AI助手从录音到行动项的全流程覆盖",targetUsers:"商务人士记者学生研究人员远程工作者",valueProp:"Never miss a word - 会议记录转录搜索共享一站式解决",features:{primary:["实时 transcription(实时转文字)","Speaker Identification(说话人识别)","Auto Summary(自动生成摘要)","Action Items(提取行动项)","OtterPilot(自动加入会议录音)"],secondary:["Slide capture Integration (Zoom/Teams/Meet) Sharing & Collaboration"]},businessModel:{freemium:"Basic free (300 min/mo)",subscription:"Pro $17/mo (1200 min/mo) / Business $30/mo ( unlimited )",enterprise:"Enterprise ( Otter for Teams custom )"},pmAnalysis:{successReason:["1. 解决明确痛点：开会记不住\n2. 准确率持续提升\n3. 远程办公趋势利好\n4. 与主流会议工具整合"],moat:["1. 转录准确率技术\n2. 会议音频数据积累\n3. 企业客户粘性\n4. 行业垂直领域知识"],growthFlywheel:["会议录制→转录数据→模型优化→准确率提升→更多用户采用"]}},
{id:14,name:"n8n",category:"productivity",icon:"🔄",url:"https://n8n.io",users:"数万",pricing:"Free + Cloud $20 mo",rating:9.2,hot:true,founded:"2019",team:"100+",funding:"Open source + $56M",desc:"开源工作流自动化平台可视化编排Agent和AI流程",position:"开源的Zapier替代品 + AI Agent编排平台",targetUsers:"开发者运维工程师AI工程师中小企业CTO",valueProp:"Workflow Automation for Technical Teams - 公平许可的开源自动化",features:{primary:["Node-based Editor(节点式编程)","200+ Integrations(200+集成)","AI Agent Support(LLM作为节点)","Self-hosted Option(自托管)","JavaScript Expressions(灵活数据处理)"],secondary:["Error Handling Webhook Execution Environment Variables"]},businessModel:{freemium:"Open Source(Free self-hosted)",subscription:"Cloud Starter $20/mo (5000 executions)\nCloud Pro $50/mo (10000 executions)",enterprise:"Enterprise custom pricing ( Self-hosted enterprise support )"},pmAnalysis:{successReason:["1. 开源策略建立信任\n2. 技术用户口碑好\n3. AI Agent功能前瞻\n4. Fair-code license模式创新"],moat:["1. 开源社区贡献\n2. 节点生态丰富\n3. 自托管灵活性\n4. 企业数据隐私优势"],growthFlywheel:["开源用户→社区贡献节点→功能丰富→吸引更多用户→更大社区"]}},
{id:15,name:"Hugging Face",category:"infra",icon:"🤗",url:"https://huggingface.co",users:"500万+开发者",pricing:"Free + Hub Pro $9 mo",rating:9.9,hot:true,founded:"2016",team:"200+",funding:"$400M+(估值$4.5B)",desc:"AI模型的GitHub开源模型托管平台和MLOps工具链",position:"AI领域的GitHub - 模型数据集Demo的开放社区",targetUsers:"AI研究者ML工程师数据科学家学生开发者",valueProp:"The AI community building the future - 开放协作的AI生态中心",features:{primary:["Model Hub(模型仓库10万+)","Dataset Hub(数据集仓库)","Spaces(Demo部署托管)","Inference API(推理API)","AutoTrain(自动训练)"],secondary:["Datasets Library Transformers Diffusers PEFT"]},businessModel:{freemium:"Free (大部分功能)",subscription:"Hub Pro $9/mo ( private repos + compute )\nEnterprise Hub $20/user/mo ( org management )",enterprise:"Inference Endpoints AutoML Dedicated Hardware"},pmAnalysis:{successReason:["1. 先发优势定义了AI GitHub\n2. 开源文化深入人心\n3. 社区活跃度极高\n4. 工具链完整(Training to Deployment)"],moat:["1. 模型/数据集规模壁垒\n2. 开发者社区网络效应\n3. 生态系统依赖性\n4. 学术界产业界双认可"],growthFlywheel:["模型上传→社区使用→反馈改进→更好模型→更多上传→更大社区"]}},
{id:16,name:"Figma",category:"pmtools",icon:"🎨",url:"https://figma.com",users:"800万+",pricing:"Free + Professional $12/$15 mo",rating:9.8,hot:true,founded:"2016",team:"700+",funding:"$2B+(估值)",desc:"基于云端的设计协作工具重新定义UI/UX设计流程成为PM和设计师必备工具",position:"协作式UI设计平台实时多人编辑+原型制作+设计系统管理的全能工具",targetUsers:"产品经理UI/UX设计师前端工程师创业者设计团队",valueProp:"Design together in real-time - 实时协作的设计工作流革命",features:{primary:["Real-time Collaboration(实时多人编辑)","Prototyping(交互原型制作)","Design System(设计系统管理)","Auto Layout(自动布局)","Components(组件复用)"],secondary:["Dev Mode(开发模式)FigJam(白板头脑风暴)Plugin生态(1000+)Version History(版本历史)"]},businessModel:{freemium:"Free (3个文件 + 历史记录30天)",subscription:"Professional $12/mo (无限文件) / Organization $15/user/mo (团队功能)",enterprise:"Enterprise (SSO + 安全 + 高级管理)"},pmAnalysis:{successReason:["1. 浏览器原生：无需安装即使用\n2. 实时协作：打破设计师孤岛\n3. 免费策略：降低门槛快速获客\n4. 开发者友好：Dev Mode降低交付成本\n5. 生态繁荣：Plugin扩展能力强"],moat:["1. 用户习惯和数据沉淀\n2. 团队协作网络效应\n3. 设计系统标准制定者\n4. Plugin生态系统壁垒\n5. 教育市场渗透率高"],growthFlywheel:["用户创建设计→团队协作→更多成员加入→设计资产积累→迁移成本增加→用户粘性"]}},
{id:17,name:"Miro",category:"pmtools",icon:"🖼️",url:"https://miro.com",users:"6000万+",pricing:"Free + Team $10/$20 mo",rating:9.5,hot:true,founded:"2011",team:"1500+",funding:"Public(估值$17.5B)",desc:"在线可视化协作平台无限画布支持思维导图/流程图/白板头脑风暴等场景",position:"数字白板+可视化协作工具 - 远程办公时代的团队协作基础设施",targetUsers:"产品经理项目经理设计师敏捷团队教育工作者咨询师",valueProp:"Visual collaboration platform - 让想法可见让协作无界",features:{primary:["Infinite Canvas(无限画布)","Templates(2000+模板库)","Real-time Cursor(光标跟随)","Voting & Timer(投票计时器)","Integration(Slack/Jira/Notion)"],secondary:["Video Chat(内置视频)Sticky Notes(便签)Frames(框架组织)Embed内容"]},businessModel:{freemium:"Free (3个编辑板 + 基础模板)",subscription:"Team $10/user/mo (无限板) / Business $20/user/mo (高级功能)",enterprise:"Enterprise (安全合规 + 高级分析 + SSO)"},pmAnalysis:{successReason:["1. 远程办公红利：2020年后爆发增长\n2. 模板丰富：降低使用门槛\n3. 集成广泛：融入现有工作流\n4. 免费版慷慨：快速建立用户基础\n5. 用途多样：头脑风暴/规划/回顾都能用"],moat:["1. 无限画布技术专利\n2. 模板库规模优势\n3. 企业客户粘性高\n4. 集成生态深度\n5. 品牌认知度高"],growthFlywheel:["团队创建板→邀请协作者→更多人体验→模板分享传播→新用户注册→更多团队采用"]}},
{id:18,name:"Jira",category:"pmtools",icon:"📋",url:"https://www.atlassian.com/software/jira",users:"10万+企业",pricing:"Free $0/$7.75/$14.25 mo",rating:9.0,hot:false,founded:"2002",team:"Atlassian 10000+",funding:"Public(市值$50B+)",desc:"Atlassian出品的敏捷项目管理和问题跟踪系统企业级PM工具标杆",position:"企业级项目管理平台 - 从需求到发布的全生命周期管理",targetUsers:"产品经理项目经理开发运维团队Scrum Master企业IT部门",valueProp:"Track and manage any project - 灵活强大的项目管理体系",features:{primary:["Kanban Boards(看板视图)","Sprint Planning(迭代计划)","Roadmaps(路线图)","Reporting Dashboard(报表看板)","Workflow Automation(自动化规则)"],secondary:["Integration Hub(300+集成)Mobile App(移动端)Security & Permissions(权限管理)"]},businessModel:{freemium:"Free (10人以下团队)",subscription:"Standard $7.75/user/mo / Premium $14.25/user/mo",enterprise:"Enterprise定制方案 (高级安全 + 支持)"},pmAnalysis:{successReason:["1. Atlassian生态绑定：Confluence/Bitbucket联动\n2. 企业级可靠性：大型项目首选\n3. 定制化强：适应各种工作流\n4. 市场先发优势：2002年创立\n5. 社区活跃：插件市场繁荣"],moat:["1. 企业数据积累和锁定\n2. Atlassian全家桶协同效应\n3. 行业标准和最佳实践\n4. 插件生态护城河\n5. 企业销售和服务体系"],growthFlywheel:["团队使用Jira→积累项目数据→优化工作流→效率提升→推荐给其他团队→更多企业采用"]}},
{id:19,name:"Linear",category:"pmtools",icon:"⚡",url:"https://linear.app",users:"数十万团队",pricing:"Free + $8/$16 mo",rating:9.6,hot:true,founded:"2019",team:"50+",funding:"$52M(估值$4B)",desc:"现代项目管理工具以速度和优雅著称重新定义PM工具体验",position:"Modern Issue Tracker - 为追求效率和美学的团队打造的下一代项目管理工具",targetUsers:"产品经理工程师创业公司敏捷团队科技公司设计团队",valueProp:"Streamline issues, ship faster - 极致流畅的项目管理体验",features:{primary:["Keyboard-First UI(键盘优先操作)","Command Palette(Cmd+K全局命令)","Sprint Cycles(迭代周期管理)","Slack/Discord Integration(即时通讯集成)","Cycle Analytics(周期数据分析)"],secondary:["GitHub/GitLab Sync(代码同步)Custom Workflows(自定义状态)API/Webhook"]},businessModel:{freemium:"Free (10MB附件限制)",subscription:"Plan $8/user/mo (完整功能) / Business $16/user/mo (高级分析+SSO)",enterprise:"Enterprise定制方案"},pmAnalysis:{successReason:["1. 产品体验极致：速度和美学并重\n2. 开发者口碑好：Hacker News热捧\n3. 差异化明显：与Jira形成对比\n4. 创始人背景：前designers from Meta\n5. 社区驱动增长：Twitter病毒式传播"],moat:["1. UX/UI体验壁垒\n2. 键盘操作习惯养成\n3. 开发者社区忠诚度\n4. 技术栈现代化\n5. 品牌调性独特"],growthFlywheel:["开发者试用→惊艳体验→团队推广→更多团队采用→社区口碑→病毒式增长"]}},
{id:20,name:"DALL-E 3",category:"creative",icon:"🖼️",url:"https://openai.com/dall-e-3",users:"ChatGPT Plus用户",pricing:"包含在Plus $20/mo",rating:9.7,hot:true,founded:"2023",team:"OpenAI",funding:"OpenAI",desc:"OpenAI最新图像生成模型集成在ChatGPT中文生图能力业界领先",position:"文本到图像AI生成器 - 自然语言描述即可生成高质量图片",targetUsers:"内容创作者营销人员设计师产品经理研究人员普通用户",valueProp:"Just describe it and see it - 文字描述直接生成图像的魔法",features:{primary:["Natural Language Prompting(自然语言提示词)","High Resolution(1024x1024高清)","Style Variation(风格变体)","Inpainting/Edit(局部编辑)","ChatGPT Integration(对话式创作)"],secondary:["DALL-E Editor API Access Safety Filters(安全过滤)"]},businessModel:{freemium:"无免费版",subscription:"包含在ChatGPT Plus $20/mo中 / API按量计费",enterprise:"API Enterprise定制"},pmAnalysis:{successReason:["1. ChatGPT集成：巨大流量入口\n2. 提示词简单：降低使用门槛\n3. 图像质量高：细节处理优秀\n4. OpenAI品牌背书\n5. 安全机制完善：减少滥用风险"],moat:["1. GPT-4V多模态理解能力\n2. ChatGPT用户基数\n3. 训练数据和算力优势\n4. 安全审查技术\n5. 生态整合深度"],growthFlywheel:["用户生成图片→分享传播→吸引新用户→更多图片训练数据→模型更优→质量提升"]}},
{id:21,name:"Axure RP",category:"pmtools",icon:"📐",url:"https://www.axure.com",users:"数百万",pricing:"$29/$49 mo",rating:8.8,hot:false,founded:"2003",team:"Axure 50+",funding:"Private",desc:"专业原型设计工具支持高保真交互原型和PRD文档输出PM经典工具",position:"高保真原型设计工具 - 从低保真线框图到可交互原型的全流程覆盖",targetUsers:"产品经理UX设计师交互设计师需求分析师BA",valueProp:"Prototype anything - 专业级原型设计+文档自动生成的PM利器",features:{primary:["Interactive Prototypes(可交互原型)","Dynamic Panels(动态面板)","Conditional Logic(条件逻辑)","Auto-Generated Specs(自动生成PRD)","Widget Libraries(组件库)"],secondary:["Team Publishing(团队发布)Adaptive Views(自适应视图)Repeater Widget(重复部件)"]},businessModel:{freemium:"30天免费试用",subscription:"RP $29/mo (个人) / Team $49/user/mo (团队)",enterprise:"Enterprise定制方案"},pmAnalysis:{successReason:["1. 功能强大：高保真原型行业标准\n2. 文档自动生成：节省PM大量时间\n3. 历史悠久：2003年创立积累深\n4. 学习资源丰富：教程案例多\n5. 企业认可度高：很多公司标配"],moat:["1. 专业用户粘性高\n2. 组件库和模板积累\n3. 企业采购惯性\n4. 学习曲线形成的专业壁垒\n5. 与开发对接的工作流成熟"],growthFlywheel:["PM创建原型→分享给团队→获得反馈→迭代改进→产出高质量PRD→推动采用"]}},
{id:22,name:"Balsamiq",category:"pmtools",icon:"✏️",url:"https://balsamiq.com",users:"数百万",pricing:"$9/$12 mo",rating:8.7,hot:false,founded:"2008",team:"Balsamiq Studios 30+",funding:"Bootstrapped(自筹资金盈利)",desc:"快速低保真原型工具手绘风格界面让沟通聚焦逻辑而非视觉",position:"低保真线框图工具 - 快速表达想法促进早期沟通的轻量级原型工具",targetUsers:"产品经理创业者UX设计师业务分析师咨询顾问",valueProp:"Sketch UI ideas fast - 秒速画出想法让讨论回归本质",features:{primary:["Drag-and-Drop Interface(拖拽操作)","Hand-Drawn Style(手绘风格)","Pre-built UI Library(预制UI库)","Linking to Mockups(页面跳转)","Export to PDF/PNG(导出)"],secondary:["Collaboration Cloud(云协作)Comments(评论)Symbols(符号复用)"]},businessModel:{freemium:"无免费版(30天试用)",subscription:"Balsamiq Cloud $9/mo / Wireframes for Desktop $12/mo (买断$89)",enterprise:"Team/Volume License折扣"},pmAnalysis:{successReason:["1. 学习成本极低：5分钟上手\n2. 手绘风格巧妙：避免陷入视觉细节\n3. 价格亲民：个人也能负担\n4. 聚焦沟通：适合早期头脑风暴\n5. 轻量快速：不卡顿不复杂"],moat:["1. 手绘风格独特性\n2. 轻量定位差异化\n3. 用户心智占领(低保真= Balsamiq)\n4. 盈利模式健康(无需融资)\n5. 忠诚用户群体"],growthFlywheel:["用户快速画草图→展示给团队→获得反馈→快速迭代→验证想法→推荐给同事"]}
];

let favorites = JSON.parse(localStorage.getItem('v8_favorites') || '[]');

function renderProducts(filter = 'all', search = '') {
const grid = document.getElementById('productGrid');
if (!grid) {
console.error('productGrid element not found');
return;
}

console.log('renderProducts called - filter:', filter, 'search:', search, 'total products:', productDatabase.length);

let filtered = productDatabase;

if (filter !== 'all') {
filtered = filtered.filter(p => p.category === filter);
console.log('After category filter:', filtered.length, 'products');
}

if (search.trim()) {
const s = search.toLowerCase();
filtered = filtered.filter(p =>
p.name.toLowerCase().includes(s) ||
p.desc.toLowerCase().includes(s) ||
p.position.toLowerCase().includes(s) ||
p.targetUsers.toLowerCase().includes(s)
);
console.log('After search filter:', filtered.length, 'products');
}

document.getElementById('showingProducts').textContent = filtered.length;
document.getElementById('favoriteCount').textContent = favorites.length;

if (filtered.length === 0) {
grid.innerHTML = '<div style="text-align:center;padding:60px;color:var(--text-secondary);"><div style="font-size:3rem;margin-bottom:16px;">🔍</div><div style="font-size:1.1rem;">未找到匹配的产品</div><div style="margin-top:12px;font-size:0.9rem;">尝试其他关键词或分类</div></div>';
return;
}

grid.innerHTML = filtered.map(product => {
try {
return `
<div style="background:rgba(12,18,32,0.6);border:1px solid var(--border-color);border-radius:14px;padding:20px;transition:all 0.3s ease;cursor:pointer;position:relative;"
onclick="showProductDetail(${product.id})"
onmouseover="this.style.transform='translateY(-4px)';this.style.borderColor='var(--accent-gold)'"
onmouseout="this.style.transform='none';this.style.borderColor='var(--border-color)'">
${favorites.includes(product.id) ? '<span style="position:absolute;top:12px;right:12px;font-size:1.3rem;">⭐</span>' : ''}
<div style="display:flex;align-items:center;gap:12px;margin-bottom:12px;">
<span style="font-size:2.2rem;">${product.icon}</span>
<div style="flex:1;">
<div style="display:flex;align-items:center;gap:8px;">
<div style="font-weight:600;font-size:1.15rem;color:var(--text-primary);">${product.name}</div>
${product.hot ? '<span style="background:linear-gradient(135deg,var(--accent-coral),#e91e63);color:white;padding:2px 8px;border-radius:10px;font-size:0.7rem;font-weight:600;">HOT</span>' : ''}
</div>
<div style="font-size:0.85rem;color:var(--text-secondary);margin-top:4px;">${product.desc.substring(0,60)}...</div>
</div>
</div>
<div style="display:flex;align-items:center;justify-content:space-between;margin-top:12px;padding-top:12px;border-top:1px solid rgba(255,255,255,0.05);">
<div style="display:flex;gap:12px;font-size:0.85rem;color:var(--text-secondary);">
<span>👥 ${product.users}</span>
<span>💰 ${product.pricing.split('+')[0]}</span>
</div>
<div style="display:flex;align-items:center;gap:6px;">
${'⭐'.repeat(Math.floor(product.rating/2))} <span style="color:var(--accent-gold);font-size:0.85rem;font-weight:600;">${product.rating}/10</span>
</div>
</div>
<button onclick="event.stopPropagation();toggleFavorite(${product.id})" style="margin-top:10px;width:100%;padding:8px;background:${favorites.includes(product.id) ? 'rgba(212,168,83,0.1)' : 'rgba(255,255,255,0.03)'};border:1px solid ${favorites.includes(product.id) ? 'var(--accent-gold)' : 'var(--border-color)'};border-radius:8px;color:${favorites.includes(product.id) ? 'var(--accent-gold)' : 'var(--text-secondary)'};cursor:pointer;font-size:0.85rem;">${favorites.includes(product.id) ? '⭐ 已收藏' : '☆ 收藏'}</button>
</div>`;
} catch(e) {
console.error('Error rendering product:', product.name, e);
return '';
}
}).join('');

console.log('✅ Products rendered successfully - Total:', filtered.length, 'products');
}

function filterProducts() {
const search = document.getElementById('productSearch')?.value || '';
const category = document.getElementById('categoryFilter')?.value || 'all';
renderProducts(category, search);
}

function resetFilters() {
if(document.getElementById('productSearch')) document.getElementById('productSearch').value = '';
if(document.getElementById('categoryFilter')) document.getElementById('categoryFilter').value = 'all';
renderProducts();
}

function toggleFavorite(id) {
if (favorites.includes(id)) {
favorites = favorites.filter(f => f !== id);
} else {
favorites.push(id);
}
localStorage.setItem('v8_favorites', JSON.stringify(favorites));
filterProducts();
addExp(1);
}

function showProductDetail(id) {
const product = productDatabase.find(p => p.id === id);
if (!product) return;

const detailCard = document.getElementById('productDetailCard');
const detailContent = document.getElementById('productDetailContent');

detailCard.style.display = 'block';
detailContent.innerHTML = `
<div style="background:linear-gradient(135deg,rgba(212,168,83,0.08),rgba(45,212,191,0.08));border-radius:16px;padding:24px;margin-bottom:20px;">
<div style="display:flex;align-items:center;gap:16px;margin-bottom:16px;">
<span style="font-size:3rem;">${product.icon}</span>
<div>
<h3 style="font-family:'Cormorant Garamond',serif;font-size:1.8rem;color:var(--accent-gold);margin:0;">${product.name}</h3>
<p style="color:var(--text-secondary);margin:4px 0 0 0;">${product.desc}</p>
</div>
</div>
<div style="display:flex;gap:12px;flex-wrap:wrap;">
<span style="background:rgba(12,18,32,0.6);padding:6px 14px;border-radius:20px;font-size:0.85rem;color:var(--text-primary);">👥 ${product.users}</span>
<span style="background:rgba(12,18,32,0.6);padding:6px 14px;border-radius:20px;font-size:0.85rem;color:var(--text-primary);">💰 ${product.pricing}</span>
<span style="background:rgba(12,18,32,0.6);padding:6px 14px;border-radius:20px;font-size:0.85rem;color:var(--text-primary);">⭐ ${product.rating}/10</span>
<span style="background:rgba(12,18,32,0.6);padding:6px 14px;border-radius:20px;font-size:0.85rem;color:var(--text-primary);">📅 ${product.founded}</span>
<span style="background:rgba(12,18,32,0.6);padding:6px 14px;border-radius:20px;font-size:0.85rem;color:var(--text-primary);">💼 ${product.team}</span>
</div>
</div>

<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:16px;margin-bottom:20px;">
<div style="background:rgba(12,18,32,0.5);border-left:3px solid var(--accent-teal);padding:16px;border-radius:8px;">
<h4 style="color:var(--accent-teal);margin:0 0 10px 0;">🎯 产品定位</h4>
<p style="color:var(--text-secondary);font-size:0.9rem;line-height:1.7;margin:0;">${product.position}</p>
</div>
<div style="background:rgba(12,18,32,0.5);border-left:3px solid var(--accent-coral);padding:16px;border-radius:8px;">
<h4 style="color:var(--accent-coral);margin:0 0 10px 0;">👥 目标用户</h4>
<p style="color:var(--text-secondary);font-size:0.9rem;line-height:1.7;margin:0;">${product.targetUsers}</p>
</div>
<div style="background:rgba(12,18,32,0.5);border-left:3px solid var(--accent-gold);padding:16px;border-radius:8px;">
<h4 style="color:var(--accent-gold);margin:0 0 10px 0;">💎 价值主张</h4>
<p style="color:var(--text-secondary);font-size:0.9rem;line-height:1.7;margin:0;">${product.valueProp}</p>
</div>
</div>

<div style="background:rgba(12,18,32,0.4);border-radius:12px;padding:20px;margin-bottom:20px;">
<h4 style="color:var(--text-primary);margin:0 0 14px 0;">⚙️ 功能架构</h4>
<div style="display:grid;grid-template-columns:1fr 1fr;gap:16px;">
<div>
<strong style="color:var(--accent-teal);font-size:0.95rem;">一级功能（核心）</strong>
<ul style="margin:8px 0 0 0;padding-left:20px;color:var(--text-secondary);font-size:0.88rem;line-height:1.8;">
${product.features.primary.map(f => `<li>${f}</li>`).join('')}
</ul>
</div>
<div>
<strong style="color:var(--text-secondary);font-size:0.95rem;">二级功能（扩展）</strong>
<ul style="margin:8px 0 0 0;padding-left:20px;color:var(--text-secondary);font-size:0.88rem;line-height:1.8;">
${product.features.secondary.map(f => `<li>${f}</li>`).join('')}
</ul>
</div>
</div>
</div>

<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(250px,1fr));gap:16px;margin-bottom:20px;">
<div style="background:rgba(12,18,32,0.4);border-radius:12px;padding:18px;">
<h4 style="color:var(--text-primary);margin:0 0 12px 0;">💰 商业模式</h4>
<div style="font-size:0.87rem;color:var(--text-secondary);line-height:1.8;">
<strong style="color:var(--accent-gold);">免费版：</strong>${product.businessModel.freemium}<br><br>
<strong style="color:var(--accent-teal);">订阅制：</strong>${product.businessModel.subscription}<br><br>
<strong style="color:var(--accent-coral);">企业版：</strong>${product.businessModel.enterprise}
</div>
</div>
<div style="background:rgba(12,18,32,0.4);border-radius:12px;padding:18px;">
<h4 style="color:var(--text-primary);margin:0 0 12px 0;">🏆 PM深度分析</h4>
<div style="font-size:0.87rem;color:var(--text-secondary);line-height:1.8;">
<strong style="color:#4ade80;">✅ 成功原因：</strong><br>
${product.pmAnalysis.successReason[0]}<br><br>
<strong style="color:var(--accent-gold);">🛡️ 护城河：</strong><br>
${product.pmAnalysis.moat[0]}
</div>
</div>
</div>

<div style="background:rgba(45,212,191,0.05);border:1px solid rgba(45,212,191,0.2);border-radius:12px;padding:20px;text-align:center;">
<a href="${product.url}" target="_blank" style="display:inline-block;background:var(--accent-teal);color:white;padding:12px 32px;border-radius:10px;text-decoration:none;font-weight:600;font-size:1rem;">访问官网 →</a>
<button onclick="toggleFavorite(${product.id})" style="margin-left:12px;padding:12px 24px;background:${favorites.includes(product.id) ? 'rgba(212,168,83,0.2)' : 'rgba(255,255,255,0.05)'};border:1px solid ${favorites.includes(product.id) ? 'var(--accent-gold)' : 'var(--border-color)'};border-radius:10px;color:${favorites.includes(product.id) ? 'var(--accent-gold)' : 'var(--text-primary)'};cursor:pointer;font-size:0.95rem;">${favorites.includes(product.id) ? '⭐ 取消收藏' : '☆ 收藏产品'}</button>
</div>
`;

detailCard.scrollIntoView({behavior:'smooth',block:'start'});
addExp(3);
}

function closeProductDetail() {
document.getElementById('productDetailCard').style.display = 'none';
}

console.log('✅ V8 Product Database Loaded -', productDatabase.length, 'products');