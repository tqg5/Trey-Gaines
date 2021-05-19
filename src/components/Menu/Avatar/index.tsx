import {
    FC,
    ReactElement
} from 'react';
import Wrapper from './Wrapper';
import AvatarImg from 'images/Avatar.jpeg';
import { css } from '@emotion/react'

const cssObj = css`
    border-radius: 50%;
    width: 150px;
    height: 150px;
`;

const Avatar: FC = (): ReactElement => (
    <Wrapper>
        <img css={cssObj} src={AvatarImg} />
    </Wrapper>
);

export default Avatar;