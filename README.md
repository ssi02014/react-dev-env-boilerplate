# 💻 리액트 커스텀 셋팅 보일러 플레이트
### React18 + TypeScript + Webpack5 + Babel + Eslint + prettier 호환 환경 셋팅 보일러 플레이트

<br />

## 👀 기본적인 Webpack, Babel, ESLint 참고 저장소
- [프론트엔드 개발환경 이해](https://github.com/ssi02014/front_development_environment)

<br />

## 👀 그외 참고 사항 1. 빌드 파일 웹서버 실행
### serve
```
yarn add -D serve
```
```json
{
  "scripts": {
    "start:build": "serve -s build -l 8080",
  }
}
```
- `serve`는 프론트 개발을 하다보면 간단하게 웹서버 위에 실행시킬 때 사용하는 라이브러리이다.
- webpack-dev-server를 통해 개발 서버는 확인할 수 있지만 빌드된 파일을 실행시킬 때는 사용할 수 없기에 별도의 serve 라이브러리를 설치했다.
- package.json에다 다음과 같은 속성을 주면 빌드된 파일을 웹서버로 실행시킬 수 있다.

<br />

## 👀 그외 참고 사항 2. webpack
###  webpack-merge
- [Wepback 공식 사이트 - Webpack Merge](https://joshua1988.github.io/webpack-guide/advanced/webpack-merge.html)
- webpack merge는 단어 그대로 여러 개의 웹팩 설정 파일을 하나로 병합해주는 라이브러리이다.
- 일반적으로 웹 애플리케이션을 제작할 때는 웹팩 설정 개발(development)와 배포(production)용으로 나누어서 적용한다.
- 사실 조건무능로 설정을 구분할 수는 있지만 실제로 파일을 아예 나눠놓는게 권장되는 방식이다.

```
yarn add -D webpack-merge
```
```js
// webpack.dev.js
const { merge } = require('webpack-merge');
const webpack = require('webpack');
const common = require('./webpack.common.js');

require('dotenv').config({ path: './.env.development' });

module.exports = merge(common, {
  mode: 'development',
  devtool: 'source-map',
  devServer: {
    // ...
  },
  plugins: [
    new webpack.EnvironmentPlugin({
      ...process.env,
    }),
  ],
});

```

### 절대 경로
- webpack에서 `resolve`는 모듈 해석에 대한 설정으로 특정 모듈을 호출할 때 모듈을 찾는 위치를 변경할 수 있다.
- `alias`를 이용해 별칭을 추가해줌으로써 상대 경로를 절대 경로로 설정해 줄 수 있다.
- `extensions`는 옵션 내에 배열로 확장자를 선언하면 확장자를 왼쪽부터 순서대로 해석한다. 여러 파일에서 이름이 동일하지만 다른 확장자를 가질 경우 webpack은 배열의 앞에서부터 파일을 해석하고 남은 것은 해석하지 않는다.

```js
module.exports = {
  // ...
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
    alias: {
      '@components': path.resolve(__dirname, 'src/components/'),
      '@pages': path.resolve(__dirname, 'src/pages/'),
    },
  },
}
```

- Typescript에서는 참고로 `tsconfig.json`도 수정해주어야 한다.
```json
{
  "compilerOptions": {
    "baseUrl": "./",
    // ...
  },
  "include": [
    "src"
  ],
  "extends": "./tsconfig.paths.json"
}
```
- baseUrl에는 `./` extends에는 `tsconfig.paths.json`을 추가했다.

```json
{
  "compilerOptions": {
    "paths": { 
      "@pages/*": ["src/pages/*"],
      "@components/*": [ "src/components/*"],
    },
  }
}
```

- `tsconfig.paths.json`의 내용은 다음과 같다.

<br />

### ForkTsCheckerWebpackPlugin 플러그인
- webpack.common.js에 plugins을 보면 ForkTsCheckerWebpackPlugin이 추가된 것을 확인할 수 있다.
- ForkTsCheckerWebpackPlugin 간단하게 말하면 빌드 시 타입스크립트의 타입 체크 속도를 빨리 해주는 플러그인이다.

```js
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

module.exports = {
  // ...
  module: {
    // ...
  },
  plugins: [
    // ...
    new ForkTsCheckerWebpackPlugin({
      async: false,
    }),
  ],
};
```

<br />

## 👀 그외 참고 사항 3. babel
```js
// babel.config.js
module.exports = {
  presets: [
    '@babel/preset-env',
    '@babel/preset-typescript',
    '@babel/preset-react',
  ],
  plugins: [],
};
```
### @babel/preset-typescript
- `@babel/preset-typescript`은 Typescript를 사용하는 경우 사전에 추가해주면 좋다. 이 플러그인은 TypeScript를 JavaScript로 변환해주는 플러그인이 내장되어 있다.

<br />

### @babel/preset-react
- `@babel/preset-react`는 JSX로 작성된 코드들을 createElement 함수를 이용한 코드로 변환해 주는 바벨 플러그인이다.


<br />

## 👀 그외 참고 사항 4. eslint
```js
module.exports = {
  // .eslintrc.js
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'react', 'react-hooks'],
  extends: [
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ],
  rules: {
    // rules
  },
};
```
### @typescript-eslint
- [typescript-eslint](https://github.com/typescript-eslint/typescript-eslint)는 ESLint의 TypeScript를 지원하기 위한 패키지의 MonoRepository
- `@typescript-eslint/parser`는 `typescript-estree`를 활용한 타입스크립트용 ESLint 파서이다. 참고로 `typescript-estree`는 ESTree(자바스크립트 AST스펙) 호환 AST를 생성하는 타입스크립트 파서이다.
- `@typescript-eslint/eslint-plugin`는 Typescript 관련 linting 규칙을 처리하는 플러그인이다.

<br />

### eslint-plugin-react
- `eslint-plugin-react`는 리액트와 관련된 규칙을 정의한 패키지이다.

<br />

### eslint-plugin-react-hooks
- `eslint-plugin-react-hooks`는 React 내의 훅에 대한 규칙이있다. 최상위에서만 Hook을 호출해야만 하고, 오직 React에서만 Hook을 호출해줘야하는데 이러한 규칙을 강제해주는 ESLint 플러그인이다.

<br />
