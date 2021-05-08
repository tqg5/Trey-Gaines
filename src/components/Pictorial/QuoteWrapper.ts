import { css } from '@emotion/react';
import styled from '@emotion/styled';

const cssObj = css`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 10px;
    font-size: 2em;
    border-color: black;
    border-width: 1px;
    border-style: solid;
`;

export default styled.span(cssObj);