import React, { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

import './style.css';
import { Link } from 'react-router-dom';

const Home = lazy(() => import('@pages/Home'));
const Test = lazy(() => import('@pages/Test'));

function App() {
  return (
    <div className="App">
      <Suspense fallback={<div>로딩중...</div>}>
        <ul>
          <li>
            <Link to={'/'}>홈으로</Link>
          </li>
          <li>
            <Link to={'/test'}>테스트</Link>
          </li>
        </ul>

        <h1>프론트엔드 개발 환경 커스텀 구축</h1>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/test" element={<Test />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
