import readlineSync from 'readline-sync';

const name = readlineSync.question('Your answer: ');
export function firstGame(userName) {
    var readlineSync = require('readline-sync');
    console.log("Welcome to the Brain Games!");
    const userName= readlineSync.question("May I have your name? ");
     
    console.log(`Hello, ${userName}!`);
    }