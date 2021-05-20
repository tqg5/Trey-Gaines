import {
    ReactElement,
    FC,
    useMemo,
    useState
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
    setActiveButtonName: React.Dispatch<React.SetStateAction<BUTTON_NAMES>>;
};

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
    setActiveButtonName
}: ButtonFactoryProps) => <Button
    text={text}
    faObject={faObject}
    isActive={isActive}
    onClick={setActiveButtonName}
/>;

const createButtons = (activeButtonName: BUTTON_NAMES, setActiveButtonName: React.Dispatch<React.SetStateAction<BUTTON_NAMES>>) => {
    const buttons = [];

    for(const obj of Object.values(buttonConfig)) {
        buttons.push(buttonFactory({
            ...obj,
            isActive: activeButtonName === obj.text,
            setActiveButtonName
        }));
    }

    return buttons;
}

const Menu: FC = (): ReactElement => {
    const [ activeButtonName, setActiveButtonName ] = useState(BUTTON_NAMES.HOME);
    const buttons = useMemo(() => createButtons(activeButtonName, setActiveButtonName), [ activeButtonName ]);

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