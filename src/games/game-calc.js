import readlineSync from 'readline-sync';

function getUserName() {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  return userName;
}

getUserName();

const calculate = (a, b, operators) => {
  let result = null;

  switch (operators) {
    case '+':
      result = a + b;
      break;
    case '-':
      result = a - b;
      break;
    case '*':
      result = a * b;
      break;
    default: break;
  }
  return result;
};

const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

function checkNumber(a, b, operator, userName) {
  console.log(`Question: ${a} ${operator} ${b}`);
  const answer = readlineSync.question('Your answer: ');
  const rightAnswer = calculate(a, b, operator);

  if (+answer === rightAnswer) {
    console.log('Correct!');
  } else {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${rightAnswer}'`);
    console.log(`Let's try again, ${userName}!`);
    process.exit(1);
  }
}

export default (userName) => {
  console.log('What is the result of the expression?');

  for (let i = 0; i < 3; i++) {
    const a = getRandomInt(1, 20);
    const b = getRandomInt(1, 20);
    const operators = ['+', '-', '*'];
    const operator = operators[getRandomInt(0, operators.length - 1)];
    checkNumber(a, b, operator, userName);
  }
  console.log(`Congratulations, ${userName}!`);
};
