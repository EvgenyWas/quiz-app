import { useContext } from 'react';
import styled from 'styled-components';
import { QuizContext } from '../../../context/QuizContext';
import { theme } from '../../../styles/theme';
import { TSelectedAnswer } from '../../../types/types';
import { getFontsFragment } from '../../../utils/utils';

type Props = {
    index: number
    answer: string,
    correctAnswer: string,
    selected: TSelectedAnswer | undefined,
    handleClick: (index: number, selectedAnswer: string) => void,
}

const AnswerButton = ({ index, answer, correctAnswer, selected, handleClick }: Props) => {
    const { isFinish } = useContext(QuizContext);
    const compareSelectedAndCurrent: boolean = selected?.selectedAnswer === answer;
    const compareSelectedAndCorrect: boolean = answer === correctAnswer;

    return (
        <StyledButton 
            onClick={() => handleClick(index, answer)}
            selected={compareSelectedAndCurrent}
            correct={compareSelectedAndCorrect}
            isFinish={isFinish}
            disabled={isFinish}
        >
            {answer}
        </StyledButton>
    );
};

const StyledButton = styled.button<{selected: boolean, correct: boolean, isFinish: boolean}>`
    min-width: 65px;
    padding: 8px 20px;
    ${getFontsFragment('sm')}
    border-radius: 8px;
    ${props => 
        props.isFinish ? 
            props.correct && props.selected ? 
            `background: ${theme.colors.answerGreen};`
            : props.selected ?
            `background: ${theme.colors.answerRed}; opacity: 0.5;`
            : props.correct ?
            `background: ${theme.colors.answerGreen}; border: 1px solid ${theme.colors.answerGreen};`
            : `opacity: 0.5; border: 1px solid ${theme.colors.acceptBlue};`
        : props.selected ?
        `border: 1px solid ${theme.colors.answerBlue}; background: ${theme.colors.answerBlue};`
        : `border: 1px solid ${theme.colors.acceptBlue};`
    }
`

export default AnswerButton;