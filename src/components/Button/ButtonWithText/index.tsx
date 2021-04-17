import { ReactElement } from 'react';
import { BUTTON_NAMES } from 'components/Menu';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons'
import Wrapper from './Wrapper';
import Container from './Container';
import Text from './Text';
import Image from '../Image';

interface ButtonProps {
    text: BUTTON_NAMES;
    faObject: IconDefinition;
    isActive: boolean;
    imageStyle: object
};

export default ( { text, faObject, isActive, imageStyle }: ButtonProps): ReactElement => (
    <Wrapper isActive={isActive}>
        <Container>
            {text && <Text>{text}</Text>}
            <Image src={faObject} style={imageStyle} />
        </Container>
    </Wrapper>
);