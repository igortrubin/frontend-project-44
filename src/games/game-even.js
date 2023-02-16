import gameLogic from '../index.js';
import getRandomInt from '../random.js';

const gameView = 'What is the result of the expression?';

const isEven = (number) => number % 2 === 0;

const getGameData = () => {
  const randomNumber = getRandomInt(1, 100);
  const correctAnswer = isEven(randomNumber) ? 'yes' : 'no';
  return [randomNumber, correctAnswer];
};

const startGame = () => gameLogic(gameView, getGameData);

export default startGame;
