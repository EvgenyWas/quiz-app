import styled from "styled-components";
import { theme } from "../../../styles/theme";

export  const customStyles = {
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

export  const customStylesCategory = {
    option: (provided: any, state: any) => ({
        ...provided,
        background: state.isSelected && `${theme.colors.acceptBlue}`,
        backgroundColor: state.isFocused && `${theme.colors.acceptBlue}`,
        color: state.isFocused ? `${theme.colors.bgColor}` : state.isSelected ? `${theme.colors.bgColor}` : '',
    }),
    control: (provided: any, state: any) => ({
        ...provided,
        minWidth: '200px',
        border: state.isFocused && `1px solid ${theme.colors.acceptBlue}`,
        boxShadow: state.isFocused && `0 0 0 1px ${theme.colors.acceptBlue}`
    }),
};

export const StyledContainer = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: center;
gap: 20px;
margin-bottom: 40px;
`