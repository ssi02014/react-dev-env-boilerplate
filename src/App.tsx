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
        <nav>
          <Link to={'/'}>홈으로</Link>
          <Link to={'/test'}>테스트</Link>
        </nav>

        <h1>
          react18, TypeScript, webpack5, Webpack Dev Server, babel, eslint,
          prettier, BoilerPlate
        </h1>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/test" element={<Test />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
