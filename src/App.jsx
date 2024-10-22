import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './styles/GlobalStyles';
import { light, dark } from './styles/themes';

import { Home } from './components/Home';
import { AboutMe } from './components/AboutMe';
import { Projects } from './components/Projects';
import { Services } from './components/Services';
import { Trajectory } from './components/Trajectory';
import { Technologies } from './components/Technologies';
import { ContactMe } from './components/ContactMe';
import { Header } from './components/Header'; // O Header vai conter o ThemeToggle

export const App = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
    };

    return (
        <ThemeProvider theme={isDarkMode ? dark : light}>
            <GlobalStyle />
            <Header toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
            <Home />
            <AboutMe />
            <Projects />
            <Services />
            <Trajectory />
            <Technologies />
            <ContactMe />
        </ThemeProvider>
    );
};
