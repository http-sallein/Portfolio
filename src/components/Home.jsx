import styled from "styled-components";

import { FiGithub as GitHubIcon } from "react-icons/fi";
import { FaInstagram as InstagramIcon } from "react-icons/fa";
import { AiOutlineLinkedin as LinkedinIcon } from "react-icons/ai";

import HomeImage from "../assets/homeImg.jpg";

import { Fragment } from "../layout/Fragment";

const Div = styled.div`
    min-height: 100vh;
    display: flex;
    justify-content: center;
    gap:2rem;
    margin-bottom: -20rem;
    align-items: center;
`;

const Figure = styled.figure`
    object-fit: cover;
    width: 260px;
    border-radius: 8px;

    > img {
        object-fit: inherit;
        border-radius: inherit;
        width: 100%;
        height: 100%;
    }
`;

const Section = styled.section`

    display: flex;
    flex-direction: column;
    align-items: start;

    gap: .5rem;
    
    > div {

        h1 {
            font-size: 4rem;
            text-align: left;
            font-weight: 900;
            margin-left: -5px;
        }

        > p {
            line-height: 0;
            margin-left: -2px;
            margin-bottom: -5px;
        }
    }

    p {
        max-width: 500px;
    }

    `;

const SocialMedias = styled.div`

    display: flex;
    gap: 1.5rem;
    align-items: center;
    margin-top: 8px;

    > li {
        font-size: 2rem;
    }

    > li:first-child {
        font-size: 2.5rem;
        margin-left: -4px;
    }
`

export const Home = () => {

    return (

        <Fragment justifyContent="center" alignItems="center" isWithDiv={0}>

            <Div>

                <Figure>
                    <img src={HomeImage} alt="Image which represent me" />
                </Figure>

                <Section>

                    <div>
                        <p>Prazer, eu sou </p>
                        <h1>Isaac Andrade</h1>
                    </div>
                    
                    <p>
                        Técnico em informática e graduando em Engenharia de Software na <a href="https://jala.university/" target="__blank">@JalaUniversity!</a>
                    </p>

                    <SocialMedias>
                        <li> <a href="" target="__blank"> <LinkedinIcon/> </a> </li>
                        <li> <a href="" target="__blank"> <GitHubIcon/> </a> </li>
                        <li> <a href="" target="__blank"> <InstagramIcon/> </a> </li>
                    </SocialMedias>

                </Section>
            </Div>
        </Fragment>
    )
}