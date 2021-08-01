import { FC } from 'react';
import Wrapper from './Wrapper';
import Container from './Container';
import Image from '../Image';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons'

interface ButtonWithoutTextProps {
    faObject: IconDefinition;
    imageStyle: object;
};

const ButtonWithoutText: FC<ButtonWithoutTextProps> = ({
    faObject,
    imageStyle
}) => (
    <Wrapper>
        <Container>
        <Image src={faObject} style={{...imageStyle}} />
        </Container>
    </Wrapper>
)

export default ButtonWithoutText;