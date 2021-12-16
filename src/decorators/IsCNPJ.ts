import { generateValidatorDecorator } from '../utils/index';
import { isCNPJ } from '../validators/index';
/**
 * Check if value is a valid CNPJ.
 * @example ```js
 * import { validate } from 'class-validator';
 *
 * class Company {
 *   @IsCNPJ()
 *   cnpj: string;
 *
 *   constructor(cnpj: string) { this.cnpj = cnpj };
 * }
 *
 * const errors = await validate(new Company('41142260000189'))
 * errors.length === 0
 * //=> true
 *
 * const errors = await validate(new Company('45.723.174/0001-10'))
 * errors.length === 0
 * //=> true
 *
 * const errors = await validate(new Company('411407182'))
 * errors.length === 0
 * //=> false
 *
 * const errors = await validate(new Company('11.111.111/1111-11'))
 * errors.length === 0
 * //=> false
 * ```
 *
 * @see https://github.com/typestack/class-validator
 */
export const IsCNPJ = generateValidatorDecorator(
  isCNPJ,
  'isCNPJ',
  '$property must be a valid CNPJ',
);
