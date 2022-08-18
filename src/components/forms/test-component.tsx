import { FC } from 'react';

type Props = {
  head: string
}

const TestComponent: FC<Props> = ({ head }) => {
  const test = 5;
  return (
    <>
      {head}
      {test}
    </>
  );
};

export default TestComponent;
