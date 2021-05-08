import React from 'react';
import Avatar from 'images/Avatar.jpeg';
import Wrapper from './Wrapper';
import QuoteWrapper from './QuoteWrapper';
import Canvas from 'components/Canvas';

export default () => {
    return (
        <Wrapper>
            <div>
                <img src={Avatar} />
            </div>
            <QuoteWrapper>
                <span>&ldquo;Coding is an art with your IDE as your canvas to make your imagination a reality.&rdquo;</span>
            </QuoteWrapper>
        </Wrapper>
    )
}