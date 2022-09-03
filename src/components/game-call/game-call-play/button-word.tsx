const ButtonWord = ({
  handleButton, translate, color,
} :
    {
        handleButton: () => void,
        translate: string,
        color: string,
    }) => (
      <button
        style={{
          color: '#FFF',
          backgroundColor: color,
          padding: '1em',
          borderRadius: '100px',
        }}
        onClick={handleButton}
      >
        {translate.toUpperCase()}
      </button>
);
export default ButtonWord;
