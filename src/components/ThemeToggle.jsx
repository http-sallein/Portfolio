/* eslint-disable react/prop-types */
import styled from 'styled-components';
import { MdOutlineDarkMode as MoonIcon } from 'react-icons/md';
import { CiSun as SunIcon } from 'react-icons/ci';

const Button = styled.button`
    font-size: 2rem;
    display: flex;
    background-color: transparent;
    border: none;
    color: ${({ theme }) => theme.fontColor};
`;

export const ThemeToggle = ({ toggleTheme, isDarkMode }) => {
    return (
        <Button onClick={toggleTheme}>
            {isDarkMode ? <SunIcon /> : <MoonIcon />}
        </Button>
    );
};
