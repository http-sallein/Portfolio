import { Fragment } from "../layout/Fragment";

import styled from "styled-components";

import { FaComputer as ComputerIcon } from "react-icons/fa6";
import { BsLayoutWtf as LayoutIcon} from "react-icons/bs";
import { MdOutlineAppSettingsAlt as MaintenceIcon} from "react-icons/md";


const Title = styled.h2`

    font-size: 3rem;
    font-weight: 800;
    text-align: center;
`;

const Section = styled.section`

    display: flex;
    justify-content: center;
    gap: 2rem;
    flex-wrap: wrap;


    h3 { font-size: 2rem; max-width: 300px; text-align: center;}

    > div {
        border: 1px solid black;
        padding: 1rem;
        min-height: 450px;
        max-width: 350px;
        border-radius: 1rem;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
    }

    span {
        font-size: 4rem;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    p {
        max-width: 400px;
        text-align: center;
    }
`;
export const Services = () => {

    return (

        <Fragment flexDirection={'column'}>

            <Title> Serviços. </Title>

            <Section>

                <div>

                    <span>
                        <ComputerIcon />
                        <h3> Criação de websites </h3>  
                    </span>

                    <p> 
                        Desenvolvo aplicações desde as mais simples como uma Landing Page até projetos mais complexos como e-commerce
                    </p>

                </div>

                <div>

                    <span>
                        <LayoutIcon />
                        <h3> Criação de layouts & logotipos </h3>
                    </span>

                    <p> 
                        Construo designers feito no figma desde o zero seguindo as melhores práticas de um UI/UX Designer 
                    </p>

                </div>

                <div>

                    <span>
                        <MaintenceIcon />
                        <h3> Otimização e/ou manutenção de sistemas web </h3>
                    </span>

                    <p> 
                        Atuo como otimizador ou faço manutenção do seu sistema já lançado para o usuário final.
                    </p>
                </div>
            </Section>
        </Fragment>
    );
}