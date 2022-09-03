import QueryStatsSharpIcon from '@mui/icons-material/QueryStatsSharp';
import CasinoOutlinedIcon from '@mui/icons-material/CasinoOutlined';
import AutoStoriesOutlinedIcon from '@mui/icons-material/AutoStoriesOutlined';

const style = {
  fontSize: '4em',
  margin: '0em 0em 0.4em 0em',
};

export type TCrossCheckData = {
  title: string;
  listItems: Array<string>;
}

const Cards = [
  {
    icon: <QueryStatsSharpIcon sx={style} />,
    title: 'Статистика',
    description: 'Для каждого пользователя ведется отдельная статистика прогресса изучения слов и статистика игр',
    path: '/stat',
  },
  {
    icon: <CasinoOutlinedIcon sx={style} />,
    title: 'Игры',
    description: 'Изучайте слова с помощью игр. Совмещайте приятное с полезным!',
    path: '/games',
  },
  {
    icon: <AutoStoriesOutlinedIcon sx={style} />,
    title: 'Учебник',
    description: 'Более 3500 слов с примерами употребления, переводом, транскрипцией и произношением',
    path: '/textbook',
  },
];

export const crossCheckData: Array<TCrossCheckData> = [
  {
    title: 'Авторизация',
    listItems: [
      'реализована авторизация и регистрация пользователя',
      'электронный учебник (без раздела "Сложные слова", без отображения прогресса изучения слов и изученных слов) и мини-игры доступны без авторизации',
      'у авторизованных пользователей отображается раздел "Сложные слова" прогресс изучения слов, изученные слова и статистика',
    ],
  },
  {
    title: 'Электронный учебник',
    listItems: [
      'электронный учебник генерируется на основе коллекции исходных данных и состоит из шести разделов, в каждом разделе 30 страниц, на каждой странице 20 слов для изучения',
      'седьмой раздел учебника - "Сложные слова" (доступный только авторизированным пользователям) изначально пустой. Этот раздел состоит из слов, которые пользователь отметил как сложные. Все слова в этом разделе размещаются на одной странице. На усмотрение разработчиков, слова в данный раздел добавляются либо в том порядке, в котором пользователь отмечал их как сложные, либо в порядке, в котором они находились в учебнике.',
    ],
  },
  {
    title: 'Мини-игры "Аудиовызов" и "Спринт"',
    listItems: [
      'любой пользователь может сыграть в любую из игр',
      'по окончанию каждой игры выводятся результаты мини-игры',
      'если мини-игра запускается из меню, в ней можно выбрать один из шести уровней сложности, которые отличаются тем, слова какого из шести разделов коллекции исходных данных в ней задействованы',
      'если мини-игра запускается со страницы учебника, в ней используются новые слова из той страницы учебника, на которой размещена ссылка на игру. Если размещённых на странице слов для игры недостаточно, задействуются слова с предыдущих страниц. Если предыдущих страниц нет или недостаточно, игра завершается досрочно, когда закончатся все доступные слова',
    ],
  },
  {
    title: 'Изученные слова',
    listItems: [
      'изученные слова, это слова, которые пользователь отметил как изученные на странице учебника',
      'также слова считаются изученными по результатам их угадывания в мини-играх',
      'если сложное слово стало изученным, оно перестаёт быть сложными и удаляется из раздела "Сложные слова"',
      'изученные слова не задействуются в мини-играх, которые запускаются на страницах учебника, но задействуются в мини-играх, которые открываются по ссылке в меню',
      'если при угадывании изученного слова в мини-игре пользователь ошибся, слово удаляется из категории изученных',
    ],
  },
  {
    title: 'Страница статистики',
    listItems: [
      'на странице статистики отображается краткосрочная статистика по мини-играм и по словам за каждый день изучения',
    ],
  },
  {
    title: 'Дополнительный функционал',
    listItems: [
      'долгосрочная статистика за весь период изучения в которой представлены два графика, для наглядного отслеживания прогресса обучения',
    ],
  },
  {
    title: 'Прогресс изучения',
    listItems: [
      'новые слова - это слова, которые впервые использовались в мини-играх вне зависимости от того, открывались мини-игры на странице учебника или по ссылке в меню',
      'возле каждого слова, которое использовалось в мини-играх, на странице учебника указывается прогресс его изучения за весь период: сколько раз слово было правильно угадано в мини-играх и сколько неправильно',
    ],
  },
];

export default Cards;
