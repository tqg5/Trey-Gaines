import {
    ReactElement,
    MouseEventHandler
} from 'react';
import Wrapper from './Wrapper';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons'
import { BUTTON_NAMES } from '../Menu';
import ButtonWithText from './ButtonWithText';
import ButtonWithoutText from './ButtonWithoutText';

export interface BaseProps {
    isActive: boolean;
};

interface ButtonProps extends BaseProps {
    text?: BUTTON_NAMES;
    faObject: IconDefinition;
    onClick: MouseEventHandler<HTMLDivElement>;
    imageStyle?: object;
    isActive: boolean;
};

export default ( {
    text,
    faObject,
    isActive,
    onClick,
    imageStyle = { color: 'white'}
}: ButtonProps): ReactElement => {
    return (
        <Wrapper isActive={isActive} onClick={onClick}>
                {
                    text !== undefined ? <ButtonWithText
                        isActive={isActive}
                        text={text}
                        faObject={faObject}
                        imageStyle={imageStyle}
                    />
                    :
                    <ButtonWithoutText
                        faObject={faObject}
                        imageStyle={imageStyle}
                    />
                }
        </Wrapper>
    );
};