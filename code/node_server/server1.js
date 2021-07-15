const express = require('express')
const app = express()

app.use((request,response,next)=>{
	console.log('someone make request to server1');
	console.log('request from', request.get('Host'));
	next()
})

app.get('/students',(request,response)=>{
	const students = [
	{id:'001',name:'tom',age:10},
	{id:'002',name:'tom',age:10},
	{id:'003',name:'tom',age:10},
	]
	response.send(students)
})

app.listen(5000,(err)=>{
	if(!err) console.log('server work successly, please visit : http://localhost:5000/students');
})