import { FC } from "react";

interface ComponentProps {
    renderIf: boolean;
    renderElse?: FC
}

const renderIf = (component: FC) => {
    const WrappedComponent = component;
    const MyComponent: FC<ComponentProps> = ({ renderIf, renderElse, ...props}) => (
        <>
            {renderIf && <WrappedComponent {...props} />}
        </>
    );

    return ({ ...props }: ComponentProps) => (
        <MyComponent {...props} />
    );
}

export default renderIf;