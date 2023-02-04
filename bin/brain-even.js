import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
const userName = readlineSync.question('May I have your name? ');
console.log(`Hello, ${userName}!`);
console.log('Answer "yes" if the number is even, otherwise answer "no".');

console.log('Question: 15');
let answer = readlineSync.question('Your answer: ');
if (answer === 'no') {
  console.log('Correct!');
} else {
  console.log("'yes' is wrong answer ;(. Correct answer was 'no'");
  console.log(`Let's try again, ${userName}!`);
  process.exit(1);
}

console.log('Question: 16');
answer = readlineSync.question('Your answer: ');
if (answer === 'yes') {
  console.log('Correct!');
} else {
  console.log("'no' is wrong answer ;(. Correct answer was 'yes'");
  console.log(`Let's try again, ${userName}!`);
  process.exit(1);
}

console.log('Question: 17');
answer = readlineSync.question('Your answer: ');
if (answer === 'no') {
  console.log('Correct!');
} else {
  console.log("'yes' is wrong answer ;(. Correct answer was 'no'");
  console.log(`Let's try again, ${userName}!`);
  process.exit(1);
}

console.log(`Congratulations, ${userName}!`);
