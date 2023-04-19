import React from 'react';
import Example from '@components/Example';
import image from '@assets/sheep.jpg';
import video from '@assets/videos/videoTest.mp4';
import videoWebm from '@assets/videos/videoTest.webm';

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

      <div>
        <h3>video 테스트</h3>
        <video muted playsInline autoPlay>
          <source src={videoWebm} type="video/webm" />
          <source src={video} type="video/mp4" />
        </video>
      </div>
    </div>
  );
};

export default Home;
