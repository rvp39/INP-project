var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var mongoose = require('mongoose');
var bcrypt = require('bcrypt');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("Views"))
app.set("view engine","ejs")

var User = require('./models/user');


mongoose.connect('mongodb://localhost:27017/authDemo', {useNewUrlParser: true, useUnifiedTopology: true})
.then(()=>{
    console.log('connected')
})


app.get("/",function(req,res){

    res.render("index");
});
app.get("/about",function(req,res){

    res.render("Aboutus");
});
app.get("/contact",function(req,res){

    res.render("ContactUs");
});
app.get("/home",function(req,res){
    res.render("Home");
});


//sugnup and stuff
app.get("/signup",function(req,res){
    res.render("signup");
});
app.post('/signup',async (req,res)=>{
    const {Username,Password}=req.body;
    const hash = await bcrypt.hash(Password,12)
    res.send(hash)
})


app.get("/profile",(req,res)=>{
    res.send ('profile');
})





app.listen(3000)