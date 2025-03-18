export default {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'prettier'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier', // 确保 Prettier 规则生效
  ],
  rules: {
    'prettier/prettier': 'error', // 报告 Prettier 格式问题
    '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }], // 忽略未使用的 `_` 变量
    '@typescript-eslint/explicit-module-boundary-types': 'off', // 允许隐式返回类型
    '@typescript-eslint/no-explicit-any': 'warn', // 避免滥用 `any`
  },
};
