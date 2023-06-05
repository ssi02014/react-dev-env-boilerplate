# 💻 리액트 커스텀 개발 환경 보일러 플레이트
- 해당 저장소는 `리액트 커스텀 개발 환경 보일러 플레이트 저장소`로서, react, webpack, babel, eslint 등 리액트 프로젝트를 진행 할 때 기본적으로 셋팅해야되는 개발 환경을 구축한 저장소입니다.
- 기본적으로 react v18, webpack v5, esbuild-loader v3 등 `2023년 6월 기준` 최신 버전으로 구축되어 있습니다.
- README 문서 하단에는 참고 내용이라던가 개인적으로 더 추가하면 좋은 로더/플러그인 내용도 있으니 참고하면 좋을 것 같습니다.
- 해당 저장소가 도움이 됐다면 **Star ⭐️** 도 눌러주시면 감사드립니다. 또한, 개선 할 내용이 있다면 issue 또는 Pull Request도 등록해주시면 감사드립니다.

<br />

## 📗 사용 절차
### 1. Repo Clone
```
git clone https://github.com/ssi02014/react-dev-env-boilerplate.git
```

<br />

### 2. Branch & Checkout & Pull
- 해당 레포는 다양한 환경에 맞춰 브랜치가 구성되어 있다. 기호에 맞게 참고 or 사용하면 된다.
- 만약, `esbuild-loader` 브랜치 코드를 확인하려면 아래의 절차를 진행한다.

```
git branch esbuild-loader

git checkout -m esbuild-loader 

git pull origin esbuild-loader
```

<br />

### 3. 패키지 설치
- 해당 레포는 `yarn` 패키지 매니저를 기반으로 패키지를 관리하고 있다. 따라서 yarn으로 패키지를 설치하자.

```
yarn
or
yarn install
```

<br />

## 👨🏻‍💻 master Branch
- 가장 기본적인 react, babel, typescript, eslint, prettier, jest, React Testing Library 셋팅 브랜치

<br />

**셋팅 목록**
- react v18
- typeScript
- webpack v5
- **babel**
- eslint
- prettier
- **jest**
- **react testing library**

<br />

## 👨🏻‍💻 esbuild-loader Branch
- master Branch 셋팅에서 babel-loader대신 `esbuild-loader`를 적용해서 빌드 타임을 감소시킨 브랜치

<br />

**셋팅 목록**
- react v18
- typeScript
- webpack v5
- **esbuild-loader**
- eslint
- prettier

<br />

## 👨🏻‍💻 esbuild-jest Branch
- esbuild-loader Branch 셋팅에서 `jest`, `react testing library` 테스트 환경 추가 브랜치
- 테스트 환경을 위해 `@babel/preset-typescript`, `@babel/preset-env`, `@babel/preset-react` 및 babel 추가 셋팅

<br />

**셋팅 목록**
- react v18
- typeScript
- webpack v5
- esbuild-loader
- eslint
- prettier
- **jest**
- **react testing library**
  - jest를 위한 babel 일부 적용

<br />

