"use strict"

//use readline to fix this challenge
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.setPrompt('Kalimat yang ditranslate ke pigLatin:   ');
rl.prompt();

rl.on('line', (input) => {
  console.log(pigLatin(input));
  rl.prompt();
});

function pigLatin(sentence) {
  // Your pig latin implementation here...
  var vocal = /[aiueo]/i;
  var konstanta = /[bcdfghjklmnpqrstvwxyz]+/i;
  var hasil = [];
  var pisah = sentence.split(' ');

  for (let i = 0; i < pisah.length; i++) {
    if (vocal.test(pisah[i][0])) {
      hasil.push(pisah[i])
    } else {
      var hilang = pisah[i].replace(konstanta, "");
      var match = pisah[i].match(konstanta);
      hasil.push(hilang + match + 'ay')
    }
  }
  return hasil.join(' ');
}
