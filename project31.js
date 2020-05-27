// exporting express module
var express = require('express');

var app = express();
// exprting fs module
var fs = require ('fs');
// exporting body-parser
var bodyParser = require('body-parser');


var urlencodedParser = bodyParser.urlencoded({extended: true});

app.use(urlencodedParser);

// this will send the data.json file
app.get('/',function(req,res){
    res.sendFile(__dirname +'/data.json');
});

// this will write the data to user.json 
app.post('/users',  (req, res) => {
    var user = [{
    userId: req.body.userId ,
    name: req.body.name ,
    email: req.body.email,
    password: req.body.password ,
    responsibilities: [req.body.responsibilities],
    interests:{
      career_wise: [req.body.interestsc],
      personal: [req.body.interestsp]
    }
}];   

   fs.writeFile('user.json',JSON.stringify(user),(err,result)=>{
    if(err){
        console.log("Error while writing is",err);
        res.send('failed');
    }
    else{
        res.send('successfully written'); 
    }
})
 


});



app.listen(3000);