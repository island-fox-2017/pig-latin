"use strict"
//https://nodejs.org/api/readline.html
// https://regex101.com/
//use readline to fix this challenge
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: 'Input sentence here: '
});

rl.prompt();

rl.on('line', (input) => {
  console.log(`Received: ${input}`);
  console.log(`Pig latin word: ${pigLatin(input)}`);

  rl.prompt();
});

// CONVERT SINGLE WORD
// function pigLatin(sentence) {
//   // Your pig latin implementation here...
//   var matchVowel = /[aiueo]/gi.exec(sentence);
//   if(matchVowel.index === 0)
//   {
//     return sentence;
//   }
//   else
//   {
//     return sentence.substr(matchVowel.index) + sentence.substr(0, matchVowel.index) + 'ay';
//     // sentence.substr(matchVowel.index) = 'ove' mulai dri yg ada vowel
//     // sentence.substr(0, matchVowel.index) = mulai dri index 0 ke yang pas ktemu vowel
//   }
// }

// Convert complete sentence
function pigLatin(sentencee) {
  // Your pig latin implementation here...
  var sentence = sentencee.split(' ');
  var result = [];
  for (let i=0; i<sentence.length; i++){
    var matchVowel = /[aiueo]/gi.exec(sentence[i]);
    if(matchVowel == null)
    {
     result.push(sentence[i]);
    }
    else if (matchVowel.index === 0){
     result.push(sentence[i]);
    } else {
     result.push(sentence[i].substr(matchVowel.index) + sentence[i].substr(0, matchVowel.index) + 'ay');
    }
  }
  return result.join(' ');
}
