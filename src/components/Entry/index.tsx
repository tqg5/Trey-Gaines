import { ReactElement, useState } from 'react';
import Details from 'components/Details';
import Menu, { BUTTON_NAMES } from 'components/Menu';
import AppWrapper from './AppWrapper';
import Wrapper from './Wrapper';
import ContentWrapper from './ContentWrapper';
import './index.css';

export default (): ReactElement => {
  const [ activeButtonName, setActiveButtonName ] = useState(BUTTON_NAMES.HOME);

  return (
    <AppWrapper>
        <Wrapper>
          <ContentWrapper>
              <Details activeButtonName={activeButtonName} />
              <Menu activeButtonName={activeButtonName} onClick={setActiveButtonName} />
          </ContentWrapper>
      </Wrapper>
    </AppWrapper>
  )
}