import Wrapper from './Wrapper';
import Name from './Name';
import Title from './Title';
import Download from './Download';
import TopSection from './TopSection';
import BottomSection from './BottomSection';
import ButtonWrapper from './ButtonWrapper';
import DownloadableButtonText from './DownloadableButtonText';

const Home = () => (
    <Wrapper>
        <TopSection>
            <Name>Trey Gaines</Name>
            <Title>Web Developer</Title>
        </TopSection>
        <BottomSection>
            <ButtonWrapper>
                <Download />
                <DownloadableButtonText>RESUME</DownloadableButtonText>
            </ButtonWrapper>
        </BottomSection>
    </Wrapper>
)

export default Home;
