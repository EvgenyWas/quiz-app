import { Dispatch, SetStateAction } from "react";

// Standart single types
type TAmount = 5 | 10 | 15 | 20;
type TDifficulty = 'easy' | 'medium' | 'hard';

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

// Type for QuizContext
export type TQuizContext = {
    categories: TCategory[],
    params: TQuestionsParams,
    setParams: Dispatch<SetStateAction<TQuestionsParams>>,
    questionsArray: TQuestionItem[],
    isStart: boolean, 
    setIsStart: Dispatch<SetStateAction<boolean>>,
    setQuestionsArray: Dispatch<SetStateAction<TQuestionItem[]>>,
    sortQuestionsArray: TSortQuestionItem[],
    setSortQuestionsArray: Dispatch<SetStateAction<TSortQuestionItem[]>>,
    selectedAnswers: TSelectedAnswer[],
    setSelectedAnswers: Dispatch<SetStateAction<TSelectedAnswer[]>>,
    isFinish: boolean, 
    score: number,
    handleFinishClick: () => void,
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
