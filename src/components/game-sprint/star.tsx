import { FC } from 'react';

const Star: FC<{n: number, stars: number}> = ({ n, stars }) => {
  const addClass = n >= stars ? 'emoji no-achieved' : 'emoji';
  return (
    <span className={addClass}>
      ⭐
    </span>
  );
};

export default Star;
