import styled from "styled-components";

import { CiLinkedin as LinkedinIcon} from "react-icons/ci";
import { FiGithub as GitHubIcon } from "react-icons/fi";
import { FaInstagram as InstagramIcon } from "react-icons/fa";

import HomeImage from "../assets/homeImg.jpg";

import { Fragment } from "../layout/Fragment";

const Figure = styled.figure`
    object-fit: cover;
    width: 50%;
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
    gap: .5rem;
    
    > div {

        > p {
            line-height: .4;
        }
    }

    h1 {
        font-size: 4rem;
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
    }
`

export const Home = () => {

    return (

        <Fragment width={"800px"} >
            <Figure>
                <img src={HomeImage} alt="Image which represent me" />
            </Figure>

            <Section>

                <div>
                    <p>Prazer, eu sou </p>

                    <h1>Isaac Andrade</h1>
                </div>
                
                <p>
                    Técnico em informática e graduando em Engenharia de Software na Jala University!
                </p>

                <SocialMedias>
                    <li> <a href="" target="__blank"> <LinkedinIcon/> </a> </li>
                    <li> <a href="" target="__blank"> <GitHubIcon/> </a> </li>
                    <li> <a href="" target="__blank"> <InstagramIcon/> </a> </li>
                </SocialMedias>

            </Section>
        </Fragment>
    )
}