import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { IoHomeOutline as HomeIcon } from "react-icons/io5";
import { CgProfile as AboutMeIcon } from "react-icons/cg";
import { LuHammer as ProjectsIcon } from "react-icons/lu";
import { MdOutlineTranslate as TranslateIcon } from "react-icons/md";
import { GrServices as ServiceIcon} from "react-icons/gr";
import { MdOutlineConnectWithoutContact as ContactMeIcon} from "react-icons/md";
import { ThemeToggle } from './ThemeToggle';

const Head = styled.header`
    position: fixed;
    left: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    top: 0;
    height: 100%;

    > section {
        height: 95%;
        width: 5rem;
        border-radius: 1rem;
        padding: 1rem;
        background-color: pink;

        > figure {
            width: 100%;
            border-radius: .5rem;

            > img {
                width: 100%;
                border-radius: inherit;
            }
        } 

        > hr {
            margin: 2rem 0;
        }

        > div {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-between;
            height: 85%;
            font-size: 2rem;    

            > ul {
                display: inherit;
                flex-direction: inherit;
                gap: 1rem;
                align-items: inherit;

                > a {
                    display: flex;
                    padding: .5rem;
                    border-radius: .5rem;
                }
            }

            > ul:last-child {
                gap: 1rem;
            }
        }

        .active {
            background-color: blue;
        }
    }
`;

export const Header = () => {
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
                        <a href="#services"  className={activeSection === 'contact' ? 'active' : ''}> <ContactMeIcon /> </a>
                    </ul>

                    <ul>
                        <li><TranslateIcon /></li>
                        <li><ThemeToggle /></li>
                    </ul>
                </div>
            </section>
        </Head>
    );
};
