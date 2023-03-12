module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint',
    'react',
    'react-hooks',
    'prettier', // eslint-plugin-prettier: ESLint 규칙에 Prettier의 규칙을 적용
  ],
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended', // eslint-config-prettier: Prettier의 설정과 충돌하는 ESLint의 규칙을 자동으로 비활성화
  ],
  rules: {
    '@typescript-eslint/no-var-requires': 'off', // require 쓰는 것을 방지
    '@typescript-eslint/explicit-function-return-type': 'off', // 함수 반환 타입 지정
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off', // any 타입사용을 방지
    'prettier/prettier': 'error', // Prettier와 충돌하는 규칙을 error
  },
};
