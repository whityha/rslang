import { Words } from '../../types/word';
import { getWordGroup } from '../../inc/api';

export default async function getGameWords(group = 0, page = 0, count = 10): Promise<Words> {
  try {
    const words: Words = [];
    let nowPage = page;
    do {
      // eslint-disable-next-line no-await-in-loop
      const resp = await getWordGroup(group, nowPage);
      words.push(...resp.data.slice(0, count - words.length));
      console.log(words.length, words);
      nowPage -= 1;
    } while ((words.length < count) && (nowPage > 0));
    return words;
  } catch (err) {
    return [];
  }
}
