"use strict"

//use readline to fix this challenge
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output:process.stdout,
  prompt: 'Input your words >>> '
})

rl.prompt()

function pigLatin(sentence) {
  // Your pig latin implementation here...
  
  let regex = /\b[aiueo]/
  
  
}
