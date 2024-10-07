import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

    @font-face {
        font-family: "Lexend Deca", sans-serif;
        src: url('https://fonts.googleapis.com/css2?family=Lexend+Deca:wght@100..900&display=swap');
    }

    * { 
        padding: 0; margin: 0; box-sizing: border-box 
    }

    body { 
        display: flex;
        align-items: center;
        justify-content: center;
        min-height: 100vh;
        font-family: "Lexend Deca", sans-serif;

        background-color: ${({ theme }) => theme.background};
        color: ${({ theme }) => theme.color};
        transition: background-color 0.3s ease, color 0.3s ease;
    }

    li { list-style-type: none }

`;