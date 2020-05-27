// exporting the json file
const file = require('./data.json');

console.log(file.userData.map(x=>{
  return {name : x.name, interests : x.interests['personal'].join(',')}
}))