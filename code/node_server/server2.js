const express = require('express')
const app = express()

app.use((request,response,next)=>{
	console.log('someone make request to server2');
	console.log('request from', request.get('Host'));
	next()
})

app.get('/cars',(request,response)=>{
	const cars = [
	{id:'001',name:'Bens',price:105},
	{id:'002',name:'Toyota',price:510},
	{id:'003',name:'Tasla',price:150},
	]
	response.send(cars)
})

app.listen(5001,(err)=>{
	if(!err) console.log('server work successly, please visit : http://localhost:5001/cars');
})