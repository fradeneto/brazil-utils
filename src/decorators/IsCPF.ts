import { generateValidatorDecorator } from '../utils/index';
import { isCPF } from '../validators/index';

/**
 * Check if value is a valid CPF.
 * @example ```js
 * import { validate } from 'class-validator';
 *
 * class Person {
 *   @IsCPF()
 *   cpf: string;
 *
 *   constructor(cpf: string) { this.cpf = cpf };
 * }
 *
 * const errors = await validate(new Person('366.418.768-70'))
 * errors.length === 0
 * //=> true
 *
 * const errors = await validate(new Person('36641876870'))
 * errors.length === 0
 * //=> true
 *
 * const errors = await validate(new Person('213.198.013-20'))
 * errors.length === 0
 * //=> false
 *
 * const errors = await validate(new Person('2131201872781'))
 * errors.length === 0
 * //=> false
 *
 * const errors = await validate(new Person('11111111111'))
 * errors.length === 0
 * //=> false
 * ```
 *
 * @see https://github.com/typestack/class-validator
 */
export const IsCPF = generateValidatorDecorator(
  isCPF,
  'isCPF',
  '$property must be a valid CPF',
);
