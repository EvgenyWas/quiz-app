import { ReactNode, useEffect, useReducer, useState } from "react";
import { ApiService } from "../API/ApiService";
import { actionChangeIsFinish, actionChangeIsStart, actionPutSortQestionsArray } from "../Reducer/actions";
import { paramsInitialState, questionsInitialState, quizStatusInitialState } from "../Reducer/initialStates";
import { paramsReducer, questionsReducer, quizStatusReducer } from "../Reducer/reducers";
import { TSelectedAnswer } from "../types/types";
import { QuizContext } from "./QuizContext";

type Props = { children: ReactNode };

export const QuizContextProvider = ({ children }: Props) => {
    const [categories, setCategories] = useState([]);
    const [selectedAnswers, setSelectedAnswers] = useState<TSelectedAnswer[]>([]);
    const [score, setScore] = useState<number>(0);
    const [status, dispatchStatus] = useReducer(quizStatusReducer, quizStatusInitialState);
    const [params, dispatchParams] = useReducer(paramsReducer, paramsInitialState);
    const [questions, dispatchQuestions] = useReducer(questionsReducer, questionsInitialState);

    async function fetchCategories() {
        const response = await ApiService.getCategories();
        const categories = await response.data.trivia_categories;
        setCategories(categories);
    };

    useEffect(() => {
        fetchCategories()
    }, []);

    const handleFinishClick = () => {
        if (status.isFinish) {
            dispatchQuestions(actionPutSortQestionsArray([]));
            dispatchStatus(actionChangeIsFinish(false));
            setScore(0);
            dispatchStatus(actionChangeIsStart(false));
        } else {
            questions.sortQuestionsArray.forEach((correct) => {
                selectedAnswers.forEach((selected) => {
                    if (correct.correctAnswer === selected.selectedAnswer && correct.id === selected.id) {
                        setScore(prevScore => prevScore += 1)
                    }
                })
            });
            dispatchStatus(actionChangeIsFinish(true));
        }
    };

    return (
        <QuizContext.Provider value={{ 
            categories, 
            params, dispatchParams,
            status, dispatchStatus,
            questions, dispatchQuestions, 
            selectedAnswers, setSelectedAnswers, 
            score,
            handleFinishClick,
        }}>
            { children }
        </QuizContext.Provider>
    );
};