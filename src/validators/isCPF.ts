import { generateCheckSums } from '../helpers/generateCheckSums';
import { getRemaining } from '../helpers/getRemainig';
import { isRepeatedArray } from '../helpers/isRepeatedValue';
import { mapToNumbers } from '../helpers/mapToNumbers';

export const CPF_PATTERN = /^(\d{11}|\d{3}\.\d{3}\.\d{3}\-\d{2})$/;

export const isCPF = (value: string): boolean => {
  if (!CPF_PATTERN.test(value)) return false;
  const numbers = mapToNumbers(value);
  if (isRepeatedArray(numbers)) return false;
  const validators = [11, 10, 9, 8, 7, 6, 5, 4, 3, 2];
  const checkers = generateCheckSums(numbers, validators);
  return (
    numbers[9] === getRemaining(checkers[0]) &&
    numbers[10] === getRemaining(checkers[1])
  );
};
