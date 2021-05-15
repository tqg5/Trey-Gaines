import { ReactElement } from 'react';
import { CSSObject } from '@emotion/react';
import styled from '@emotion/styled';

export default (): ReactElement => {
    /*
    const buttonCss = (): CSSObject => ({
        backgroundColor: 'hotpink',
        '&:hover': {
            color: 'lightgreen'
        }
    });
    */

    const Background = styled.div`
        background-color: black;
        display: flex;
        flex: 1;
        justify-content: space-around;
    `;

    const Title = styled.span`
        color: white;
        font-size: 1em;
        padding: 10px;
    `;

    return (
        <div>
            <Background>
                <Title>Project</Title>
                <Title>About Me</Title>
                <Title>Testimonials</Title>
                <Title>Contact Me</Title>
                <Title>Posts</Title>
            </Background>

        </div>
    )
}