import { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';

import { GlobalStyle } from '../styles/GlobalStyles'; 
import { light, dark } from '../styles/themes';

import { MdOutlineDarkMode as MoonIcon} from "react-icons/md";
import { CiSun as SunIcon} from "react-icons/ci";

const Button = styled.button`

    font-size: 3rem; 
    display: flex;
    background-color: transparent;
    border: none;
    color: ${({ theme }) => theme.color};


`;

export const ThemeToggle = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
    };

    return (
        <ThemeProvider theme={isDarkMode ? dark : light}>
            <GlobalStyle />
            <Button onClick={toggleTheme}>
                {isDarkMode ? <SunIcon/> : <MoonIcon/>}
            </Button>
        </ThemeProvider>
    );
};
