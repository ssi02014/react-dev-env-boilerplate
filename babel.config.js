// jest를 위한 babel config
module.exports = {
  presets: [
    '@babel/preset-env',
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
