import { TTeammate } from './type';

const imageIgar = require('../../assets/photos/havalin.jfif');
const imageKhapaliuk = require('../../assets/photos/khapaliuk.jpg');
const imageKoryakin = require('../../assets/photos/koryakin.jfif');

const TEAMMATE_INFO: TTeammate[] = [
  {
    name: 'Ihar Havalin',
    photoSrc: imageIgar,
    description: 'Do all',
    role: 'Frontend Developer. Team Lead.',
    ghLink: 'https://github.com/memos77',
  },
  {
    name: 'Pavel Khapaliuk',
    photoSrc: imageKhapaliuk,
    description: 'Do any thing',
    role: 'Frontend Developer',
    ghLink: 'https://github.com/whityha/',
  },
  {
    name: 'Pavel Koryakin',
    photoSrc: imageKoryakin,
    description: 'Do any thing',
    role: 'Frontend Developer',
    ghLink: 'https://github.com/unclekoin',
  },
];

export default TEAMMATE_INFO;
