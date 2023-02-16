import gameLogic from '../index.js';
import getRandomInt from '../random.js';

const gameView = 'Answer "yes" if the number is even, otherwise answer "no".';

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

const getGameData = () => {
  const a = getRandomInt(1, 20);
  const b = getRandomInt(1, 20);
  const operators = ['+', '-', '*'];
  const operator = operators[getRandomInt(0, operators.length - 1)];
  const question = `${a} ${operator} ${b}`;
  const correctAnswer = calculate(a, b, operator).toString();

  return [question, correctAnswer];
};

const startGame = () => gameLogic(gameView, getGameData);

export default startGame;
