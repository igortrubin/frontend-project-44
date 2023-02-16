import gameLogic from '../index.js';
import getRandomInt from '../random.js';

const gameView = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  for (let i = 2; i <= Math.sqrt(number); i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return number > 1;
};

const getGamedata = () => {
  const randomNum = getRandomInt(1, 100);
  const correctAnswer = isPrime(randomNum) ? 'yes' : 'no';
  return [randomNum, correctAnswer];
};

const startGame = () => gameLogic(gameView, getGamedata);

export default startGame;
