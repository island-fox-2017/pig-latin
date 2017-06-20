"use strict"

//use readline to fix this challenge
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: 'pig-latin >>'
})

rl.prompt();

rl.on('line', (sentence) => {
  console.log(pigLatin(sentence));
  rl.prompt();
})
.on('close', () =>{
  console.log(`\n bye bye piglatin`);
})

function pigLatin(sentence) {
  // Your pig latin implementation here...
  let sentenceToArr = sentence.split(' ');
  let arrPiglatin = [];
  
  for (let i = 0 ; i < sentenceToArr.length ; i++){
    if (/^[aiueoAIUEO]/.test(sentenceToArr[i])){
      arrPiglatin.push(sentenceToArr[i])
    }else {
      arrPiglatin.push(sentenceToArr[i].replace(/([^aiueoAIUEO]+)([a-zA-Z]+)/, '$2$1ay'))
    }
  }
  return arrPiglatin.join(' ')
}
