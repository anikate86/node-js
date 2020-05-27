var arr = [100,90,90,80,70];
//sorting the arr
var sorted = arr.sort(function(a,b){return b-a})
var alice = [120,95,75,65];

// sorting the alice
var sorted = alice.sort(function(a,b){return b-a})

// concating the two arrays
var prime = arr.concat(alice);

// sorting the prime 
var sorted = prime.sort(function(a,b){return b-a})

// maping the ranks of the arrays
var ranks1 = prime.map(function(v){ return sorted.indexOf(v)+1 });

var ranks2 = prime.map(function(v){ return sorted.indexOf(v)+1 });

var ranks = alice.map(function(v){ return sorted.indexOf(v)+1 });

console.log(ranks);

ranks1.push