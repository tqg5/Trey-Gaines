import { ReactElement } from 'react';
import Wrapper from './Wrapper';
import InfoContainer from './InfoContainer';
import Text from './Text';
import Image from './Image';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons'

export interface BaseProps {
    isActive: boolean;
}

interface ButtonProps extends BaseProps {
    text: string;
    faObject: IconDefinition;
}

export default ( { text, faObject, isActive }: ButtonProps): ReactElement => (
    <Wrapper isActive={isActive}>
        <InfoContainer isActive={isActive}>
            <Text>{text}</Text>
            <Image src={faObject} />
        </InfoContainer>
    </Wrapper>
);