/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';

import styled from 'styled-components';

import { IoHomeOutline as HomeIcon } from "react-icons/io5";
import { CgProfile as AboutMeIcon } from "react-icons/cg";
import { LuHammer as ProjectsIcon } from "react-icons/lu";
import { MdOutlineTranslate as TranslateIcon } from "react-icons/md";
import { GrServices as ServiceIcon} from "react-icons/gr";
import { MdOutlineConnectWithoutContact as ContactMeIcon} from "react-icons/md";
import { GiPathDistance as TrajectoryIcon} from "react-icons/gi";
import { GrTechnology as TechnologiesIcon} from "react-icons/gr";

import { ThemeToggle } from './ThemeToggle';

const Head = styled.header`
    position: fixed;
    left: 1rem;
    display: flex;
    z-index: 1;
    align-items: center;
    justify-content: center;
    top: 0;
    height: 100%;

    > section {


        height: 95%;
        width: 4rem;
        border-radius: 1rem;
        padding: 1rem 2.5rem;
        display: flex;
        justify-content: space-around;
        flex-direction: column;
        align-items: center;
        
        background-color: ${({ theme }) => theme.navbarColor};
        box-shadow: 0px 0px 10px 5px #0000001e;


        backdrop-filter: blur(4px);

        > figure {
            width: 3rem;
            border-radius: .5rem;

            > img {
                width: 100%;
                border-radius: inherit;
            }
        } 

        > hr {
            margin: 1rem 0;

            background-color: ${({ theme }) => theme.backgroundColor};

            height: 1px;
            width: 50px;
        }

        > div {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-between;
            height: 85%;
            font-size: 1.5rem;    

            > ul {
                display: inherit;
                flex-direction: inherit;
                gap: 1rem;
                align-items: inherit;

                > a {
                    display: flex;
                    padding: .5rem;                    
                    border-radius: .5rem;
                    border-radius: .5rem;

                    color: ${({ theme }) => theme.fontColor};

                    &.active {
                        background-color: ${({ theme }) => theme.fontColor};
                        color: ${({ theme }) => theme.backgroundColor};
                    }
                }
            }

            > ul:last-child {
                gap: 1rem;
            }
        }
        .section {
            scroll-snap-align: start;
        }
    }

    @media screen and (max-width: 768px) {

        width: 100vw;
        height: 4rem;
        bottom: 1rem;
        left: 0;


        top: initial;

        > section {

            flex-direction: row;
            width: 95%;
            height: 4rem;


            > div {
                width: 85%;
                flex-direction: row;
            }
        }
    }
`;

export const Header = ({ toggleTheme, isDarkMode }) => {
    const [activeSection, setActiveSection] = useState(null);

    useEffect(() => {
        const sections = document.querySelectorAll('.section');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        }, { threshold: 0.5 }); // Ajuste do threshold para melhorar a detecção de seção

        sections.forEach(section => observer.observe(section));

        return () => {
            sections.forEach(section => observer.unobserve(section)); // Limpeza correta do observer
        };
    }, []);

    return (
        <Head>
            <section>
                <figure>
                    <img src="https://github.com/http-sallein.png" alt="profile photo" />
                </figure>

                <hr />

                <div>
                    <ul>
                        <a href="#home" className={activeSection === 'home' ? 'active' : ''}><HomeIcon /></a>
                        <a href="#aboutMe" className={activeSection === 'aboutMe' ? 'active' : ''}><AboutMeIcon /></a>
                        <a href="#projects" className={activeSection === 'projects' ? 'active' : ''}><ProjectsIcon /></a>
                        <a href="#services"  className={activeSection === 'services' ? 'active' : ''}> <ServiceIcon /> </a>
                        <a href="#trajectory"  className={activeSection === 'trajectory' ? 'active' : ''}> <TrajectoryIcon /> </a>
                        <a href="#technologies" className={activeSection === 'technologies' ? 'active' : ''}> <TechnologiesIcon /> </a>
                        <a href="#contact"  className={activeSection === 'contact' ? 'active' : ''}> <ContactMeIcon /> </a>
                    </ul>

                    <ul>
                        <li><TranslateIcon /></li>
                        <li> <ThemeToggle toggleTheme={toggleTheme} isDarkMode={isDarkMode} /> </li>
                    </ul>
                </div>
            </section>
        </Head>
    );
};
