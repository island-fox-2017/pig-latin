"use strict"

//use readline to fix this challenge
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: 'Masukan kalimat: '
});
rl.prompt();
rl.on('line', (kalimat) => {
  kalimat = pigLatin(kalimat);
  console.log(`Output: ${kalimat}`);
  rl.prompt();
});

function pigLatin(sentence) {
  var perkata = sentence.split(' ');
  var newSentence = [];
  for (var i = 0; i < perkata.length; i++){
    if (perkata[i].charAt(0).match(/[aiueo]/gi)) {
      newSentence.push(perkata[i]);
    } else {
      newSentence.push(perkata[i].replace(/(^[^aiueo]*)(.*)/i, '$2$1ay'))
    }
  }
  return newSentence.join().replace(/,/g, ' ');
}
