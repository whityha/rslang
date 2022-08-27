import { useEffect, useState } from 'react';
import theme from '../../../theme/theme';

const ButtonWord = ({ handleButton, translate, currentTranslate } :
    {
        handleButton: () => void,
        translate: string,
        currentTranslate: string,
    }) => {
  const [color, setColor] = useState<string>('');

  const changeColor = (colors: string) => {
    colors === theme.palette.primary.main
      ? setColor(theme.palette.primary.main)
      : setColor(colors);
  };

  useEffect(() => {
    changeColor(theme.palette.primary.main);
  }, [currentTranslate]);

  return (
    <button
      style={{
        color: '#FFF',
        backgroundColor: color,
        padding: '1em',
        borderRadius: '100px',
      }}
      onClick={() => {
        setTimeout(handleButton, 300);
        if (translate === currentTranslate) changeColor(theme.palette.success.main);
        if (translate !== currentTranslate) changeColor(theme.palette.error.main);
      }}
    >
      {translate.toUpperCase()}
    </button>
  );
};
export default ButtonWord;
