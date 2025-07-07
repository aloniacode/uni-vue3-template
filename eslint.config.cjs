module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  files: ['src/**/*.{ts,tsx,vue}'],
  extends: ['eslint:recommended', 'plugin:vue/vue3-essential', 'plugin:@typescript-eslint/recommended'],
  ignores: [
    'dist/**',
    '.vscode/**',
    '.idea/**',
    'node_modules/**',
    'src/uni_modules/**',
    'src/manifest.json',
    'src/pages.json',
    'README.md',
  ],
  plugins: ['vue', '@typescript-eslint'],
  languageOptions: {
    parser: '@typescript-eslint/parser',
    parserOptions: {
      ecmaVersion: 2020,
      sourceType: 'module',
      ecmaFeatures: {
        jsx: true,
      },
    },
  },
  rules: {
    'vue/block-order': [
      'error',
      {
        order: ['template', 'script', 'style'],
      },
    ], // 模板块顺序
    'vue/no-deprecated-html-element-is': 'off', // 允许使用is
    'vue/no-console': 'off', // 允许使用console
    '@typescript-eslint/no-explicit-any': 0, // 禁止使用any类型
    '@typescript-eslint/no-unused-vars': 'error', // 禁止未使用的变量
    '@typescript-eslint/prefer-ts-expect-error': 'off', // 允许使用 @ts-ignore
    '@typescript-eslint/no-namespace': 'off', // 允许使用namespace
  },
  globals: {
    $t: true,
    uni: true,
    UniApp: true,
    wx: true,
    WechatMiniprogram: true,
    getCurrentPages: true,
    UniHelper: true,
    Page: true,
    App: true,
    NodeJS: true,
  },
};
