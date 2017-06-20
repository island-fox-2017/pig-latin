"use strict"

//use readline to fix this challenge
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: 'input kalimat> '
});

rl.prompt();

rl.on('line', (input) => {
  console.log(`Received: ${input}`);
  console.log(`pig latin word: ${pigLatin(input)}`);
  rl.prompt();
})
rl.on('close', () => {
  console.log('have a nice day!');
});

//single word
// function pigLatin(sentence) {
//   // Your pig latin implementation here...
//   var matchVowel = /[AIUEOaiueo]/.exec(sentence);
//   if(matchVowel.index === 0)
//   {
//     return sentence;
//   }
//   else
//   {
//     return sentence.substr(matchVowel.index) + sentence.substr(0, matchVowel.index) + 'ay';
//   }
// }

//complete sentence
function pigLatin(sentence) {
  // Your pig latin implementation here...
  const arrayString = sentence.split(' ');
  let result = [];
  for(let i = 0; i < arrayString.length; i++)
  {
    var matchVowel = /[AIUEO]/i.exec(arrayString[i]);
    if(matchVowel == null)
    {
      result.push(arrayString[i]);
    }
    else if(matchVowel.index === 0)
    {
      result.push(arrayString[i]);
    }
    else
    {
      result.push(arrayString[i].substr(matchVowel.index) + arrayString[i].substr(0, matchVowel.index) + 'ay');
    }
  }
  return result.join(' ');
}
