// Test with only original 15 products
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
{id:15,name:"Hugging Face",category:"infra",icon:"🤗",url:"https://huggingface.co",users:"500万+开发者",rating:9.9}
];

console.log('Test DB loaded:', testDB.length, 'products');