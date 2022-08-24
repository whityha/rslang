import { Button } from '@mui/material';
import { FC, useEffect, useState } from 'react';
import { emptyGameResult, GameProps, GameWordsResult } from '../game-common/types';
import './style.scss';

const GameSprint: FC<GameProps> = ({ words, onFinish }) => {
  const [gameResult, setGameResult] = useState<GameWordsResult>(emptyGameResult);
  const [currentWord, setCurrentWord] = useState(0);
  const [score, setScore] = useState(0);
  const [currentTranslate, setCurrentTranslate] = useState(0);

  function getNextWord() {
    const randomId = (Math.random() < 0.5)
      ? currentWord + 1
      : Math.floor(Math.random() * (words.length - 1));
    setCurrentTranslate(randomId);
  }

  function handleWord(good: boolean) {
    const success = (good && currentWord === currentTranslate)
    || (!good && currentWord !== currentTranslate);

    const target = success ? gameResult.goodWords : gameResult.badWords;
    if (success) {
      setScore(score + 1);
    }
    target.push(words[currentWord]);

    setGameResult(gameResult);
    currentWord < words.length - 1 ? setCurrentWord(currentWord + 1) : onFinish(gameResult);
    getNextWord();
  }

  useEffect(() => {
    getNextWord();
  }, []);

  return (
    <div className="game-sprint">
      <div className="sprint-wrapper">
        <div className="sprint-status">
          <div className="sprint-status__timer">Timer</div>
          <div className="sprint-status__timer">{score}</div>
        </div>
        <div className="sprint-box">
          <div className="sprint-box__stars">Stars</div>
          <div className="sprint-box__parrots">Parrots</div>
          <div className="sprint-box__word">{words[currentWord].word}</div>
          <div className="sprint-box__translate">{words[currentTranslate].wordTranslate}</div>
          <div className="sprint-box__buttons">
            <Button variant="contained" color="success" onClick={() => handleWord(true)}>Верно</Button>
            <Button variant="contained" color="error" onClick={() => handleWord(false)}>Не верно</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameSprint;
