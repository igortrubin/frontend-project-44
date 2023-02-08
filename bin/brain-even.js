import readlineSync from 'readline-sync';

const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

function checkNumberOdd(num, answer, userName) {
  if (answer === 'no') {
    console.log('Correct!');
  } else {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was 'no'`);
    console.log(`Let's try again, ${userName}!`);
    process.exit(1);
  }
}

function checkNumberEven(num, answer, userName) {
  if (answer === 'yes') {
    console.log('Correct!');
  } else {
    console.log("'no' is wrong answer ;(. Correct answer was 'yes'");
    console.log(`Let's try again, ${userName}!`);
    process.exit(1);
  }
}

function isEven(num) {
  return num % 2 === 0;
}

function questAnswer(num) {
  console.log(`Question: ${num}`);

  return readlineSync.question('Your answer: ');
}

function checkNumber(num, userName) {
  const answer = questAnswer(num);

  if (isEven(num)) {
    checkNumberEven(num, answer, userName);
  } else {
    checkNumberOdd(num, answer, userName);
  }
}

export default function evenStartGame(userName) {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  for (let i = 0; i < 3; i++) {
    const num = getRandomInt(1, 100);
    checkNumber(num, userName);
  }

  console.log(`Congratulations, ${userName}!`);
}
