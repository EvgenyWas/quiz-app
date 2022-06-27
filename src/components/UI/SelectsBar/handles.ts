import { Dispatch } from "react";
import { OnChangeValue } from "react-select";
import { actionPutAmount, actionPutCategory, actionPutDifficulty } from "../../../Reducer/actions";
import { TAmountOption, TCategoryOption, TDifficultyOption, TParamsAction, TQuestionsParams } from "../../../types/types";

export const getSelectorHandle = (params: TQuestionsParams, dispatchParams: Dispatch<TParamsAction>) => {
    const handleCategoryChange = (
        value: OnChangeValue<TCategoryOption, false>
    ) => dispatchParams(actionPutCategory(value?.value ?? params.category));

    const handleDifficultChange = (
        value: OnChangeValue<TDifficultyOption, false>
    ) => dispatchParams(actionPutDifficulty(value?.value ?? params.difficulty));

    const handleAmountChange = (
        value: OnChangeValue<TAmountOption, false>
    ) => dispatchParams(actionPutAmount(value?.value ?? params.amount));

    return { handleCategoryChange, handleDifficultChange, handleAmountChange }
}