# 💻 리액트 개발환경 셋팅 보일러 플레이트

<br />

## 📗 절차
### 1. Repo Clone
```
git clone https://github.com/ssi02014/react-dev-env-boilarplate.git
```

<br />

### 2. Branch & Checkout & Pull
- 해당 레포는 `master` 브랜치와 `esbuild-loader` 브랜치로 나뉘어져있다. (각각 구성한 셋팅은 아래 참고)
- 따라서, esbuild-loader 브랜치 코드를 확인하려면 아래의 절차를 진행한다.

```
git branch esbuild-loader
git checkout esbuild-loader
git pull origin esbuild-loader
```

<br />

### 3. 패키지 설치
- 해당 레포는 yarn 패키지 매니저를 기반으로 패키지를 관리하고 있다. 따라서 yarn으로 패키지를 설치하자.

```
yarn
or
yarn install
```

<br />

## 👨🏻‍💻 master Branch
**최근 업데이트 (2023.03.13)**
- react v18
- TypeScript
- webpack v5
- Babel
- eslint
- prettier

<br />

## 👨🏻‍💻 esbuild-loader Branch
**최근 업데이트 (2023.03.13)**
- react v18
- typeScript
- webpack v5
- **esbuild-loader**
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