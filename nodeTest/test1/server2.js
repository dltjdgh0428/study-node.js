const http = require('http');
const fs = require('fs').promises;

const sever = http.createServer(async(req,res)=>{
    try{
        const data = await fs.readFile('./server2.html');
        res.writeHead(200, { 'Content-Type':'text/html; charset=utf-8'});
        res.end(data);
    } catch(err){
        console.error(err);
        res.writeHead(500,{ 'Content-Type':'text/plain; charset=utf-8'});
        res.end(err.message);
    }
})
sever.listen(8081);
sever.on ('listening', () =>{
    console.log('8081번 포트에서 서버 대기 중입니다.');
});
sever.on('error', (error) =>{
    console.error(error);
})