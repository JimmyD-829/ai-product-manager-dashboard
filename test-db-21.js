// Test with 21 products (without Balsamiq)
const testDB = [
{id:1,name:"ChatGPT",category:"chat",icon:"🤖",url:"https://chat.openai.com",users:"5亿+",pricing:"Freemium + Plus $20/mo",rating:9.9,hot:true,founded:"2022",team:"500+",funding:"$11B",desc:"OpenAI出品的对话式AI助手引领生成式AI浪潮的标志性产品",position:"通用AI助手通过自然语言交互提供信息创意和解决方案降低AI使用门槛",targetUsers:"学生开发者产品经理企业用户研究人员内容创作者",valueProp:"提问即获得答案 - 极简交互强大能力多场景适用",features:{primary:["多轮对话与上下文记忆","GPT-4/GPT-4o多模型支持","插件与GPT Store生态","代码解释器(数据分析/绘图)","DALL-E 3图像生成","语音对话模式"],secondary:["自定义指令(个性化)","文件上传与分析","浏览联网搜索","团队工作区(Enterprise)","API接口服务"]},businessModel:{freemium:"免费版提供GPT-3.5限制使用频率",subscription:"Plus $20/mo (GPT-4优先) / Team $25/user/mo",enterprise:"SSO管理控制台数据隔离无限速"},pmAnalysis:{successReason:["1. 产品形态极简：单输入框零学习成本\n2. 技术领先性：GPT系列模型持续迭代\n3. 先发优势：定义了Chatbot产品范式\n4. 生态构建：Plugin/GPT Store形成飞轮\n5. 品牌效应：ChatGPT成为AI代名词"],moat:["1. 数据飞轮：海量用户反馈优化模型\n2. 模型壁垒：GPT-4仍保持领先\n3. 开发者生态：API+Plugin网络效应\n4. 品牌认知：用户心智占领\n5. 资源优势：Microsoft深度合作"],growthFlywheel:["用户体验→口碑传播→更多用户→更多训练数据→模型更优→体验更好"]}},
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
{id:16,name:"Figma",category:"pmtools",icon:"🎨",url:"https://figma.com",users:"800万+",rating:9.8,hot:true,desc:"基于云端的设计协作工具"},
{id:17,name:"Miro",category:"pmtools",icon:"🖼️",url:"https://miro.com",users:"6000万+",rating:9.5,hot:true,desc:"在线可视化协作平台"},
{id:18,name:"Jira",category:"pmtools",icon:"📋",url:"https://www.atlassian.com/software/jira",users:"10万+企业",rating:9.0,desc:"企业级项目管理工具"},
{id:19,name:"Linear",category:"pmtools",icon:"⚡",url:"https://linear.app",users:"数十万团队",rating:9.6,hot:true,desc:"现代项目管理工具"},
{id:20,name:"DALL-E 3",category:"creative",icon:"🖼️",url:"https://openai.com/dall-e-3",users:"ChatGPT Plus用户",rating:9.7,hot:true,desc:"OpenAI图像生成模型"},
{id:21,name:"Axure RP",category:"pmtools",icon:"📐",url:"https://www.axure.com",users:"数百万",rating:8.8,desc:"专业原型设计工具"}
];

console.log('Test DB loaded:', testDB.length, 'products');