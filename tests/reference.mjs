import {chromium} from 'playwright';
import {mkdirSync,readFileSync,writeFileSync} from 'node:fs';
const map=JSON.parse(readFileSync('research/source-map.json','utf8'));
const browser=await chromium.launch({executablePath:'/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',headless:true});
const page=await browser.newPage();const log=[];
mkdirSync('research/screenshots',{recursive:true});
for(const [key,url] of [['home','https://xn--m1bd4e9a1b9i.xn--h2brj9c/'],['about',map.about],['services',map.services],['contact',map.contact],['registry','https://registry.ernet.in/']]){try{await page.setViewportSize({width:1440,height:1000});const r=await page.goto(url,{waitUntil:'domcontentloaded',timeout:30000});await page.waitForTimeout(1200);await page.screenshot({path:`research/screenshots/${key}-1440.png`,fullPage:true,timeout:15000});await page.setViewportSize({width:375,height:900});await page.screenshot({path:`research/screenshots/${key}-375.png`,fullPage:true,timeout:15000});log.push({key,url,status:r.status(),screenshots:['1440','375']})}catch(e){log.push({key,url,error:e.message})}}
writeFileSync('research/reference-screenshots.json',JSON.stringify(log,null,2));await browser.close();console.log(log.map(x=>({key:x.key,status:x.status,error:x.error})))
