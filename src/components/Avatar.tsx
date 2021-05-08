import React from 'react';
import Avatar from 'images/Avatar.jpeg';
import { css, jsx } from '@emotion/react'

const cssObj = css`
    border-radius: 50%;
    width: 150px;
    height: 150px;
`;

export default () => (
    <img css={cssObj} src={Avatar} />
);