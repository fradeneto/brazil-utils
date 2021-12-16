import { isCPF, CPF_PATTERN } from './isCPF';

const CPF_VALID_FORMATTED = '054.210.320-60';
const CPF_VALID_UNFORMATTED = '05421032060';
const CPF_INVALID1_FORMATTED = '154.210.320-60';
const CPF_INVALID1_UNFORMATTED = '15421032060';
const CPF_INVALID2_FORMATTED = '111.111.111-11';
const CPF_INVALID2_UNFORMATTED = '11111111111';

describe('validators/isCPF', () => {
  it('should CPF_PATTERN works for a formatted cpf', () => {
    expect(CPF_PATTERN.test(CPF_VALID_FORMATTED)).toBe(true);
    expect(CPF_PATTERN.test(CPF_INVALID1_FORMATTED)).toBe(true);
    expect(CPF_PATTERN.test(CPF_INVALID2_FORMATTED)).toBe(true);
  });
  it('should CPF_PATTERN works for a unformatted cpf', () => {
    expect(CPF_PATTERN.test(CPF_VALID_UNFORMATTED)).toBe(true);
    expect(CPF_PATTERN.test(CPF_INVALID1_UNFORMATTED)).toBe(true);
    expect(CPF_PATTERN.test(CPF_INVALID2_UNFORMATTED)).toBe(true);
  });
  it('should be a true if using a valid CPF', () => {
    expect(isCPF(CPF_VALID_FORMATTED)).toBe(true);
    expect(isCPF(CPF_VALID_UNFORMATTED)).toBe(true);
  });
  it('should be a false if using an invalid CPF', () => {
    expect(isCPF(CPF_INVALID1_FORMATTED)).toBe(false);
    expect(isCPF(CPF_INVALID1_FORMATTED)).toBe(false);
    expect(isCPF(CPF_INVALID2_FORMATTED)).toBe(false);
    expect(isCPF(CPF_INVALID2_FORMATTED)).toBe(false);
  });
});
