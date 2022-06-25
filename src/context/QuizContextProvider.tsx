import { ReactNode, useEffect, useState } from "react"
import { ApiService } from "../API/ApiService";
import { TQuestionItem, TQuestionsParams, TSelectedAnswer, TSortQuestionItem } from "../types/types";
import { QuizContext, quizContextDefault } from "./QuizContext"

type Props = { children: ReactNode };

export const QuizContextProvider = ({ children }: Props) => {
    const [categories, setCategories] = useState([]);
    const [params, setParams] = useState<TQuestionsParams>(quizContextDefault.params);
    const [isStart, setIsStart] = useState<boolean>(false);
    const [questionsArray, setQuestionsArray] = useState<TQuestionItem[]>([]);
    const [sortQuestionsArray, setSortQuestionsArray] = useState<TSortQuestionItem[]>([])
    const [selectedAnswers, setSelectedAnswers] = useState<TSelectedAnswer[]>([]);
    const [isFinish, setIsFinish] = useState<boolean>(false);
    const [score, setScore] = useState<number>(0);

    async function fetchCategories() {
        const response = await ApiService.getCategories();
        const categories = await response.data.trivia_categories;
        setCategories(categories);
    };

    useEffect(() => {
        fetchCategories()
    }, []);

    const handleFinishClick = () => {
        if (isFinish) {
            setSortQuestionsArray([]);
            setIsFinish(false);
            setScore(0);
            setIsStart(false);
        } else {
            sortQuestionsArray.forEach((correct) => {
                selectedAnswers.forEach((selected) => {
                    if (correct.correctAnswer === selected.selectedAnswer && correct.id === selected.id) {
                        setScore(prevScore => prevScore += 1)
                    }
                })
            });
            setIsFinish(true);
        }
    };

    return (
        <QuizContext.Provider value={{ 
            categories, 
            params, setParams,
            isStart, setIsStart,
            questionsArray, setQuestionsArray, 
            sortQuestionsArray, setSortQuestionsArray, 
            selectedAnswers, setSelectedAnswers, 
            isFinish,
            score,
            handleFinishClick
        }}>
            { children }
        </QuizContext.Provider>
    );
};