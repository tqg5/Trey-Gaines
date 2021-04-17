import React from 'react';
import { Button } from 'reakit';
import { CSSObject } from '@emotion/react';
import styled from '@emotion/styled';

export default () => {
    const buttonCss = (): CSSObject => ({
        backgroundColor: 'hotpink',
        '&:hover': {
            color: 'lightgreen'
        }
    });

    const NewButton = styled(Button)(buttonCss);

    const Background = styled.div`
        background-color: black;
        display: flex;
        flex: 1;
    `
    return (
        <div>
            <Background>
                
 
 
            </Background>

        </div>
    )
}