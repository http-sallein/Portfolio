import styled from "styled-components";

import { FaExternalLinkAlt as LinkIcon } from "react-icons/fa";

import { Fragment } from "../layout/Fragment";

import test from './../assets/homeImg.jpg';

const Title = styled.h2`
    font-size: 3rem;
    font-weight: 800;
`;

const Section = styled.section`

    display: flex;
    flex-wrap: wrap;

    justify-content: center;

    > div {
        width: 20rem;
        height: 45rem;

        cursor: zoom-in;

        overflow: hidden;
        position: relative;

        background-color: pink;

        transition: all .2s ease;

        > figure {

            filter: grayscale(10);
            height: 100%;
            transition: all .2s ease;

            > img {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
        }

        > p {

            position: absolute;
            bottom:  -30px;
            padding: 0 1rem;
            background: #252a2f;
            width: 100%;
            color: white;
            transition: all .2s ease;
        }

        > span {

            position: absolute;
            background-color: transparent;
            color: transparent;
            cursor: pointer;
            z-index: 1;
            width: min-content;
            padding: .5rem;
            font-size: 1.5rem;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 100%;
            transition: all .2s ease;
        }

        &:hover {

            > figure {filter: initial}

            > p {

                bottom: 0;
            }

            > span {
                top: 1rem;
                right: 1rem;
                background-color: white;
                color: black;
            }
        }
    }
`;

export const Projects = () => {

    return (

        <Fragment flexDirection={'column'}>

            <Title>Projetos.</Title>

            <Section>
                <div>
                    <figure>
                        <img src={test} alt="" />
                    </figure>
                    <p>LandingPage</p>

                    <span>
                        <LinkIcon/>
                    </span>
                </div>
                <div>
                    <figure>
                        <img src={test} alt="" />
                    </figure>
                    <p>LandingPage</p>

                    <span>
                        <LinkIcon/>
                    </span>
                </div>
                <div>
                    <figure>
                        <img src={test} alt="" />
                    </figure>
                    <p>LandingPage</p>

                    <span>
                        <LinkIcon/>
                    </span>
                </div>
            </Section>
        </Fragment>
    );
}