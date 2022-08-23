const fabStyles = (activeBook: number, bookId: number, color: string): {} => ({
  color: '#ffffff',
  fontSize: activeBook === bookId ? 24 : 16,
  fontWeight: activeBook === bookId ? 700 : 500,
  bgcolor: color,
  transition: 'all 0.2s linear',
  '&:hover': {
    bgcolor: color,
    transform: 'scale(1.1)',
  },
});

export default fabStyles;
