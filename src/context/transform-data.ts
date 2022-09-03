import { AggWord } from '../inc/api';

const transformData = (data: AggWord): AggWord => ({
  id: data._id!,
  group: data.group,
  page: data.page,
  word: data.word,
  image: data.image,
  audio: data.audio,
  audioMeaning: data.audioMeaning,
  audioExample: data.audioExample,
  textMeaning: data.textMeaning,
  textExample: data.textExample,
  transcription: data.transcription,
  wordTranslate: data.wordTranslate,
  textMeaningTranslate: data.textMeaningTranslate,
  textExampleTranslate: data.textExampleTranslate,
  userWord: data.userWord,
});

export default transformData;
