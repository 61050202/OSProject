const express = require("express");
const app = express();
app.use(express.json())

const port = process.env.PORT || 1250;
app.listen(port, () => {
  console.log('server is running on port: ', port);
});

app.route('').get( (req, res) => {
  res.send('หวัดดี');
});

//test
app.get("/test", (req,res)=>{
    var mes = "adwadad";
    res.send('mes');    
});

app.get('/home', (req, res) => {      
    res.sendFile(__dirname+"/"+"home.html")
});

app.get('/circle',function(reg,res){
    res.sendFile(__dirname+"/"+"circle.html")    
});

app.get("/square", (req,res)=>{  
  res.sendFile(__dirname+"/"+"square.html")    
});

app.get("/traingle", (req,res)=>{  
  res.sendFile(__dirname+"/"+"traingle.html")    
});




