import { FC } from 'react';

type Props = {
  head: string
}

const TestComponent: FC<Props> = ({ head }) => {
  const test = 5;
  return (
    <h2>
      {' '}
      sad ASDASdas
      {head}
      {test}
      {5}
    </h2>
  );
};

export default TestComponent;
