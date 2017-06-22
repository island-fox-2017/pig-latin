"use strict"

//use readline to fix this challenge
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output:process.stdout,
  prompt: 'Input your sentence >>> '
})

rl.prompt()
rl.on('line', (sentence) => {
  console.log(pigLatin(sentence));
  rl.prompt();
})

rl.on('close', () => {
  console.log('Sayonara!');
})

function pigLatin(sentence) {
  // Your pig latin implementation here...
  
  let regVow = /\b[aiueo]/ //define vowels sentence 
  // let regCons = /\b[^aiueo\s]/g // \b untuk mengecek per kata
  let regCons = /^[bcdfghjklmnpqrstvwxyz]+/i
  let result = [];
  
  let word = sentence.split(' ')
  for(let i=0; i<word.length; i++){
    if(regCons.test(word[i])){
      let replace = word[i].replace(regCons, '')
      let match = word[i].match(regCons)
      result.push(replace + match + 'ay')
    }else if(regVow.test(word[i])){
      result.push(word[i])
    }
  }
  return result.join(' ')
}
