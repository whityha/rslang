const fabStyles = (activeBook: number, bookId: number, color: string): {} => ({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  color: '#ffffff',
  fontSize: activeBook === bookId ? 24 : 16,
  fontWeight: activeBook === bookId ? 700 : 500,
  bgcolor: color,
  transition: 'all 0.1s linear',
  '&:hover': {
    bgcolor: color,
    transform: 'scale(1.1) translate(-50%, -50%)',
  },
});

export default fabStyles;
