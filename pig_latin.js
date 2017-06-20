"use strict"

//use readline to fix this challenge
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.setPrompt('===== PIGLATIN =====\nType Your Words Here: ')
rl.prompt();

rl.on('line', (input)=> {
  console.log('Pig Latin : ', pigLatin(input));
  rl.prompt();
}).on('close', ()=> {
  console.log('\n=== Have a nice days ===');
})


function pigLatin(sentence) {
  // Your pig latin implementation here...
  let arrSentence = sentence.split(' ');
  let regex = /[aeiou]/i;
  let arr = [];
  
  arrSentence.forEach(function (element) {
    let index = element.search(regex); // output is index number of string..
    
    if (index === 0) {
      arr.push(element);
    } else {
      arr.push(element.slice(index) + element.slice(0,1) + 'ay')
    }
  });
  return arr.join(' ');
  
}

