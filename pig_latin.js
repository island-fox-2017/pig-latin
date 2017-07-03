"use strict"

//use readline to fix this challenge
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt:'input dong ay :'
});

rl.prompt();
rl.on('line', (input) => {
  console.log(`Received: ${pigLatin(input)}`);
rl.prompt();
});


function pigLatin(sentence) {
  var arr = [];
 var split = sentence.split(" ");
 // return split;
 for (var i = 0; i <split.length; i++) {
  if(/^[AEIUO]/i.test(split[i])){
    arr.push(split[i])
  }
  else{
    arr.push(split[i].replace(/(^[^AEIOU]+)(.*)/ig, "$2$1ay"));
  }
 }
 return arr.join(" ");
 replace(x ,x)
}
