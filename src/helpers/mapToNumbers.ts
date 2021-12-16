import { mapToNumeric } from './mapToNumeric';

export const mapToNumbers = (value: string): Array<number> =>
  mapToNumeric(value).split('').map(Number);
