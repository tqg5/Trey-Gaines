/*
    Attaches a text prop to the passed in component. Passed in component is
    responsible for doing what it wants with the text attribute
*/

import { FC } from 'react';

interface HOCProps {
    text: string;
}

const withText = (component: FC<any>) => {
    const WrappedComponent = component;

    return ({ text }: HOCProps) => (
        <WrappedComponent
            text={text}
        />
    )
}

export default withText;