import { useContext, useState } from "react";
import { ApiService } from "../API/ApiService";
import { QuizContext } from "../context/QuizContext";
import { actionPutOriginalQestionsArray } from "../Reducer/actions";


export const useRequestQuestions = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string>('');
    const { params, dispatchQuestions } = useContext(QuizContext);

    async function fetchQuestions() {
        setLoading(true);
        try {
            const response = await ApiService.getQuestions(params);
            const questions = await response.data.results;
            dispatchQuestions(actionPutOriginalQestionsArray(questions));
        } catch (error: any) {
            setError(error.message);
        };
        setLoading(false);
    };

    const handleRequest = async () => await fetchQuestions();

    return { loading, error, handleRequest };
}