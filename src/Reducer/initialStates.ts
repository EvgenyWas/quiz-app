import { TParamsState, TQuestionsArrayState, TQuizStatusState } from "../types/types";

export const paramsInitialState: TParamsState = {
    amount: 5,
    category: 14,
    difficulty: 'easy',
};

export const quizStatusInitialState: TQuizStatusState = {
    isStart: false,
    isFinish: false,
};

export const questionsInitialState: TQuestionsArrayState = {
    originalQuestionsArray: [],
    sortQuestionsArray: [],
};