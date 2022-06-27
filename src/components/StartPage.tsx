import { useContext, useEffect, useState } from 'react';
import PulseLoader from 'react-spinners/PulseLoader';
import styled from 'styled-components';
import { QuizContext } from '../context/QuizContext';
import { useRequestQuestions } from '../hooks/useRequestQuestions';
import { actionChangeIsStart } from '../Reducer/actions';
import { theme } from '../styles/theme';
import { getFontsFragment } from '../utils/utils';
import PrimaryButton from './UI/Buttons/PrimaryButton';
import SelectsBar from './UI/SelectsBar/SelectsBar';

const StartPage = () => {
    const { status: { isStart }, dispatchStatus, questions: { sortQuestionsArray } } = useContext(QuizContext);
    const { loading, error, handleRequest } = useRequestQuestions();
    const [isArrayEmpty, setIsArrayEmpty] = useState(false);

    const conditionFlipStartPage = isStart && !loading && !error && isArrayEmpty;
    const conditionEmptyArray = isStart && !isArrayEmpty && !error;

    useEffect(() => {
        setIsArrayEmpty(sortQuestionsArray.length !== 0);
    }, [sortQuestionsArray]);

    const startClick = async () => {
        await handleRequest();
        dispatchStatus(actionChangeIsStart(true));
    };

    return (
        <StyledStartPage 
            className='container' 
            condition={conditionFlipStartPage}
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
                <h2>{`Error: ${error}, sorry...`}</h2>
            }
            {conditionEmptyArray &&
                <h2>Sorry, we don't have any suitable questions for your selection, please try other parameters...</h2>
            }
        </StyledStartPage>
    );
};

const StyledStartPage = styled.section<{ condition: boolean }>`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    & > h1 {
        margin-bottom: 40px;
        font-family: ${theme.fonts.titleFont};
        ${getFontsFragment('xxl')}
    };

    & > h2 {
        ${props => props.condition && 'display: none'}
        text-align: center;
        ${getFontsFragment('xl')}
    }

    ${props => props.condition && 'margin-top: -100vh !important;'}
`

export default StartPage;