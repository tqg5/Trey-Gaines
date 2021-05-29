import {
    ReactElement,
    FC,
    useMemo
} from 'react';
import Avatar from 'components/Menu/Avatar';
import Wrapper from './Wrapper';
import NameTitleContainer from './NameTitleContainer';
import Name from './Name';
import Title from './Title';
import Button from './Button';
import {
    faHome,
    faUser,
    faEnvelope,
    faComments,
    faCamera,
    IconDefinition
} from '@fortawesome/free-solid-svg-icons';

interface ButtonFactoryProps {
    text: BUTTON_NAMES;
    faObject: IconDefinition;
    isActive: boolean;
    onClick: React.Dispatch<React.SetStateAction<BUTTON_NAMES>>;
};

interface MenuProps {
    activeButtonName: BUTTON_NAMES;
    onClick: React.Dispatch<React.SetStateAction<BUTTON_NAMES>>;
}

export enum BUTTON_NAMES {
    HOME = 'Home',
    ABOUT_ME = 'About Me',
    PORTFOLIO = 'Portfolio',
    BLOGS = 'Blogs',
    CONTACTS = 'Contacts'
};

const buttonConfig = [
    {
        text: BUTTON_NAMES.HOME,
        faObject: faHome
    },
    {
        text: BUTTON_NAMES.ABOUT_ME,
        faObject: faUser
    },
    {
        text: BUTTON_NAMES.PORTFOLIO,
        faObject: faEnvelope
    },
    {
        text: BUTTON_NAMES.BLOGS,
        faObject: faComments
    },
    {
        text: BUTTON_NAMES.CONTACTS,
        faObject: faCamera
    }
];

const buttonFactory = ({
    text,
    faObject,
    isActive,
    onClick
}: ButtonFactoryProps) => <Button
    text={text}
    faObject={faObject}
    isActive={isActive}
    onClick={onClick}
/>;

const createButtons = (activeButtonName: BUTTON_NAMES, onClick: React.Dispatch<React.SetStateAction<BUTTON_NAMES>>) => {
    const buttons = [];

    for(const obj of Object.values(buttonConfig)) {
        buttons.push(buttonFactory({
            ...obj,
            isActive: activeButtonName === obj.text,
            onClick
        }));
    }

    return buttons;
}

const Menu: FC<MenuProps> = ({ activeButtonName, onClick }): ReactElement => {
    const buttons = useMemo(() => createButtons(activeButtonName, onClick), [ activeButtonName ]);

    return (
        <Wrapper>
            <Avatar />
            <NameTitleContainer>
                <Name>Trey Gaines</Name>
                <Title>Full Stack Developer</Title>
            </NameTitleContainer>
            {buttons}
        </Wrapper>
    );
}

export default Menu