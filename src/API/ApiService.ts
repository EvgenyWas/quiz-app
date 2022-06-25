import axios from "axios";
import { TQuestionsParams } from "../types/types";

export class ApiService {
    private static CATEGORIES_URL = 'https://opentdb.com/api_category.php';
    private static QUESTIONS_URL = 'https://opentdb.com/api.php';

    static async getCategories() {
        try {
            const response = await axios.get(this.CATEGORIES_URL);

            return response;
        } catch (error) {
            throw new Error('Unable to get a token.');
        }
    };

    static async getQuestions({ amount, category, difficulty }: TQuestionsParams) {
        try {
            const response = await axios.get(this.QUESTIONS_URL, {
                params: {
                    amount: amount,
                    category: category,
                    difficulty: difficulty,
                    type: 'multiple',
                    encode: 'base64',
                }
            });

            return response;
        } catch (error) {
            throw new Error('Unable to get a token.');
        }
    };
};