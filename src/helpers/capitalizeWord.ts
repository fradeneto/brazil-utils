/**
 * Capitalizes a word.
 * @param word - A `string` (word) to be capitalized.
 */
export const capitalizeWord = (word: string): string =>
  word.charAt(0).toLocaleUpperCase() + word.substr(1).toLocaleLowerCase();
