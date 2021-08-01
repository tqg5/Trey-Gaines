import styled from '@emotion/styled';
import { BaseProps } from './';

const activeCSS = '0 0 0 #202125, 0 0 0 #353535;';

export default styled.div<BaseProps>`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 95%;
    background-color: transparent;
    box-shadow: ${({ isActive }) => isActive ? activeCSS : '3px 3px 3px #202125, -3px -3px 3px #353535;'}
    border-radius: 2rem;

    &:hover {
        box-shadow: ${activeCSS}
    }
`;