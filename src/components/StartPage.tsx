import { useContext } from 'react';
import PulseLoader from 'react-spinners/PulseLoader';
import styled from 'styled-components';
import { QuizContext } from '../context/QuizContext';
import { useRequestQuestions } from '../hooks/useRequestQuestions';
import { theme } from '../styles/theme';
import { getFontsFragment } from '../utils/utils';
import PrimaryButton from './UI/Buttons/PrimaryButton';
import SelectsBar from './UI/SelectsBar/SelectsBar';

const StartPage = () => {
    const { isStart, setIsStart } = useContext(QuizContext);
    const { loading, error } = useRequestQuestions(isStart);

    const startClick = () => setIsStart(true);

    return (
        <StyledStartPage 
            className='container' 
            isStart={isStart} 
            loading={loading}
        >
            <h1>Quiz</h1>
            <SelectsBar/>
            <PrimaryButton startClick={startClick}/>
            {loading && 
                <PulseLoader 
                    loading={loading} 
                    color={theme.colors.acceptBlue} 
                />
            }
            {error && 
                <h1>{`Error: ${error}, sorry...`}</h1>
            }
        </StyledStartPage>
    );
};

const StyledStartPage = styled.section<{ isStart: boolean, loading: boolean }>`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    ${props => props.isStart && !props.loading && 'margin-top: -100vh !important;'}

    & > h1 {
        margin-bottom: 40px;
        font-family: ${theme.fonts.titleFont};
        ${getFontsFragment('xxl')}
    }
`

export default StartPage;