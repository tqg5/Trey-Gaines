import { ReactElement } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconDefinition } from '@fortawesome/free-solid-svg-icons'

interface ImageProps {
    src: IconDefinition;
    style: object;
}

export default ({
    src,
    style
}: ImageProps): ReactElement => (
    <FontAwesomeIcon {...style} icon={src} />
);