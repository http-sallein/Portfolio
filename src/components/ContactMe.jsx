import { Fragment } from "../layout/Fragment";

import { AiOutlineLinkedin as LinkedinIcon } from "react-icons/ai";
import { FaWhatsapp as WhatsappIcon} from "react-icons/fa";
import { FaInstagram as InstagramIcon} from "react-icons/fa";
import styled from "styled-components";

const Title = styled.div`

    > div {
        width: min-content;
        margin: 0 auto;

        > h2, p {
            text-align: left;
        }

        > h2 {
            font-size: 3rem;
            font-weight: 800;
            min-width: max-content;
            margin-left: -4px;
        }

        > p {
            margin-bottom: -16px;
        }
    }
`;

const Div = styled.div`

    display: flex;
    gap: 9rem;

    > section {

        h3 {
            text-align: center;
            max-width: 400px;
            font-size: 1.5rem;
            min-height: 80px;
            margin-top: 2rem;
            font-weight: normal;
        }
    }

    > section:first-child {

        > div {

            display: flex;
            flex-direction: column;
            gap: 2rem;

            span {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                background-color: white;
                border-radius: .5rem;
                padding: 1rem 2rem;

                > div {
                    font-size: 2rem;
                    margin-bottom: -.5rem;
                }

                > h4 {
                    font-size: 1rem;
                    margin-bottom: .5rem;
                }

                > p {
                    font-size: 1rem;
                }

                > a {

                    margin-top: 1rem;
                }
            }
        }         
    }

    > section:last-child {

        display: flex;
        flex-direction: column;

        > div {
            display: flex;
            flex-direction: column;
            gap: 2rem;

            > label {

                position: relative;

                width: 100%;

                > p {
                    font-size: 1rem;
                    position: absolute;
                    z-index: 1;
                    background-color: pink;
                    transform: translate(1rem, -50%);
                }

                > input {

                    width: 100%;
                    padding: 1rem;
                    border-radius: .5rem;

                }

                &:last-child {

                    input {

                        min-height: 10rem;
                    }
                }
            }
        }

        button {
            width: 12rem;
            border-radius: .5rem;
            padding: 1rem;
            margin-top: 2rem;
        }
    }
`;

export const ContactMe = () => {

    return (

        <Fragment id={'contact'}>

            <Title>

                <div>
                    <p>pensou em um projeto?</p>
                    <h2>Contate-me!</h2>
                </div>
            </Title>

            <Div>
                <section>
                    <h3> Fale comigo </h3>
            
                    <div>

                        <span>
                            <div>
                                <LinkedinIcon/>
                            </div>
                            <h4> Linkedin </h4>
                            <p>devzac.andrade@gmail.com</p>

                            <a href=""> Me escreva </a>
                        </span>

                        <span>
                            <div>

                                <WhatsappIcon/>
                            </div>
                            <h4> Whatsapp </h4>
                            <p> +55 (85) 98503-6011 </p>

                            <a href=""> Me escreva </a>
                        </span>

                        <span>
                            <div>

                                <InstagramIcon/>
                            </div>
                            <h4> Instagram </h4>
                            <p>@http.zaclimaaxs</p>

                            <a href=""> Me escreva </a>
                        </span>

                    </div>
                </section>

                <section>
                    <h3> Me escreva sobre o seu projeto </h3>

                    <div>
                        <label>
                            <p>Seu nome</p>
                            <input type="text" placeholder="Insira seu nome" />
                        </label>

                        <label>
                            <p>seu email</p>
                            <input type="text" placeholder="Insira seu email"/>
                        </label>

                        <label>
                            <p>Projeto</p>
                            <input placeholder="Descreva sobre o seu projeto"></input>
                        </label>
                    </div>

                    <button> Enviar </button>

                </section>
            </Div>
        </Fragment>
    );
}