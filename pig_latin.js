"use strict"

//use readline to fix this challenge
const readline = require('readline');

//

const rl = readline.createInterface({
 input : process.stdin,
 output: process.stdout
});

//input user
rl.setPrompt("Input Please: ");
rl.prompt();

//out put
rl.on('line', kata =>{
  console.log(`Di Terima: ${pigLatin(kata)}`);// agar function bisa berfungsi di inputan maka perlu menambah console.log(`Di Terima: ${pigLatin(kata)}`);
rl.prompt();
});

//close
rl.on('close',() =>{
  console.log('Selesai');
});

function pigLatin(sentence) {
  // Your pig latin implementation here...

  let splited = sentence.split(' ');
  //console.log(splited);
  let hasil= [];

  for(let i=0; i<splited.length; i++)
    {
      if(/^[aiueo]/i.test(splited[i]))
      {
       hasil.push(splited[i]);
      }
      else{
       hasil.push(splited[i].replace(/(^[^aiueo]+)(.*)/i, '$2$1ay'));
      }
    }

  return hasil.join(' ');


  // untuk 1 kada aja!!!
  // if(/^[aiueo]/i.test(sentence))
  // {
  //   return sentence;
  // }
  // else{
  //   return sentence.replace(/(^[^aiueo]+)(.*)/i, '$2$1ay');
  // }


}
