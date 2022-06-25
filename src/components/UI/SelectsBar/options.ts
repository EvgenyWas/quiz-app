import { TAmountOption, TCategory, TCategoryOption, TDifficultyOption } from "../../../types/types";

function getCategoryOptions(categories: TCategory[]) {
    const categoryOptions: TCategoryOption[] = categories.map((category) => {
        return {
            value: category.id,
            label: category.name,
        }
    });

    return categoryOptions;
};

const difficultyOptions: TDifficultyOption[] = [
    { value: 'easy', label: 'Easy' },
    { value: 'medium', label: 'Medium' },
    { value: 'hard', label: 'Hard' },
];

const amountOptions: TAmountOption[] = [
    { value: 5, label: 5 },
    { value: 10, label: 10 },
    { value: 15, label: 15 },
    { value: 20, label: 20 },
];

export { getCategoryOptions, difficultyOptions, amountOptions };
