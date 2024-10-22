import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

    @font-face {
        font-family: "Lexend Deca", sans-serif;
        src: url('https://fonts.googleapis.com/css2?family=Lexend+Deca:wght@100..900&display=swap');
    }

    html {
        scroll-behavior: smooth;
    }

    * { 
        padding: 0; margin: 0; box-sizing: border-box 
    }

    body { 
        position: absolute;
        width: calc(100% - 120px);
        display: flex;
        align-items: center;
        justify-content: center;
        right: 0;
        min-height: 100vh;
        font-family: "Lexend Deca", sans-serif;

        background-color: ${({ theme }) => theme.backgroundColor};
        color: ${({ theme }) => theme.fontColor};

        transition: background-color 0.3s ease, color 0.3s ease;

        user-select: none;  

        @media screen and (max-width: 768px){
            width: 100vw;
        }
    }

    li { list-style-type: none }

    p { font-size: 1.5rem; line-height: 1.3 }

    a {
        color: ${({ theme }) => theme.linkColor};
        border: 1px solid transparent;
        text-underline-offset: 4px;
    }
`;