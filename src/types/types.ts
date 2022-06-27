import { Dispatch, SetStateAction } from "react";
import { ParamsTypesActions, QuestionsArrayTypesActions, QuizStatusTypesActions } from "../Reducer/actions";

// Default single types
export type TAmount = 5 | 10 | 15 | 20;
export type TDifficulty = 'easy' | 'medium' | 'hard';

export type TQuestionsParams = {
    amount: TAmount,
    category: number,
    difficulty: TDifficulty,
};

export type TQuestionItem = {
    category: string,
    correct_answer: string,
    difficulty: string,
    incorrect_answers: string[],
    question: string,
    type: string,
};

export type TSortQuestionItem = {
    id: number,
    correctAnswer: string,
    answers: string[],
    question: string,
};

export type TSelectedAnswer = {
    id: number,
    selectedAnswer: string,
};

export type TCategory = {
    id: number,
    name: string,
};

// Types for options of SelectBar
export type TCategoryOption = {
    value: number;
    label: string;
};

export type TDifficultyOption = {
    value: TDifficulty;
    label: string;
};

export type TAmountOption = {
    value: TAmount;
    label: TAmount;
};

// Types for actions
export type TParamsAction = {
    type: ParamsTypesActions,
    payload: number | TAmount | TDifficulty,
};

export type TQuizStatusAction = {
    type: QuizStatusTypesActions,
    payload: boolean,
};

export type TQuestionsArrayAction = {
    type: QuestionsArrayTypesActions,
    payload: TQuestionItem[] | TSortQuestionItem[],
}

// Types for states of useReducers
export type TParamsState = TQuestionsParams;

export type TQuizStatusState = {
    isStart: boolean,
    isFinish: boolean,
};

export type TQuestionsArrayState = {
    originalQuestionsArray: TQuestionItem[],
    sortQuestionsArray: TSortQuestionItem[],
};

// Type for QuizContext
export type TQuizContext = {
    categories: TCategory[],
    params: TQuestionsParams,
    dispatchParams: Dispatch<TParamsAction>,
    status: TQuizStatusState, 
    dispatchStatus: Dispatch<TQuizStatusAction>,
    questions: TQuestionsArrayState,
    dispatchQuestions: Dispatch<TQuestionsArrayAction>,
    selectedAnswers: TSelectedAnswer[],
    setSelectedAnswers: Dispatch<SetStateAction<TSelectedAnswer[]>>,
    score: number,
    handleFinishClick: () => void,
};