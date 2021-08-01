import Wrapper from './Wrapper';
import Button from 'components/Button';
import axios from 'axios';
import { faChevronCircleDown } from '@fortawesome/free-solid-svg-icons';

function download() {
    axios({
        url: 'treygaines.com/Profile.pdf',
        method: 'GET',
        responseType: 'blob'
    })
    .then((response) => {
        const url = window.URL
                .createObjectURL(new Blob([response.data]));
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', 'Resume.pdf');
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      });
}

const Download = () => (
    <Wrapper>
        <Button
            isActive={false}
            faObject={faChevronCircleDown}
            onClick={download}
            imageStyle={{
                color: '#f56c6d'
            }}
        />
    </Wrapper>
)

export default Download;