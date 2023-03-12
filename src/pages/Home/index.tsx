import React from 'react';
import Example from '@components/Example';
import image from '../../assets/sheep.jpg';

const Home = () => {
  return (
    <div>
      <Example value="props 테스트 및 이미지 테스트" />

      <hr />

      <div>
        <h3>환경 변수 테스트</h3>
        <p>{process.env.NODE_ENV}</p>
        <p>{process.env.REACT_APP_EXAMPLE}</p>
      </div>

      <div>
        <h3>일반적인 jpg 이미지 테스트</h3>
        <img src={image} alt="이미지" width={500} />
      </div>
    </div>
  );
};

export default Home;
