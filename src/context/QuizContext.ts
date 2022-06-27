import { createContext } from "react";
import { 
    quizStatusInitialState as status, 
    paramsInitialState as params, 
    questionsInitialState as questions 
} from "../Reducer/initialStates";
import { TQuizContext } from "../types/types";

export const quizContextDefault: TQuizContext = {
    categories: [],
    params,
    dispatchParams: () => {},
    status,
    dispatchStatus: () => {},
    questions,
    dispatchQuestions: () => {},
    selectedAnswers: [],
    setSelectedAnswers: () => {},
    score: 0,
    handleFinishClick: () => {},
};

export const QuizContext = createContext<TQuizContext>(quizContextDefault)