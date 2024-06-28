const express = require('express');
const cors = require('cors')
require('dotenv').config()
const app = express();
app.use(cors())
app.use(express.json())


app.get('/',(req,res)=>{
  res.send("Api is ready");
})

app.get('/news',(req,res)=>{
  res.send("News");
})



let query = "India";
const KEY = process.env.KEY;


app.post('/news',(req,res)=>{
  let query = req.body.query;
  fetch(`https://newsapi.org/v2/everything?q=${query}&sortBy=popularity&apiKey=${KEY}`)
  .then(response => response.json())
  .then(data=>res.send(data));
 
})



app.get('/news',(req,res)=>{
  fetch(URL)
  .then(response => response.json())
  .then(data=>res.send(data));
    
})

const PORT = process.env.PORTBACK || 5000;
app.listen(PORT);