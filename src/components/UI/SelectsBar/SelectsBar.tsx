import { useContext } from 'react';
import Select from 'react-select';
import { QuizContext } from '../../../context/QuizContext';
import { getSelectorHandle } from './handles';
import { amountOptions, difficultyOptions, getCategoryOptions } from './options';
import { customStyles, customStylesCategory, StyledContainer } from './styles';

const SelectsBar = () => {
    const { categories, params, dispatchParams } = useContext(QuizContext);
    const { handleCategoryChange, handleAmountChange, handleDifficultChange } = getSelectorHandle(params, dispatchParams);

    return (
        <StyledContainer>
            <Select 
                styles={customStylesCategory}
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

export default SelectsBar;