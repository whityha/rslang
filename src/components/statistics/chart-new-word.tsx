import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { FC } from 'react';
import {
  Box,
} from '@mui/material';

import { StatOptional } from '../game-common/save-game-stat';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'Графики',
    },
  },
};

type Props = {
  stat: StatOptional
}

const ChartNewWords: FC<Props> = ({ stat }) => {
  const labels: Array<string> = [];
  const newWords: Array<number> = [];
  const learnedWords: Array<number> = [];
  let lastLearnedWord = 0;

  Object.keys(stat).forEach((day) => {
    labels.push(day);
    newWords.push(stat[day].new);
    lastLearnedWord += stat[day].good;
    learnedWords.push(lastLearnedWord);
  });

  const data = {
    labels,
    datasets: [
      {
        label: 'Новые слова за день',
        data: newWords,
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: 'Изученые слова за весь период',
        data: learnedWords,
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  };

  return (
    <Box sx={{ width: '90%' }}>
      <Line options={options} data={data} />
    </Box>
  );
};

export default ChartNewWords;
