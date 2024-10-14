import styled from "styled-components";
import { Fragment } from "../layout/Fragment";

import { FaHtml5 as HtmlIcon } from "react-icons/fa";
import { FaGitAlt as GitIcon } from "react-icons/fa6";
import { GrMysql as Mysqlcon } from "react-icons/gr";
import { TbBrandCSharp as CSharpIcon } from "react-icons/tb";
import { IoLogoJavascript as JavaScriptIcon } from "react-icons/io";
import { FaJava as JavaIcon } from "react-icons/fa";
import { SiTypescript as TypeScriptIcon } from "react-icons/si";
import { SiPostgresql as PostgreSQLIcon } from "react-icons/si";
import { FaFigma as FigmaIcon } from "react-icons/fa";
import { FaGithub as GitHubIcon } from "react-icons/fa";
import { FaReact as ReactIcon } from "react-icons/fa";
import { FaCss3 as CSSIcon} from "react-icons/fa";

const Title = styled.h2`
    font-size: 3rem;
    font-weight: bold;
`;

const Div = styled.div`

    display: flex;
    gap: 3rem;

    > section {
        display: flex;
        gap: 2rem;
        /* flex-direction: column; */
        flex-wrap: wrap;

        > span {
            display: flex;
            gap: .5rem;
            align-items: center;
            width: 10rem;
            background-color: pink;
            padding: 1rem;
            border-radius: .5rem;

            div {
                background-color: white;
                padding: .5rem;
                display: flex;
                border-radius: .5rem;
                font-size: 1.5rem;
            }
        }
    }

    > section:nth-child(1) {

        span {

            position: relative;
        }
    }

    > section:nth-child(2) {
        flex-direction: row;
        flex-wrap: wrap;
        background-color: lightblue;
        flex: 1;
    }
`;

export const Technologies = () => {

    return (

        <Fragment width={'55rem'} id={'technologies'}>

                
                <Title> Tecnologias  </Title>

                <Div>
                    {/* <section>
                        <span>Front-End</span>
                        <span>Back-End</span>
                        <span>Ferramentas</span>
                    </section> */}

                    <section>
                        <span> 
                            <div> <HtmlIcon/> </div> 
                            HTML
                        </span>

                        <span>
                            <div> <CSSIcon/> </div>
                            CSS
                        </span>

                        <span>
                            <div> <JavaScriptIcon /> </div>
                            JavaScript
                        </span>

                        <span>
                            <div> <ReactIcon /> </div>
                            React
                        </span>

                        <span>
                            <div> <GitIcon/> </div>
                            Git
                        </span>

                        <span>
                            <div> <GitHubIcon /> </div>
                            GitHub
                        </span>

                        <span>
                            <div> <FigmaIcon /> </div>
                            Figma
                        </span>

                        <span>
                            <div> <PostgreSQLIcon/> </div>
                            PostgreSQL
                        </span>

                        <span>
                            <div> <Mysqlcon/> </div>
                            MySQL
                        </span>

                        <span>
                            <div> <TypeScriptIcon /> </div>
                            TypeScript
                        </span>

                        <span>
                            <div> <JavaIcon/> </div>
                            Java
                        </span>

                        <span>
                            <div> <CSharpIcon /> </div>
                            C#
                        </span>

                    </section>
                </Div>
        </Fragment>
    );
}