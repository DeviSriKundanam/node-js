const http=require("http")

http.createServer((req,res)=>{
	res.write("server is started")
	res.end()
}).listen(2000)