import { useContext, useLayoutEffect, useState } from "react";
import { ApiService } from "../API/ApiService";
import { QuizContext } from "../context/QuizContext";


export const useRequestQuestions = (event: boolean) => {
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string>('');
    const { params,setQuestionsArray } = useContext(QuizContext);

    async function fetchQuestions() {
        setLoading(true);
        try {
            const response = await ApiService.getQuestions(params);
            const questions = await response.data.results;
            setQuestionsArray(questions);
        } catch (error: any) {
            setError(error.message);
        };
        setLoading(false);
    };

    useLayoutEffect(() => {
        fetchQuestions();
    }, [event]);

    return { loading, error };
}