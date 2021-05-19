import { ReactElement } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconDefinition } from '@fortawesome/free-solid-svg-icons'

interface ImageProps {
    src: IconDefinition;
}

export default ({ src }: ImageProps): ReactElement => (
    <FontAwesomeIcon color='white' icon={src} />
);