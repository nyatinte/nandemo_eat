export const requiredMessage = (fieldName: string) =>
  `${fieldName}は必須です。`;

export const invalidMessage = (fieldName: string) =>
  `${fieldName}は不正な値です。`;

export const minArrayLengthMessage = (fieldName: string, min: number) =>
  `${fieldName}は${min}個以上選択してください。`;

export const maxArrayLengthMessage = (fieldName: string, max: number) =>
  `${fieldName}は${max}個以下選択してください。`;
