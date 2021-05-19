import { ReactElement, FC } from 'react';
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
    faCamera
} from '@fortawesome/free-solid-svg-icons'

const Menu: FC = (): ReactElement => {
    <Wrapper>
        <Avatar />
        <NameTitleContainer>
            <Name>Trey Gaines</Name>
            <Title>Full Stack Developer</Title>
        </NameTitleContainer>
        <Button
            text='Home'
            faObject={faHome}
            isActive={true}
        />
        <Button
            text='About Me'
            faObject={faUser}
            isActive={false}

        />
        <Button
            text='Portfolio'
            faObject={faCamera}
            isActive={false}

        />
        <Button
            text='Blogs'
            faObject={faComments}
            isActive={false}

        />
        <Button
            text='Contacts'
            faObject={faEnvelope}
            isActive={false}

        />
    </Wrapper>
);

export default Menu