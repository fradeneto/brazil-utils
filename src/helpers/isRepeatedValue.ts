export const isRepeatedArray = <T>(items: Array<T>): boolean => {
  if (!Array.isArray(items)) {
    throw new Error('items is not an array');
  }
  if (items.length <= 1) {
    return false;
  }
  return items.every((item) => items[0] === item);
};
