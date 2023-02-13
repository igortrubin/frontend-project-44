import runGame from '../index.js';

const gameDescription = 'What is the result of the expression?';

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

const getGameData = () => {
  const a = getRandomInt(1, 20);
  const b = getRandomInt(1, 20);
  const operators = ['+', '-', '*'];
  const operator = operators[getRandomInt(0, operators.length - 1)];
  const question = `${a} ${operator} ${b}`;
  const correctAnswer = calculate(a, b, operator).toString();

  return [question, correctAnswer];
};

const startGame = () => runGame(gameDescription, getGameData);

export default startGame;
