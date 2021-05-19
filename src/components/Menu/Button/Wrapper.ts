import styled from '@emotion/styled';
import { BaseProps } from './';

export default styled.div<BaseProps>`
    display: flex;
    align-items: center;
    width: 95%;
    height: 30px;
    background-color: transparent;
    box-shadow: ${({ isActive }) => isActive ? '0 0 0 #202125, 0 0 0 #353535;' : '3px 3px 3px #202125, -3px -3px 3px #353535;'}
    margin-bottom: 1rem;
    border-radius: 2rem;
`;