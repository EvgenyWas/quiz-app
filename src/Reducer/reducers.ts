import { TAmount, TDifficulty, TParamsAction, TParamsState, TQuestionItem, TQuestionsArrayAction, TQuestionsArrayState, TQuizStatusAction, TQuizStatusState, TSortQuestionItem } from "../types/types";
import { ParamsTypesActions, QuestionsArrayTypesActions, QuizStatusTypesActions } from "./actions";

export function paramsReducer(state: TParamsState, action: TParamsAction) {
    switch (action.type) {
        case ParamsTypesActions.PUT_CATEGORY:
            return {
                ...state,
                category: action.payload as number
            };
        case ParamsTypesActions.PUT_AMOUNT:
            return {
                ...state,
                amount: action.payload as TAmount
            };
        case ParamsTypesActions.PUT_DIFFICULTY:
            return {
                ...state,
                difficulty: action.payload as TDifficulty
            };
        default:
            return state;
    }
};

export function quizStatusReducer(state: TQuizStatusState, action: TQuizStatusAction) {
    switch (action.type) {
        case QuizStatusTypesActions.CHANGE_IS_START:
            return {
                ...state,
                isStart: action.payload
            };
        case QuizStatusTypesActions.CHANGE_IS_FINISH:
            return {
                ...state,
                isFinish: action.payload
            };
        default:
            return state;
    }
};

export function questionsReducer(state: TQuestionsArrayState, action: TQuestionsArrayAction) {
    switch (action.type) {
        case QuestionsArrayTypesActions.PUT_ORIGINAL_QUESTIONS:
            return {
                ...state,
                originalQuestionsArray: action.payload as TQuestionItem[],
            };
        case QuestionsArrayTypesActions.PUT_SORT_QUESTIONS:
            return {
                ...state,
                sortQuestionsArray: action.payload as TSortQuestionItem[],
            };
        default:
            return state;
    }
};