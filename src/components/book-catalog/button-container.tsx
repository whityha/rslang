import { FC, ReactNode } from 'react';

interface ButtonContainerProps {
  children: ReactNode;
}

const ButtonContainer: FC<ButtonContainerProps> = ({ children }) => (
  <div style={{ position: 'relative', width: '55px', height: '55px' }}>
    { children }
  </div>
);

export default ButtonContainer;
