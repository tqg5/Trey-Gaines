import { ReactElement } from 'react';
import Wrapper from './Wrapper';
import Home from './Home';

export default (): ReactElement => {
    return (
        <Wrapper>
            <Home />
        </Wrapper>
    );
}