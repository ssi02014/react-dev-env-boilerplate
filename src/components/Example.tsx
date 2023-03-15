import React from 'react';
import Logo from '@assets/logo.svg';
import logo from '@assets/logo.svg?url';
import webpImage from '@assets/test.webp';
import bigSvgTest from '@assets/bigSvgTest.svg?url';
import BigSvgTest from '@assets/bigSvgTest.svg';

interface Props {
  value: string;
}

const Example = ({ value }: Props) => {
  return (
    <>
      <h2>{value}</h2>

      <div>
        <h3>SVG as React Component Test</h3>
        <Logo />
      </div>

      <div>
        <h3>asset svg url Test</h3>
        <img src={logo} />
      </div>

      <div>
        <h3>big size SVG as React Component Test</h3>
        <BigSvgTest />
      </div>

      <div>
        <h3>asset big size SVG url Test</h3>
        <img src={bigSvgTest} />
      </div>

      <div>
        <h3>webp Image Test</h3>
        <img src={webpImage} />
      </div>
    </>
  );
};

export default Example;
