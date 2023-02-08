import readlineSync from 'readline-sync';
import evenStartGame from '../bin/brain-even.js';
import calcStartGame from '../bin/brain-calc.js';

console.log('Welcome to the Brain Games!');

function getUserName() {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  return userName;
}

const userName = getUserName();

evenStartGame(userName);
calcStartGame(userName);
