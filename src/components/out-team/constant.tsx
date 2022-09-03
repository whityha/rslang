import { TTeammate } from './type';

const imageIgar = require('../../assets/photos/havalin.jfif');
const imageKhapaliuk = require('../../assets/photos/khapaliuk.jpg');
const imageKoryakin = require('../../assets/photos/koryakin.jfif');

const TEAMMATE_INFO: TTeammate[] = [
  {
    name: 'Павел Корякин',
    photoSrc: imageKoryakin,
    description: 'Общий дизайн сайта, адаптивность, меню, учебник, раздел сложных слов.',
    role: 'Frontend Developer',
    ghLink: 'https://github.com/unclekoin',
  },
  {
    name: 'Павел Хапалюк',
    photoSrc: imageKhapaliuk,
    description: 'Игры "Вызов" и "Писатель", дизайн главной и других элементов.',
    role: 'Frontend Developer',
    ghLink: 'https://github.com/whityha/',
  },
  {
    name: 'Игорь Головин',
    photoSrc: imageIgar,
    description: 'Авторизация, игра "Спринт", общий функционал для игр и приложения.',
    role: 'Frontend Developer. Team Lead.',
    ghLink: 'https://github.com/memos77',
  },

];

export default TEAMMATE_INFO;
