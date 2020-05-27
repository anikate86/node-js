// This is the version of project 2

var http = require('http');

var fs = require('fs');

// creating a server
var server = http.createServer(function(req,res){
    console.log('request was made: '+ req.url);
    res.writeHead(200,{'content-Type': 'application/json '});

// exporting the json file
const file = require('./data.json');
var i;
var myObj = [];
for (i = 0; i <6;i++){

myObj.push({user: file.userData[i].name,personal_interests : file.userData[i].interests.personal.join(',')})
}


res.end(JSON.stringify(myObj ));
       
});

// calling the function on server
server.listen(3000,'127.0.0.1');
console.log('yo We are listening to port 3000');