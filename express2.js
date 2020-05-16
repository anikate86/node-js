var express = require('express');

var bodyParser = require('body-parser');

var app = express();

var urlencodedParser =bodyParser.urlencoded({extended: true});

app.set('view engine', 'ejs');

app.get('/',function(req,res){
    res.render('index');
});

app.get('/contact',function(req,res){
    res.render('contact',{qs :req.query});
});

app.post('/contact', urlencodedParser, function(req,res){
    console.log(req.body);
    res.render('contact-success',{data :req.body});
});


app.get('/profile/:name',function(req,res){
    var data = {age:21,job:'student',hobbies:['eating','playing','gyming']};
    res.render('profile', {person :req.params.name,data :data});
});

app.listen(3000);