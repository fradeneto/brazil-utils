const NonNumeric = /\D/g;
export const mapToNumeric = (value: string): string =>
  value.replace(NonNumeric, '');
