import { useContext, useEffect } from 'react';
import styled from 'styled-components';
import { QuizContext } from '../context/QuizContext';
import { getSortQuestionsArray } from '../utils/utils';
import QuestionElem from './QuestionElem';
import SecondaryButton from './UI/Buttons/SecondaryButton';

const QuizPage = () => {
    const { params, questionsArray, sortQuestionsArray, setSortQuestionsArray, isFinish, score, isStart, handleFinishClick } = useContext(QuizContext);

    useEffect(() => {
        const sortQuestionsArray = getSortQuestionsArray(questionsArray);
        setSortQuestionsArray(sortQuestionsArray);
    }, [questionsArray]);

    return (
        <StyledQuizPage className='container' isStart={isStart} >
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

const StyledQuizPage = styled.section<{ isStart: boolean }>`
    ${props => !props.isStart && 'display: none !important;'}

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