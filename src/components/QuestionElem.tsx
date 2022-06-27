import { useContext } from 'react';
import styled from 'styled-components';
import { QuizContext } from '../context/QuizContext';
import { theme } from '../styles/theme';
import { getSelectedAnswer } from '../utils/utils';
import AnswerButton from './UI/Buttons/AnswerButton';

type Props = {
    id: number,
    question: string,
    answers: string[],
    correctAnswer: string,
}

const QuestionElem = ({ id, question, answers, correctAnswer }: Props) => {
    const { selectedAnswers, setSelectedAnswers } = useContext(QuizContext);

    const handleClick = (index: number, selectedAnswer: string) => {
        const filteredSelectedAnswers = selectedAnswers.filter(item => item.id !== index);
        setSelectedAnswers([...filteredSelectedAnswers, {id: index, selectedAnswer: selectedAnswer}]);
    }

    return (
        <StyledQuestionElem>
            <h3>{question}</h3>
            <StyledAnswersContainer>
                {answers.map((answer, index) => 
                    <AnswerButton 
                        key={index}
                        index={id}
                        answer={answer}
                        correctAnswer={correctAnswer}
                        selected={getSelectedAnswer(id, selectedAnswers)}
                        handleClick={handleClick}
                    />
                )}
            </StyledAnswersContainer>
            <StyledLine></StyledLine>
        </StyledQuestionElem>
    );
};

const StyledQuestionElem = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    & > h3 {
        margin-bottom: 12px;
        text-align: start;
    }
`

const StyledAnswersContainer = styled.div`
    display: flex;
    gap: 12px;
    margin-bottom: 12px;

    @media (max-width: ${theme.media.small}) {
        flex-wrap: wrap;
    }
`

const StyledLine = styled.div`
    width: 100%;
    height: 2px;
    margin-bottom: 20px;
    background: ${theme.colors.acceptGrey};
`

export default QuestionElem;