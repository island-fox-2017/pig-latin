"use strict"

//use readline to fix this challenge
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: 'Enter a sentence: '
});
rl.prompt();
rl.on('line', (sentence) => {
  let input = pigLatin(sentence);
  console.log(`Pig Latin: ${pigLatin(sentence)}`);
  rl.prompt();
})

.on('close', (closing) => {
  closing = 'thank you';
console.log(`done, ${closing}`);
});


function pigLatin(sentence) {
  // Your pig latin implementation here...
  let vokal = /^[aiueo]/ig;
  let konsonan = /(^[^aiueo]+)(.*)/i;
  let splitSentence = sentence.split(' ');
  let result = [];
  for (var i = 0; i < splitSentence.length; i++) {

    if(vokal.test(splitSentence[i])) {
      result.push(splitSentence[i]);
    }
    else if (konsonan.test(splitSentence[i])){
      result.push(splitSentence[i].replace(konsonan, '$2$1ay'));
    }
  }
 return result.join(' ');
}
