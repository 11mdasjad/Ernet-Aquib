import {createServer} from 'node:http';
import {readFile,stat} from 'node:fs/promises';
import {resolve,extname} from 'node:path';
const root=resolve('dist'), port=Number(process.env.PORT||4173);
const types={'.html':'text/html; charset=utf-8','.js':'text/javascript; charset=utf-8','.css':'text/css; charset=utf-8','.json':'application/json','.svg':'image/svg+xml','.jpg':'image/jpeg','.png':'image/png','.woff2':'font/woff2','.xml':'application/xml','.txt':'text/plain'};
createServer(async(req,res)=>{try{const pathname=decodeURIComponent(new URL(req.url,'http://localhost').pathname);let file=resolve(root,'.'+pathname);if(!file.startsWith(root+'/')&&file!==root){res.writeHead(403);res.end();return}let status=200;try{const st=await stat(file);if(st.isDirectory())file+='/index.html';await stat(file)}catch{file=root+'/404.html';status=404}const body=await readFile(file);res.writeHead(status,{'Content-Type':types[extname(file)]||'application/octet-stream','X-Content-Type-Options':'nosniff','Cache-Control':'no-cache'});res.end(body)}catch{res.writeHead(500);res.end('Unable to serve this page.')}}).listen(port,'127.0.0.1',()=>console.log(`Local: http://127.0.0.1:${port}`));
