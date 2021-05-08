import React from 'react';
import Content from 'components/Content';
import Menu from 'components/Menu';
import Wrapper from './Wrapper';

export default function Home() {
  return (
    <Wrapper>
      <Content />
      <Menu />
    </Wrapper>
  )
}
