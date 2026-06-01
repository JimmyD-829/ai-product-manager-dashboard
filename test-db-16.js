// Test adding products one by one
const testDB = [
{id:1,name:"ChatGPT",category:"chat",icon:"🤖",url:"https://chat.openai.com",users:"5亿+",pricing:"Freemium + Plus $20/mo",rating:9.9,hot:true,founded:"2022",team:"500+",funding:"$11B",desc:"OpenAI出品的对话式AI助手引领生成式AI浪潮的标志性产品"},
{id:2,name:"Claude",category:"chat",icon:"🔮",url:"https://claude.ai",users:"数百万",rating:9.8},
{id:3,name:"Perplexity",category:"chat",icon:"🔍",url:"https://perplexity.ai",users:"1000万+",rating:9.7},
{id:4,name:"Cursor",category:"code",icon:"⚡",url:"https://cursor.sh",users:"开发者群体",rating:9.9},
{id:5,name:"GitHub Copilot",category:"code",icon:"🐙",url:"https://github.com/features/copilot",users:"150万+付费",rating:9.6},
{id:6,name:"Lovable",category:"code",icon:"🎨",url:"https://lovable.dev",users:"数十万",rating:9.5},
{id:7,name:"Midjourney",category:"creative",icon:"🎨",url:"https://midjourney.com",users:"1600万+",rating:9.9},
{id:8,name:"Gamma",category:"creative",icon:"📊",url:"https://gamma.app",users:"5000万+演示文稿",rating:9.3},
{id:9,name:"Runway",category:"creative",icon:"🎬",url:"https://runwayml.com",users:"数百万",rating:9.1},
{id:10,name:"Canva AI",category:"creative",icon:"✨",url:"https://canva.com",users:"1.35亿+",rating:9.4},
{id:11,name:"Notion AI",category:"productivity",icon:"📝",url:"https://notion.so",users:"数千万",rating:9.2},
{id:12,name:"Zapier AI",category:"productivity",icon:"⚡",url:"https://zapier.com",users:"200万+企业",rating:9.0},
{id:13,name:"Otter.ai",category:"productivity",icon:"🎙️",url:"https://otter.ai",users:"1000万+",rating:8.9},
{id:14,name:"n8n",category:"productivity",icon:"🔄",url:"https://n8n.io",users:"数万",rating:9.2},
{id:15,name:"Hugging Face",category:"infra",icon:"🤗",url:"https://huggingface.co",users:"500万+开发者",rating:9.9},

// Test product 16 - Figma
{id:16,name:"Figma",category:"pmtools",icon:"🎨",url:"https://figma.com",users:"800万+",pricing:"Free + Professional $12/$15 mo",rating:9.8,hot:true,founded:"2016",team:"700+",funding:"$2B+(估值)",desc:"基于云端的设计协作工具重新定义UI/UX设计流程成为PM和设计师必备工具",position:"协作式UI设计平台实时多人编辑+原型制作+设计系统管理的全能工具",targetUsers:"产品经理UI/UX设计师前端工程师创业者设计团队",valueProp:"Design together in real-time - 实时协作的设计工作流革命",features:{primary:["Real-time Collaboration(实时多人编辑)","Prototyping(交互原型制作)","Design System(设计系统管理)","Auto Layout(自动布局)","Components(组件复用)"],secondary:["Dev Mode(开发模式)FigJam(白板头脑风暴)Plugin生态(1000+)Version History(版本历史)"]},businessModel:{freemium:"Free (3个文件 + 历史记录30天)",subscription:"Professional $12/mo (无限文件) / Organization $15/user/mo (团队功能)",enterprise:"Enterprise (SSO + 安全 + 高级管理)"},pmAnalysis:{successReason:["1. 浏览器原生：无需安装即使用\n2. 实时协作：打破设计师孤岛\n3. 免费策略：降低门槛快速获客\n4. 开发者友好：Dev Mode降低交付成本\n5. 生态繁荣：Plugin扩展能力强"],moat:["1. 用户习惯和数据沉淀\n2. 团队协作网络效应\n3. 设计系统标准制定者\n4. Plugin生态系统壁垒\n5. 教育市场渗透率高"],growthFlywheel:["用户创建设计→团队协作→更多成员加入→设计资产积累→迁移成本增加→用户粘性"]}}
];

console.log('Test DB loaded:', testDB.length, 'products');