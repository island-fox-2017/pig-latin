"use strict"

//use readline to fix this challenge
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: 'Masukkan sembarang kata atau Phrase : '
});

rl.prompt();

rl.on('line', (input) => {
  //hasil dari pengerjaan function ditulis ke console juga
  console.log(`####### Kata yang dihasilkan :  '${pigLatin(input)}'`);
  rl.prompt();
})
.on('close', () => {
  console.log('Sampai jumpa lagi ya!');
  process.exit(0);
});
function pigLatin(sentence) {
  // Your pig latin implementation here...
  let splitSentence = sentence.split(' ');
  let output= [];

  for(let i=0; i<splitSentence.length; i++) {
      if(/^[aiueo]/.test(splitSentence[i])) {
       output.push(splitSentence[i]);
      } else {
       output.push(splitSentence[i].replace(/(^[^aiueo]+)(.*)/, '$2$1ay'));
      }
  }

  return output.join(' ');

}
