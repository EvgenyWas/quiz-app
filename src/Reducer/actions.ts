import { TAmount, TDifficulty, TQuestionItem, TSortQuestionItem } from "../types/types";

export enum ParamsTypesActions {
    PUT_CATEGORY = 'PUT_CATEGORY',
    PUT_AMOUNT = 'PUT_AMOUNT',
    PUT_DIFFICULTY = 'PUT_DIFFICULTY',
};

export enum QuizStatusTypesActions {
    CHANGE_IS_START = 'CHANGE_IS_START',
    CHANGE_IS_FINISH = 'CHANGE_IS_FINISH',
};

export enum QuestionsArrayTypesActions {
    PUT_ORIGINAL_QUESTIONS = 'PUT_ORIGINAL_QUESTIONS',
    PUT_SORT_QUESTIONS = 'PUT_SORT_QUESTIONS',
}

export function actionPutCategory(category: number) {
    return {
        type: ParamsTypesActions.PUT_CATEGORY,
        payload: category
    };
};

export function actionPutAmount(amount: TAmount) {
    return {
        type: ParamsTypesActions.PUT_AMOUNT,
        payload: amount
    };
};

export function actionPutDifficulty(difficulty: TDifficulty) {
    return {
        type: ParamsTypesActions.PUT_DIFFICULTY,
        payload: difficulty
    };
};

export function actionChangeIsStart(isStart: boolean) {
    return {
        type: QuizStatusTypesActions.CHANGE_IS_START,
        payload: isStart
    };
};

export function actionChangeIsFinish(isFinish: boolean) {
    return {
        type: QuizStatusTypesActions.CHANGE_IS_FINISH,
        payload: isFinish
    };
};

export function actionPutOriginalQestionsArray(originalQuestionsArray: TQuestionItem[]) {
    return {
        type: QuestionsArrayTypesActions.PUT_ORIGINAL_QUESTIONS,
        payload: originalQuestionsArray
    };
};

export function actionPutSortQestionsArray(sortQuestionsArray: TSortQuestionItem[]) {
    return {
        type: QuestionsArrayTypesActions.PUT_SORT_QUESTIONS,
        payload: sortQuestionsArray
    };
};