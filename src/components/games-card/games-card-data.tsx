import { GamesInfoProps } from '../game-common/types';

const gamesCardData: Array<GamesInfoProps> = [
  {
    title: 'Спринт',
    description: 'Тренирует навык быстрого перевода с английского языка на русский. Выбирайте соответствует ли перевод предложенному слову и получайте очки,при правильном ответе. Для того, чтобы слово стало изученым вам необходимо угадать его хоть раз и при этом ни разу не выбрать ошибочный ответ для его перевода. Поспешите! У вас есть только 60 секунд, чтобы перебрать все слова!',
    path: 'sprint',
    wordsCount: 12,
  },
  {
    title: 'Вызов',
    description: 'Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться. Lorem Ipsum используют потому, что тот обеспечивает более или менее стандартное заполнение шаблона.',
    path: 'call',
    wordsCount: 10,
  },
];

export default gamesCardData;