## 🚀 그 외 보일러 플레이트 저장소
### React 차세대 개발 툴 적용 보일러 플레이트 저장소
- [react-vite-berry-boilerplate](https://github.com/ssi02014/react-vite-berry-boilerplate)
- React, TypeScript, Vite, Yarn Berry로 구성한 리액트 프로젝트 보일러 플레이트 저장소
- `Vite`를 이용한 리액트(+타입스크립트) 프로젝트 구성
- Yarn Berry의 `Plug’n’Play(PnP)`와 `Zero-Install` 적용

<br />
<hr />

## 🙋🏻 참고 문서
### 📄 1. esbuild-loader?
- esbuild-loader는 `멀티 스레드 기반`으로 동작하는 Go언어로 작성된 로더이다. 그래서 싱글 스레드 기반인 자바스크립트로 만들어진 babel보다 언어가 동작하는 본질적인 차이때문에 퍼포먼스 측면에서 차이가 크다.
- [kakao esbuild-loader 문서](https://fe-developers.kakaoent.com/2022/220707-webpack-esbuild-loader/)

<br />

**기존 babel-loader 빌드 타임**

<br />

<img width="895" alt="스크린샷 2023-03-12 오후 4 58 35" src="https://user-images.githubusercontent.com/64779472/224532396-fadcf15b-e561-4791-b7b8-d2175aea9b31.png">

<br />

**esbuild-loader 도입 후 빌드 타임**

<br />

<img width="690" alt="스크린샷 2023-03-12 오후 4 55 08" src="https://user-images.githubusercontent.com/64779472/224532394-d49742c1-8151-433c-b2c2-051b3def0578.png">

<br />

### 📄 2. @svgr/webpack
- @svgr/webpack 패키지는 svg를 리액트 컴포넌트 형식으로 사용할 수 있게 변환해주는 웹팩 모듈이다.
- https://react-svgr.com/

<br />

**예제**
```jsx
import Star from './star.svg'

const Example = () => (
  <div>
    <Star />
  </div>
)
```
- @svgr/webpack를 적용하면 위 예제처럼 svg를 import해서 컴포넌트로 형식으로 사용할 수 있다.

<br />

### 📄 3. Font Preload?
- Create React App(CRA)로 만든 프로젝트는 font를 preload하려면 `craco`와 같은 라이브러리를 활용해서 `preload-webpack-plugin`, `webpack-font-preload-plugin`을 적용했어야 했다.
  - TMI: preload-webpack-plugin는 webpack5부터 호환되지 않아서 webpack-font-preload-plugin를 사용해야 함
- 하지만, 해당 보일러 플레이트는 `html-loader`가 적용되어 있기 때문에 preload를 위한 플러그인을 설치하지 않아도 된다.
  - CRA는 html-loader가 적용되어있지 않고, html-webpack-plugin 만 적용되어 있어서 이런 차이가 있음.
  - 자세한 내용은 [블로그: 커스텀 웹팩 환경에서 font preload하면서 겪은 문제 고찰](https://blog.naver.com/ssi02014/223079553571) 참고
- 실제 적용 방법은 폰트 파일들이 `src/assets/fonts` 경로에 있다고 가정하고, `index.html`파일을 아래처럼 작성하면 된다.
```html
<head>
  <!-- head -->
  <link
    rel="preload"
    href="/src/assets/fonts/Pretendard-Medium.subset.woff"
    as="font"
    type="font/woff"
    crossorigin
  />
</head>
```
- 현재 상태에서 `build` 해보고 확인해보면 제대로된 경로로 파일을 가져오는 것을 확인할 수 있다.

![스크린샷_2023-04-19_오후_7 33 26](https://user-images.githubusercontent.com/64779472/235470848-ff150182-1979-4b32-9c19-c0611c751292.png)


<br />

## 👍 그 외 추가하면 좋은 로더 및 플러그인
### ⭐️ 1. SASS(SCSS)
- Sass는 Syntactically Awesome Style Sheets의 약자로, CSS의 확장된 문법을 제공하는 CSS 전처리기(preprocessor)다.
- Sass는 빌드 시에 CSS 파일로 컴파일되야 한다. 따라서, webpack에서 Sass 파일을 읽고, CSS 파일로 컴파일하여 번들링하려면 sass-loader를 추가해야 합니다.

<br />

**패키지 설치**
```
yarn add -D sass sass-loader
```

<br />

**webpack 셋팅**
- `[MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']` 와 같이 배열을 넣었는데 여기서 순서가 중요하다.
- 이는 배열 마지막 요소부터 로더가 적용되기 때문인데, sass-loader를 통해서 먼저 sass파일을 css로 컴파일 한 후, css-loader가 컴파일 된 css 파일을 모듈로 읽어들인 다음, MiniCssExtractPlugin.loader 가 별도의 파일로 추출된 css 파일을 로드하기 때문이다.
- 배열 순서를 정확하게 작성하지 로더가 정상적으로 작동하지 않아 에러가 발생할 수 있으니..😱 순서를 꼭 맞춰주자!
```js
module.exports = {
  module: {
    rules: [
      // ...webpack rules
      {
        test: /\.(sa|sc|c)ss$/i, // scss, sass, css 파일 매칭
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'], // sass-loader 추가
      },
    ]
  }
}
```

<br />

**scss파일 생성 후 적용**
```scss
// style.scss
body {
  font-family: Pretendard;
  background-color: rgb(192, 249, 230);
}
```
```js
// App.tsx
import './style.scss';
import './style2.css';

function App() { 
  // ...
}

export default App;
```

<br />

### ⭐️ 2. webpack-bundle-analyzer
![스크린샷_2022-06-04_오후_11 39 30](https://github.com/ssi02014/react-dev-env-boilerplate/assets/64779472/265954b6-160b-4796-9f00-3697f3acc9cc)

- webpack-bundle-analyzer는 webpack 번들링 결과를 시각화하여 번들링 크기를 확인할 수 있도록 도와주는 도구다.
- webpack-bundle-analyzer는 webpack으로 번들링된 결과물을 시각적으로 파악하여 번들링 크기를 줄이는 데 도움을 줄 수 있다.
- [webpack-bundle-analyzer](https://www.npmjs.com/package/webpack-bundle-analyzer)

<br />

**패키지 설치**
```
yarn add -D webpack-bundle-analyzer
```

<br />

**webpack 셋팅**
```js
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  plugins: [
    // webpack plugins...

    new BundleAnalyzerPlugin({
      analyzerMode: "static", // 분석 파일 html을 build폴더에 저장
      reportFilename: 'bundle-report.html', // 분석 파일 보고서 이름(자유롭게 지정)
      openAnalyzer: false, // 분석 파일을 실행 시 자동으로 열지 않는다.
      generateStatsFile: true, // 분석 파일을 json으로 저장한다.
      statsFilename: "bundle-report.json", // 분석 파일 json 파일 이름 (자유롭게 지정)
    })
  ]
}
```

<br />

**package.json 셋팅**
```json
{
  // ...
  "scripts": {
    // ...
    "preanalyze": "yarn build:prod",
    "analyze": "webpack-bundle-analyzer ./build/bundle-report.json --default-sizes gzip",
  }
}
```

<br />

**yarn analyze 실행**
- yarn analyze 실행 시 빌드 후 분석 진행
```
yarn analyze
```