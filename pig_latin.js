"use strict"

//use readline to fix this challenge
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: 'PIGLATIN $ '
})

rl.prompt();

rl.on('close', function() {
  console.log('\n------bye');
})
rl.on('line', (data) => {
  console.log('Converted: ' + pigLatin(data));
  // if (data == "hello")
  //   rl.setPrompt('Case hello > ')
  // else {
  //   rl.setPrompt('Try again > ')
  // }
  // rl.close()
  rl.prompt();
});

function pigLatin(sentence) {
  // Your pig latin implementation here...
  var consonant = /(\b[^aiueo]+)(\w+)/;
  var sentenceArr = sentence.split(' ') //['hello', 'hello', 'ibu', 'wkwk']
  var pigLatin = [];

  for (let i = 0; i < sentenceArr.length; i++) {
    if (consonant.test(sentenceArr[i]) === true) {
      var converted = sentenceArr[i].replace(consonant, '$2$1ay');
      pigLatin.push(converted);
    } else {
      pigLatin.push(sentenceArr[i])
    }
  }
  return pigLatin.join(' ');
}







// console.log(pigLatin('hello hello ibu hello wkwk'));
