import React from 'react';
import Details from 'components/Details';
import Menu from 'components/Menu';
import AppWrapper from './AppWrapper';
import Wrapper from './Wrapper';
import ContentWrapper from './ContentWrapper';
import './index.css';

export default function Home() {
  return (
    <AppWrapper>
        <Wrapper>
            <ContentWrapper>
                <Details />
                <Menu />
            </ContentWrapper>
      </Wrapper>
    </AppWrapper>
  )
}