"use strict"

// use readline to fix this challenge
const readline = require('readline');
const rl = readline.createInterface({
  input  : process.stdin,
  output : process.stdout
})

rl.setPrompt('Masukkan kalimat: ')
rl.prompt()
rl.on('line', line => {
  console.log(pigLatin(line));
  rl.prompt();
})
.on('close', () => {
  console.log('bye...');
})


function pigLatin(sentence) {
  // Your pig latin implementation here...
  let sentence2 = sentence.split(' ');
  let pattern = /\b([^aiueo]+)(\w*)/gi;
  let result =[];

  for (var i = 0; i <= sentence2.length - 1; i++) {
    var pigged = sentence2[i].replace(pattern, `$2$1ay`);
    result.push(pigged);
  }

  return result.join(' ');
}

// console.log(pigLatin('buaya air main di atas darat'));