import styled from 'styled-components';

import { IoHomeOutline as HomeIcon} from "react-icons/io5";
import { CgProfile as AboutMeIcon} from "react-icons/cg";
import { LuHammer as ProjectsIcon} from "react-icons/lu";
import { MdOutlineTranslate as TranslateIcon} from "react-icons/md";

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
                gap: 2rem;
                align-items: inherit;
            }

            > ul:last-child {
                gap: 1rem;
            }
        }
    }
`;

export const Header = () => {

    return (

        <Head>

            <section>

                <figure>
                    <img src="https://github.com/http-sallein.png" alt="profile photo" />
                </figure>

                <hr/>


                <div>

                    <ul>
                        <li> <HomeIcon /> </li>
                        <li> <AboutMeIcon /> </li>
                        <li> <ProjectsIcon /> </li>
                    </ul>

                    <ul>
                        <li> <TranslateIcon /> </li>
                        <li> <ThemeToggle /> </li>
                    </ul>
                </div>
            </section>
        </Head>
    )
}