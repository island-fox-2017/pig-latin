"use strict"

//use readline to fix this challenge
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: 'input yaah..: '
});

rl.prompt();
rl.on('line', (input) => {
  console.log(`Received: ${pigLatin(input)}`);
rl.prompt();
});
function pigLatin(sentence) {
  if(/^[AQIUEO]/i.test(sentence)) {
    return sentence+'ay'
  }
  else {
  return sentence.replace(/(^[^AIUEO]+)(.*)/i, '$2$1ay');


}
}
