const getTitle = (pathname: string): string => {
  switch (pathname) {
    case '/':
      return 'Главная';
    case '/textbook':
      return 'Учебник';
    case '/dictionary':
      return 'Список слов';
    case '/games':
      return 'Игры';
    case '/games/sprint':
      return ' Спринт';
    case '/games/call':
      return 'Вызов';
    case '/stat':
      return 'Статистика';
    case '/team':
      return 'Наша команда';
    case '/reg':
      return 'Регистрация';
    default:
      return '';
  }
};

export default getTitle;
