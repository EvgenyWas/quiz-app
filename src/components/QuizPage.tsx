import { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import { QuizContext } from '../context/QuizContext';
import { actionPutSortQestionsArray } from '../Reducer/actions';
import { getSortQuestionsArray } from '../utils/utils';
import QuestionElem from './QuestionElem';
import SecondaryButton from './UI/Buttons/SecondaryButton';

const QuizPage = () => {
    const { params, questions, dispatchQuestions, status, score, handleFinishClick } = useContext(QuizContext);
    const { originalQuestionsArray, sortQuestionsArray } = questions;
    const { isStart, isFinish } = status;
    const [isArrayEmpty, setIsArrayEmpty] = useState(false);

    const conditionFlipQuizPage = !isStart && isArrayEmpty || !isArrayEmpty;

    useEffect(() => {
        const sortQuestionsArray = getSortQuestionsArray(originalQuestionsArray);
        dispatchQuestions(actionPutSortQestionsArray(sortQuestionsArray));
    }, [originalQuestionsArray]);

    useEffect(() => {
        setIsArrayEmpty(sortQuestionsArray.length !== 0);        
    }, [sortQuestionsArray])

    return (
        <StyledQuizPage className='container' condition={conditionFlipQuizPage} >
            <div>
                {sortQuestionsArray.map((questionItem, index) => 
                    <QuestionElem 
                        key={questionItem.id}
                        id={index}
                        question={questionItem.question} 
                        answers={questionItem.answers}
                        correctAnswer={questionItem.correctAnswer} 
                    />
                )}
            </div>
            <StyledContainer>
                {isFinish && <h3>{`You scored ${score}/${params.amount} correct answers`}</h3>}
                <SecondaryButton 
                    title={isFinish ? 'Play again' : 'Check answers'}
                    handleClick={handleFinishClick}
                />
            </StyledContainer>
        </StyledQuizPage>
    );
};

const StyledQuizPage = styled.section<{ condition: boolean }>`
    ${props => props.condition && 'display: none !important;'}

    & > div > div:nth-child(1) {
        margin-top: 50px;
    }
`

const StyledContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
    padding-bottom: 50px;
`

export default QuizPage;