import {
    FC,
    ReactElement
} from 'react';
import AvatarImg from 'images/Avatar.jpeg';
import { css } from '@emotion/react'

const cssObj = css`
    border-radius: 50%;
    width: 150px;
    height: 150px;
`;

const Avatar: FC = (): ReactElement => (
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    <img css={cssObj} src={AvatarImg} />
);

export default Avatar;