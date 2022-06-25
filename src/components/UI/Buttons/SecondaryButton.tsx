import styled from 'styled-components';
import { theme } from '../../../styles/theme';
import { getFontsFragment } from '../../../utils/utils';

type Props = {
    title: string,
    handleClick: () => void,
}

const SecondaryButton = ({ title, handleClick }: Props) => {
    return (
        <StyledButton onClick={handleClick} >
            { title }
        </StyledButton>
    );
};

const StyledButton = styled.button`
    width: 140px;
    height: 40px;
    color: ${theme.colors.bgColor};
    ${getFontsFragment('md')}
    background: ${theme.colors.acceptBlue};
    border-radius: 15px;
`

export default SecondaryButton;