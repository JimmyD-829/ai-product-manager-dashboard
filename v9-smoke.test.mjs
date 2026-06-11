import assert from 'node:assert/strict';
import { readFileSync, existsSync } from 'node:fs';

const read = (file) => readFileSync(new URL(file, import.meta.url), 'utf8');

assert.equal(existsSync(new URL('./AI_PM_OS_Dashboard_V9.html', import.meta.url)), true, 'V9 dashboard page should exist');

const html = read('./AI_PM_OS_Dashboard_V9.html');
const index = read('./index.html');

assert.match(index, /AI_PM_OS_Dashboard_V9\.html/, 'index.html should redirect to V9');
assert.match(html, /AI PM Academy - Dashboard V9/, 'V9 page should preserve the academy dashboard identity');
assert.match(html, /v9_/, 'V9 storage keys should use the v9_ prefix');

[
  'section-home',
  'section-database',
  'section-prompt',
  'section-knowledge',
  'section-projects',
  'section-growth'
].forEach((id) => {
  assert.match(html, new RegExp(`id="${id}"`), `V9 page should preserve ${id}`);
});

[
  '产品数据库',
  'Prompt训练营',
  'AI知识库',
  '项目中心',
  '成长系统',
  'AI Coach - 今日学习推荐',
  'AI 新闻入口',
  '快速笔记'
].forEach((label) => {
  assert.match(html, new RegExp(label), `V9 should preserve original content label: ${label}`);
});

[
  'product-database.js',
  'growth-system-v8.js',
  'prompt-enhancement-v8.js',
  'portfolio-system-v8.js'
].forEach((script) => {
  assert.match(html, new RegExp(script), `V9 should keep existing module script ${script}`);
});

assert.match(html, /id="v9LearningEngine"/, 'V9 should add the learning engine panel on top of the original dashboard');

[
  'saveMissionArtifact',
  'generateTeardownReport',
  'saveReportToPortfolio',
  'useV9WorkflowTemplate',
  'renderSkillModel'
].forEach((fn) => {
  assert.match(html, new RegExp(`function ${fn}\\(`), `V9 page should define ${fn}`);
});

[
  'AI 技术理解',
  '产品分析',
  'AI UX',
  'Prompt / Workflow',
  '数据评估',
  '商业化',
  '作品表达'
].forEach((skill) => {
  assert.match(html, new RegExp(skill.replace('/', '\\/')), `V9 ability model should include ${skill}`);
});

console.log('V9 smoke test passed');
