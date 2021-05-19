import styled from '@emotion/styled';
import { BaseProps } from './';

export default styled.div<BaseProps>`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 100%;
    box-shadow: ${({ isActive }) => isActive ? 'inset 3px 3px 3px #202125, inset -3px -3px 3px #353535;' : 'none;'}
    transition: all 0.3s ease 0s;
    padding: 0.5rem 1.5rem;
    border-radius: 25px;
`;