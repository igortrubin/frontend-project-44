import gameLogic from '../index.js';

const gameView = 'What number is missing in the progression?';

const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const getProgression = (start, step, length) => {
  const progression = [];

  for (let i = 0; i < length; i += 1) {
    progression.push(start + i * step);
  }

  return progression;
};

const getGameData = () => {
  const start = getRandomInt(0, 5);
  const step = getRandomInt(1, 5);
  const length = getRandomInt(10, 15);
  const progression = getProgression(start, step, length);
  const secretNumber = getRandomInt(0, progression.length - 1);
  const correctAnswer = progression[secretNumber].toString();
  progression[secretNumber] = '..';
  const question = progression.join(' ');

  return [question, correctAnswer];
};

const startGame = () => gameLogic(gameView, getGameData);

export default startGame;
