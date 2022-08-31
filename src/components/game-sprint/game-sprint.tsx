import { Button } from '@mui/material';
import {
  FC, useEffect, useRef, useState,
} from 'react';
import { getFilesRoot } from '../../inc/conf';
import usePlay from '../../inc/use-play';
import { GameProps, GameWordsResult } from '../game-common/types';
import Parrot from './parrot';
import Star from './star';
import './style.scss';

const maxStars = 3;
const maxParrots = 4;

const GameSprint: FC<GameProps> = ({ words, onFinish }) => {
  const [currentWord, setCurrentWord] = useState(0);
  const [score, setScore] = useState(0);
  const [parrots, setParrots] = useState(0);
  const [stars, setStars] = useState(0);
  const [serie, setSerie] = useState(0);
  const [maxSerie, setMaxSerie] = useState(0);
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
      const gameResult: GameWordsResult = {
        goodWords: [], badWords: [], gameName: 'sprint', serie: maxSerie,
      };

      words.forEach(
        (word, index) => {
          if (badW.has(index)) gameResult.badWords.push(word);
          else
          if (goodW.has(index)) { gameResult.goodWords.push(word); }
        },
      );
      onFinish(gameResult);
    }

    return () => clearInterval(timer.current);
  }, [counter]);

  const randWord = () => Math.floor(Math.random() * (words.length));

  function getNextWord() {
    const rand = currentWord === words.length - 1 ? 0 : currentWord + 1;
    setCurrentWord(rand);
    const translate = (Math.random() > 0.6) ? rand : randWord();
    setCurrentTranslate(translate);
  }

  const handleWord = (good: boolean) => {
    const success = (good && currentWord === currentTranslate)
    || (!good && currentWord !== currentTranslate);

    // const target = success ? gameResult.goodWords : gameResult.badWords;
    if (success) {
      const newSerie = serie + 1;
      if (newSerie > maxSerie) setMaxSerie(newSerie);
      setSerie(newSerie);
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
      setSerie(0);
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
  };

  useEffect(() => {
    const onKeypress = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') handleWord(true);
      else if (e.key === 'ArrowRight') handleWord(false);
    };

    document.addEventListener('keydown', onKeypress);

    return () => {
      document.removeEventListener('keydown', onKeypress);
    };
  }, [goodW, badW, score, counter, currentTranslate, currentWord]);

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
            <Button variant="contained" color="success" onClick={() => handleWord(true)}>← Верно</Button>
            <button onClick={() => playWord(getFilesRoot() + words[currentWord].audio)} className="sprint-box__audio">🔊</button>
            <Button variant="contained" color="error" onClick={() => handleWord(false)}>Не верно →</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameSprint;
