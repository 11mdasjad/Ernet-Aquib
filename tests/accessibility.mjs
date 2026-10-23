import {chromium} from 'playwright';
import AxeBuilder from '@axe-core/playwright';
import {writeFileSync} from 'node:fs';
const browser=await chromium.launch({executablePath:'/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',headless:true});
const context=await browser.newContext({viewport:{width:1440,height:1000}}),page=await context.newPage();
const results=[];
for(const path of ['/','/services','/services/domain-registration','/about','/network','/projects','/resources','/news','/contact','/portals','/policies','/events']){await page.goto('http://127.0.0.1:4173'+path);await page.evaluate(()=>document.fonts.ready);const axe=await new AxeBuilder({page}).withTags(['wcag2a','wcag2aa','wcag21aa']).analyze();results.push({path,violations:axe.violations.map(v=>({id:v.id,impact:v.impact,nodes:v.nodes.map(n=>({html:n.html,summary:n.failureSummary}))}))});console.log(path,axe.violations.map(v=>v.id).join(',')||'passed');await page.screenshot({path:'test-results/'+(path==='/'?'home':path.slice(1).replaceAll('/','-'))+'-desktop.png',fullPage:true});}
writeFileSync('test-results/accessibility.json',JSON.stringify(results,null,2));await browser.close();
