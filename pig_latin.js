"use strict"

//use readline to fix this challenge
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: 'isi: '
});
rl.prompt();
rl.on('line', (input) => {
  input = pigLatin(input);
  console.log(`Received: ${input}`);
  rl.prompt();
});

function pigLatin(sentence) {
  // Your pig latin implementation here...
  let strArr = sentence.split(' ');
  let result = [];
  for (let i = 0; i < strArr.length; i++) {
    let test = (/[aiueo]/gi).exec(strArr[i]);
    if (test && test.index !== 0) {
      let add = strArr[i].substring(0, test.index);
      result.push(strArr[i].substring(test.index, strArr[i].length) + add + "ay");
    }
    else {
      result.push(strArr[i]);
    }
  }
  return result.join(' ');
}

pigLatin("hehe hehe");
