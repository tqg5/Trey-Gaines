import styled from '@emotion/styled';

const activeCSS = 'inset 3px 3px 3px #202125, inset -3px -3px 3px #353535;';

export default styled.div`
    transition: all 0.3s ease 0s;
    border-radius: 25px;
    cursor: pointer;
    width: 3.3rem;
    height: 3.3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    &:hover {
        box-shadow: ${activeCSS}
    }
`;