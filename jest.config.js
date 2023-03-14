module.exports = {
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
  testEnvironment: 'jsdom',
  testMatch: [
    '<rootDir>/src/**/__tests__/**/*.{js,jsx,ts,tsx}',
    '<rootDir>/src/**/*.{spec,test}.{js,jsx,ts,tsx}',
  ],
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy', // import 문으로 불러온 CSS 모듈에 대한 Mock 생성
    '.+\\.svg?.+$': '<rootDir>/__mocks__/svgMock.js', // svg에 대한 Mock 생성
    '\\.(jpg|ico|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/__mocks__/fileMock.js', // jpg, jpeg, webp, woff 등등 Mock 생성
    '^@(components|assets)(.*)$': '<rootDir>/src/$1$2', // jest가 alias 경로 알아먹을 수 있게 적용
  },
};
