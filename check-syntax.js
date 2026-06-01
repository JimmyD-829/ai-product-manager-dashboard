const fs = require('fs');
const content = fs.readFileSync('product-database.js', 'utf8');

try {
  new Function(content);
  console.log('✅ Syntax is valid');
} catch(e) {
  console.log('❌ Syntax error:', e.message);
  
  // 找到错误位置
  const lines = content.split('\n');
  const errorLine = e.lineNumber || Math.min(lines.length, 30);
  
  console.log('\n--- Around line', errorLine, '---');
  for (let i = Math.max(0, errorLine-3); i < Math.min(lines.length, errorLine+3); i++) {
    console.log((i+1) + ':', lines[i].substring(0, 100));
  }
}