import { ReactElement } from 'react';
import Wrapper from './Wrapper';
import InfoContainer from './InfoContainer';
import Text from './Text';
import Image from './Image';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons'
import { BUTTON_NAMES } from '../';

export interface BaseProps {
    isActive: boolean;
};

interface ButtonProps extends BaseProps {
    text: BUTTON_NAMES;
    faObject: IconDefinition;
    onClick: React.Dispatch<React.SetStateAction<BUTTON_NAMES>>;
};

export default ( { text, faObject, isActive, onClick }: ButtonProps): ReactElement => (
    <Wrapper isActive={isActive} onClick={() => onClick(text)}>
        <InfoContainer isActive={isActive}>
            <Text>{text}</Text>
            <Image src={faObject} />
        </InfoContainer>
    </Wrapper>
);