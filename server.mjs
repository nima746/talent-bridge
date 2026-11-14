import http from 'node:http';
import {readFile} from 'node:fs/promises';
const types={'.html':'text/html; charset=utf-8','.css':'text/css; charset=utf-8','.js':'text/javascript; charset=utf-8'};
const files={'/':'index.html','/index.html':'index.html','/style.css':'style.css','/app.js':'app.js','/model.js':'model.js'};
http.createServer(async(req,res)=>{try{const name=files[new URL(req.url,'http://localhost').pathname];if(!name){res.writeHead(404);return res.end('Not found');} const data=await readFile(new URL('./dist/'+name,import.meta.url));res.writeHead(200,{'Content-Type':types[name.slice(name.lastIndexOf('.'))],'X-Content-Type-Options':'nosniff'});res.end(data);}catch{res.writeHead(500);res.end('Server error');}}).listen(4174,'127.0.0.1',()=>console.log('Talent Bridge: http://127.0.0.1:4174'));
