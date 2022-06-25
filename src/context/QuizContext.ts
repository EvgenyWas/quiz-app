import { createContext } from "react";
import { TQuizContext } from "../types/types";

export const quizContextDefault: TQuizContext = {
    categories: [],
    params: {
        amount: 5,
        category: 14,
        difficulty: 'easy',
    },
    setParams: () => {},
    questionsArray: [],
    isStart: false, 
    setIsStart: () => {},
    setQuestionsArray: () => {},
    sortQuestionsArray: [],
    setSortQuestionsArray: () => {},
    selectedAnswers: [],
    setSelectedAnswers: () => {},
    isFinish: false, 
    score: 0,
    handleFinishClick: () => {},
}

export const QuizContext = createContext<TQuizContext>(quizContextDefault)