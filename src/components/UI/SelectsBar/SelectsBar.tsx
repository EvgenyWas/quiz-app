import { useContext } from 'react';
import Select, { OnChangeValue } from 'react-select';
import styled from 'styled-components';
import { QuizContext } from '../../../context/QuizContext';
import { theme } from '../../../styles/theme';
import { TAmountOption, TCategoryOption, TDifficultyOption } from '../../../types/types';
import { amountOptions, getCategoryOptions, difficultyOptions } from './options';

const SelectsBar = () => {
    const { categories, setParams } = useContext(QuizContext);

    const handleCategoryChange = (
        value: OnChangeValue<TCategoryOption, false>
    ) => setParams((prevParams) => ({...prevParams, category: value?.value ?? prevParams.category}));

    const handleDifficultChange = (
        value: OnChangeValue<TDifficultyOption, false>
    ) => setParams((prevParams) => ({...prevParams, difficulty: value?.value ?? prevParams.difficulty}));

    const handleAmountChange = (
        value: OnChangeValue<TAmountOption, false>
    ) => setParams((prevParams) => ({...prevParams, amount: value?.value ?? prevParams.amount}));

    const customStyles = {
        option: (provided: any, state: any) => ({
            ...provided,
            background: state.isSelected && `${theme.colors.acceptBlue}`,
            backgroundColor: state.isFocused && `${theme.colors.acceptBlue}`,
            color: state.isFocused ? `${theme.colors.bgColor}` : state.isSelected ? `${theme.colors.bgColor}` : '',
        }),
        control: (provided: any, state: any) => ({
            ...provided,
            border: state.isFocused && `1px solid ${theme.colors.acceptBlue}`,
            boxShadow: state.isFocused && `0 0 0 1px ${theme.colors.acceptBlue}`
        }),
    };

    return (
        <StyledContainer>
            <Select 
                styles={customStyles}
                options={getCategoryOptions(categories)}
                defaultValue={getCategoryOptions(categories)[0]}
                onChange={handleCategoryChange}
            />
            <Select 
                styles={customStyles}
                options={difficultyOptions}
                defaultValue={difficultyOptions[0]}
                onChange={handleDifficultChange}
            />
            <Select 
                styles={customStyles}
                options={amountOptions}
                defaultValue={amountOptions[0]}
                onChange={handleAmountChange}
            />
        </StyledContainer>
    );
};

const StyledContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
    margin-bottom: 40px;
`

export default SelectsBar;