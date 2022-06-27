import styled from 'styled-components';
import { theme } from "../../../styles/theme";
import { getFontsFragment } from '../../../utils/utils';

type Props = {
    startClick: () => void,
}

const PrimaryButton = ({ startClick }: Props) => {
    return (
        <StyledButton onClick={startClick}>
            Start quiz
        </StyledButton>
    );
};

const StyledButton = styled.button`
    width: 193px;
    height: 52px;
    margin-bottom: 40px;
    color: ${theme.colors.bgColor};
    ${getFontsFragment('lg')}
    background: ${theme.colors.acceptBlue};
    border-radius: 15px;
`

export default PrimaryButton;