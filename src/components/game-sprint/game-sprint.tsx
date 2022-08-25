import { Button } from '@mui/material';
import {
  FC, useEffect, useRef, useState,
} from 'react';
import { getFilesRoot } from '../../inc/conf';
import usePlay from '../../inc/use-play';
import { emptyGameResult, GameProps } from '../game-common/types';
import Parrot from './parrot';
import Star from './star';
import './style.scss';

const maxStars = 3;
const maxParrots = 4;

const GameSprint: FC<GameProps> = ({ words, onFinish }) => {
  // const [gameResult, setGameResult] = useState<GameWordsResult>(emptyGameResult);
  const [currentWord, setCurrentWord] = useState(0);
  const [score, setScore] = useState(0);
  const [parrots, setParrots] = useState(0);
  const [stars, setStars] = useState(0);
  const [currentTranslate, setCurrentTranslate] = useState(0);
  const [playError] = usePlay('/sounds/error.wav');
  const [playCorrect] = usePlay('/sounds/correct.wav');
  const [playWord] = usePlay('');
  const [goodW, setGoodW] = useState<Set<number>>(new Set());
  const [badW, setBadW] = useState<Set<number>>(new Set());

  const [counter, setCounter] = useState(60);
  const timer = useRef<NodeJS.Timer>();

  useEffect(() => {
    if (counter > 0) {
      timer.current = setInterval(() => setCounter(counter - 1), 1000);
    } else {
      const gameResult = emptyGameResult;

      words.forEach(
        (word, index) => ((goodW.has(index) && !badW.has(index))
          ? gameResult.goodWords.push(word)
          : gameResult.badWords.push(word)),
      );
      onFinish(gameResult);
    }

    return () => clearInterval(timer.current);
  }, [counter]);

  const randWord = () => Math.floor(Math.random() * (words.length));

  function getNextWord() {
    const rand = currentWord === words.length - 1 ? 0 : currentWord + 1;
    setCurrentWord(rand);
    const translate = (Math.random() > 0.3) ? rand : randWord();
    setCurrentTranslate(translate);
  }

  function handleWord(good: boolean) {
    const success = (good && currentWord === currentTranslate)
    || (!good && currentWord !== currentTranslate);

    // const target = success ? gameResult.goodWords : gameResult.badWords;
    if (success) {
      playCorrect();
      if (!badW.has(currentWord)) {
        if (currentWord === currentTranslate) {
          goodW.add(currentWord);
          setGoodW(new Set(goodW));
        }
      }
      setScore(score + 10 * 2 ** parrots);
      if (stars === maxStars) {
        if (parrots < maxParrots) {
          setStars(0);
          setParrots(parrots + 1);
        }
      } else {
        setStars(stars + 1);
      }
    } else {
      badW.add(currentWord);
      setBadW(new Set(badW));
      playError();
      setStars(0);
      setParrots(0);
    }

    // target.push(words[currentWord]);
    // setGameResult(gameResult);
    // currentWord < words.length - 1 ? setCurrentWord(currentWord + 1) : setCurrentWord(0);
    getNextWord();
  }

  useEffect(() => {
    getNextWord();
  }, []);

  function eArray(max: number): Array<number> {
    const arr = [];
    for (let i = 0; i < max; i += 1) {
      arr.push(i);
    }
    return arr;
  }

  return (
    <div className="game-sprint">
      <div className="sprint-wrapper">
        <div className="sprint-status">
          <div className="sprint-status__top-text">{counter}</div>
          <div className="sprint-status__top-text">{score}</div>
        </div>
        <div className="sprint-box">
          <div className="sprint-box__stars">
            {eArray(maxStars).map((v, i) => <Star stars={stars} n={i} key={`s${v}`} />)}
          </div>
          <div className="sprint-box__parrots">
            {eArray(maxParrots).map((v, i) => <Parrot parrots={parrots} n={i} key={`p${v}`} />)}
          </div>
          <div className="sprint-box__word">
            {words[currentWord].word}

          </div>
          <div className="sprint-box__translate">{words[currentTranslate]?.wordTranslate}</div>
          <div className="sprint-box__buttons">
            <Button variant="contained" color="success" onClick={() => handleWord(true)}>Верно</Button>
            <button onClick={() => playWord(getFilesRoot() + words[currentWord].audio)} className="sprint-box__audio">🔊</button>
            <Button variant="contained" color="error" onClick={() => handleWord(false)}>Не верно</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameSprint;
