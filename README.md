# 💻 리액트 개발환경 셋팅 보일러 플레이트

<br />

## Repo Clone
```
git clone https://github.com/ssi02014/React_Development_Environment_Boilerplate.git
```

<br />

## master Branch
### 👨🏻‍💻 최근 업데이트 (2023.03.12) 
- React18
- TypeScript
- Webpack5
- Babel
- eslint
- prettier

<br />

## esbuild-loader Branch
### 👨🏻‍💻 최근 업데이트 (2023.03.12) 
- React18
- TypeScript
- Webpack5
- **Babel -> esbuild-loader**
- eslint
- prettier

<br />

### 왜 esbuild-loader?
- esbuild-loader는 멀티 스레드 기반으로 동작하는 Go언어로 작성된 로더이다. 그래서 싱글 스레드 기반인 자바스크립트로 만들어진 babel보다 언어가 동작하는 본질적인 차이때문에 퍼포먼스 측면에서 차이가 크다.
- [kakao esbuild-loader 문서](https://fe-developers.kakaoent.com/2022/220707-webpack-esbuild-loader/)

<br />

**기존 babel-loader 빌드 타임**
<img width="895" alt="스크린샷 2023-03-12 오후 4 58 35" src="https://user-images.githubusercontent.com/64779472/224532396-fadcf15b-e561-4791-b7b8-d2175aea9b31.png">

<br />

**esbuild-loader 도입 후 빌드 타임**
<img width="690" alt="스크린샷 2023-03-12 오후 4 55 08" src="https://user-images.githubusercontent.com/64779472/224532394-d49742c1-8151-433c-b2c2-051b3def0578.png">

<br />