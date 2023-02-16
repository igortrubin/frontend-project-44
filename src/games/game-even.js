import gameLogic from '../index.js';
import getRandomInt from '../random.js';

const gameView = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => number % 2 === 0;

const getGameData = () => {
  const randomNumber = getRandomInt(1, 100);
  const correctAnswer = isEven(randomNumber) ? 'yes' : 'no';
  return [randomNumber, correctAnswer];
};

const startGame = () => gameLogic(gameView, getGameData);

export default startGame;
