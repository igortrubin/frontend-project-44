#!/usr/bin/env node
import readlineSync from 'readline-sync';

const gameDescription = 'Find the greatest common divisor of given numbers.';

const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const getGcd = (firstValue, secondValue) => {
  if (!secondValue) {
    return firstValue;
  }

  return getGcd(secondValue, firstValue % secondValue);
};

const getGameData = () => {
  const number1 = getRandomInt(1, 100);
  const number2 = getRandomInt(1, 100);
  const question = `${number1} ${number2}`;
  const correctAnswer = getGcd(number1, number2).toString();

  return [question, correctAnswer];
};

const startGame = () => readlineSync(gameDescription, getGameData);

export default startGame;
