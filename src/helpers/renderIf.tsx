import { FC } from "react";
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';

interface ComponentProps {
    renderIf: boolean;
    renderElse?: FC;
    [props: string]: boolean | FC | string | IconDefinition | undefined;
}

//any is used here because we have no idea what type will be passed per component
const renderIf = (component: FC<any>) => {
    const WrappedComponent = component;
    const MyComponent = ({ renderIf, renderElse, ...props}: ComponentProps) => (
        <>
            {renderIf && <WrappedComponent {...props} />}
        </>
    );

    return ({ renderIf, renderElse, ...props }: ComponentProps) => (
        <MyComponent
            renderIf={renderIf}
            renderElse={renderElse}
            {...props}
        />
    );
}

export default renderIf;