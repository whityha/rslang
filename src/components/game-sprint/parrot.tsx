import { FC } from 'react';

const Parrot: FC<{n: number, parrots: number}> = ({ n, parrots }) => {
  const birds = ['🐥', '🐦', '🐧', '🐤'];
  const addClass = n >= parrots ? 'emoji no-achieved' : 'emoji';
  return (
    <span className={addClass}>
      {birds[n]}
    </span>
  );
};

export default Parrot;
