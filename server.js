var htttp = require("http");
var a=80;
var b=30;
var c=a+b;
var msg =" A value is "+a+" B value is "+b+" Sum is "+c;

htttp.createServer(function(req,res)
{
    res.end('<h1>hello word in node</h1>'+msg);
}).listen(3000);
console.log('server running at http://127.0.0.1:3000');
