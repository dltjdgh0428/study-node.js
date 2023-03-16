const http = require('http');

const sever = http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type': 'text/html; charset=utf-8'});
    res.write('<h1>Hello Node</h1>');
    res.end('<p>Hello Server</p>');
})
sever.listen(8080);

sever.on ('listening', () =>{
    console.log('8080번 포트에서 서버 대기 중입니다.');
});
sever.on('error', (error) =>{
    console.error(error);
})