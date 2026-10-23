import {readFileSync,writeFileSync} from 'node:fs';
const data=JSON.parse(readFileSync('research/clean-content.json','utf8'));
data.projects=data.projects.map(({images,...p})=>p);
const institutional=(()=>{try{return JSON.parse(readFileSync('research/institutional.json','utf8'))}catch{return {}}})();
writeFileSync('dist/verified.js','export const verified = '+JSON.stringify(data,null,2)+';\nexport const institutional = '+JSON.stringify(institutional,null,2)+';\n');
