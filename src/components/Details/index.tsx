import { ReactElement, FC } from 'react';
import Wrapper from './Wrapper';
import Home from './Home';
import About from './About';
import Portfolio from './Portfolio';
import Blogs from './Blogs';
import Contacts from './Contacts';
import { BUTTON_NAMES } from '../Menu/index';
import renderIf from 'helpers/renderIf';

const EHome = renderIf(Home);
const EAboutMe = renderIf(About);
const EPortfolio = renderIf(Portfolio);
const EBlogs = renderIf(Blogs);
const EContacts = renderIf(Contacts);

interface DetailsProps {
    activeButtonName: BUTTON_NAMES;
}

const Details: FC<DetailsProps> = ({ activeButtonName }): ReactElement => {
    return (
        <Wrapper>
            <EHome renderIf={activeButtonName === BUTTON_NAMES.HOME} />
            <EAboutMe renderIf={activeButtonName === BUTTON_NAMES.ABOUT_ME} />
            <EPortfolio renderIf={activeButtonName === BUTTON_NAMES.PORTFOLIO} />
            <EBlogs renderIf={activeButtonName === BUTTON_NAMES.BLOGS} />
            <EContacts renderIf={activeButtonName === BUTTON_NAMES.CONTACTS} />
        </Wrapper>
    );
}

export default Details;