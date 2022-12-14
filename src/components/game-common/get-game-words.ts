import { Words } from '../../types/word';
import { getWordGroup } from '../../inc/api';

export default async function getGameWords(
  group = 0,
  page = 0,
  count = 10,
  preparedWords: Words = [],
): Promise<Words> {
  try {
    const words: Words = preparedWords;
    count -= words.length;
    let nowPage = page;
    do {
      // eslint-disable-next-line no-await-in-loop
      const resp = await getWordGroup(group, nowPage);
      const serverWords = resp.data.sort(() => ((Math.random() > 0.5) ? 1 : -1));
      words.push(...serverWords.slice(0, count - words.length));
      nowPage -= 1;
    } while ((words.length < count) && (nowPage >= 0));
    return words;
  } catch (err) {
    return [];
  }
}
