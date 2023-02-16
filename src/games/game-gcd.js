import gameLogic from '../index.js';
import getRandomInt from '../random.js';

const gameView = 'Find the greatest common divisor of given numbers.';

const getGcd = (one, two) => {
  if (!two) {
    return one;
  }

  return getGcd(two, one % two);
};

const getGameData = () => {
  const a = getRandomInt(1, 100);
  const b = getRandomInt(1, 100);
  const question = `${a} ${b}`;
  const correctAnswer = getGcd(a, b).toString();

  return [question, correctAnswer];
};

const startGame = () => gameLogic(gameView, getGameData);

export default startGame;
