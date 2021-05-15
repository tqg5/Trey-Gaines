import React from 'react';
import Avatar from 'components/Avatar';
import Wrapper from './Wrapper';
import Name from './Name';
import Title from './Title';
import Button from './Button';

export default () => {
    return (
        <Wrapper>
            <Avatar />
            <Name>Trey Gaines</Name>
            <Title>Full Stack Developer</Title>
            <Button>Home</Button>
        </Wrapper>
    );
}