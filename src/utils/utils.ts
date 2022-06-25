import { theme } from "../styles/theme";
import { TQuestionItem, TSelectedAnswer } from "../types/types";
import { Buffer } from 'buffer';

// Function for getting a fragment of fonts with font-size and line-height
type TFonts = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';

export function getFontsFragment(size: TFonts) {
    return `
        font-size: ${theme.fontSizes[`${size}`]};
        line-height: ${theme.lineHeights[`${size}`]};
    `
};

// Function for getting a sorted array of current questions
export function getSortQuestionsArray(questionsArray: TQuestionItem[]) {
    const sortQuestionsArray = questionsArray.map((item, index) => {
        return {
            id: index,
            correctAnswer: getDecodedString(item.correct_answer),
            answers: item.incorrect_answers.
                map(answer => getDecodedString(answer)).
                concat(getDecodedString(item.correct_answer)).
                sort(),
            question: getDecodedString(item.question),
        }
    });

    return sortQuestionsArray;
};

// Function for decoding strings in data from api
function getDecodedString(encodedString: string) {
    const decodedString = Buffer.from(encodedString, 'base64').toString('ascii');

    return decodedString;
};

// Function for searching a selected answer
export function getSelectedAnswer(id: number, selectedAnswers: TSelectedAnswer[]) {
    const selectedAnswer = selectedAnswers.find(item => item.id === id);
    return selectedAnswer;
}