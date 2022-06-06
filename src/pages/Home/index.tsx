import React, { useState } from 'react';
import Example from '@components/Example';
import image from '../../assets/sheep.jpg';
import logo from '../../assets/logo.svg';

const Home = () => {
  const [number, setNumber] = useState(0);

  const handleClick = () => {
    setNumber((prev) => prev + 1);
  };

  console.log(number);
  return (
    <div>
      <Example value="props 테스트" />
      <p>{number}</p>
      <button onClick={handleClick}>+버튼</button>
      <p>{process.env.NODE_ENV}</p>
      <p>{process.env.REACT_APP_EXAMPLE}</p>

      {/* image 크기 별 테스트 */}
      {/* 작은 크기의 이미지는 base64 형태로 빌드되고 큰 이미지는 웹팩 아웃풋 폴더(build)에 파일로 옮겨준다  */}
      <img src={image} alt="" />
      <img src={logo} alt="" />
    </div>
  );
};

export default Home;
