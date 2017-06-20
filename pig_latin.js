"use strict"

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: 'Input : '
});
rl.prompt();
rl.on('line', (pig) => {
  pig = pigLatin(pig);
  console.log(`Received: ${pig}`);
  rl.prompt();
});



function pigLatin(sentence) {
  // Your pig latin implementation here...
  var spl = sentence.split(' ');
  var isi=[];
  for (let i = 0; i < spl.length; i++) {
    if (/^[aeiou]/i.test(spl[i])) {
      isi.push(spl[i]);
    }
    else {
      isi.push(spl[i].replace(/^([^aeiou]+)(.*)/i, "$2$1ay"));
    }
  }
  return isi.join(' ')
}
