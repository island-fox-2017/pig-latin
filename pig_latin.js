"use strict"

//use readline to fix this challenge
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,

});

rl.setPrompt('Masukan STRING ->')
rl.on('line', (input) => {
  console.log(`Piglatin : ${pigLatin(input)}` );
  rl.prompt()
});

rl.prompt();

function pigLatin(sentence) {
  // Your pig latin implementation here...
  let splitKata = sentence.split(' ');
  let gabungHuruf = [];

  for (var i = 0; i < splitKata.length; i++) {
    if(/^[^aiueo]/.test(splitKata[i])) {
        if (/[aiueo]/.test(splitKata[i])) {
          gabungHuruf.push(splitKata[i].replace(/([^aiueo]+)(.*)/i, '$2$1ay'));
        } else {
          gabungHuruf.push(splitKata[i] +'ay')
        }
    }else {
       gabungHuruf.push(splitKata[i])
    }
  }
  return gabungHuruf.join(' ')
}
