import { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';

import { GlobalStyle } from '../styles/GlobalStyles'; 
import { light, dark } from '../styles/themes';

const Button = styled.button`

    position: absolute;
    bottom: 16px; 
    right: 16px
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
                Toggle to {isDarkMode ? 'Light' : 'Dark'} Mode
            </Button>
        </ThemeProvider>
    );
};
