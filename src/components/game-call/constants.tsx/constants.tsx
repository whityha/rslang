const GROUP_MENU_NAMES = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2', 'Сложные'];
export const START_PAGE = 'menu';
export const TRANSLATE_VARIANTS = 3;
export const createRandomNumberArray = (length: number, [min, max]: number[]): Array<number> => {
  const randomNumber = (minimum: number, maximum: number):
    number => Math.round(Math.random() * (maximum - minimum) + minimum);

  const current: number[] = [];

  const uniqNumber = (minimum: number, maximum: number): number => {
    const random = randomNumber(minimum, maximum);
    if (!current.includes(random)) {
      current.push(random);
      return random;
    }
    return uniqNumber(minimum, maximum);
  };

  if (min > max) throw new Error('Max must be bigger then min');
  if (length > (max - min + 1)) throw new Error('We can\'t do this Array. Do count more');

  return Array(length).fill(0).map((_) => uniqNumber(min, max));
};

export default GROUP_MENU_NAMES;
