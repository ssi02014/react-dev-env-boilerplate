// jest를 위한 babel config
// jest는 babel-jest를 통해 기본적으로 babel.config를 읽어들임
module.exports = {
  presets: [
    '@babel/preset-env',
    '@babel/preset-typescript',
    ['@babel/preset-react', { runtime: 'automatic' }], // jest로 테스트 시 React 컴폰너트 읽기 위함.
  ],
  plugins: [],
};
