module.exports = {
  presets: [
    ['@babel/preset-env', { useBuiltIns: 'usage', corejs: 3 }],
    '@babel/preset-typescript',
    [
      '@babel/preset-react',
      {
        runtime: 'automatic', // jest로 테스트 시 React 컴폰너트 읽기 위함.
      },
    ],
  ],
  plugins: [],
};
