import styled from 'styled-components';

import { Fragment } from "../layout/Fragment";

const Title = styled.h2`

    font-size: 3rem;
    font-weight: 800;
`

const Paragraph = styled.p`
    max-width: 800px;
`

const MoreContainer = styled.div`
    position: relative;
    margin-top: 5rem;


    > div {
        width: 100%;
        border: 1px solid pink;
    }

    > button {
        position: absolute;
        border: none;
        top: 50%;
        padding: 1.5rem;
        font-size: 1.2rem;
        border-radius: 2rem;
        left: 50%;
        transform: translate(-50%, -50%);
    }
`;

export const AboutMe = () => {

    return (

        <Fragment flexDirection={'column'} id={'aboutMe'}>

            <Title> Quem sou eu? </Title>

            <Paragraph>
                Em 2006, Fortaleza, Ceará, viu nascer o protagonista dessa história — eu! Desde pequeno, sempre fui fascinado por &quot;coisas de computador&quot; (sim, era assim que a gente chamava tecnologia na minha época). Essa paixão me levou a cursar Técnico em Informática durante o ensino médio, onde tive meu primeiro contato com programação (HTML, CSS, JS, PHP...). Foi amor à primeira vista.

                <br/><br/>
                Em 2023, me formei como Técnico em Informática e, no ano seguinte, aos 18 anos, consegui uma bolsa integral pelo ProUni para cursar Engenharia de Software. Paralelamente, comecei e concluí o curso de Assistente em TI pelo Senac-CE até o fim de 2024, participei da <a href="https://geracaotech.iel-ce.org.br/" target='__blank'> Geração Tech </a> (1ª edição) do meu estado e da turma de jovens talentos de TI do Instituto Algar. Em 2025, fui selecionado para a turma de 80 brasileiros da Jala University — mais um passo nessa jornada incrível!
                
            </Paragraph>

            <MoreContainer>
                <div></div>
                <button>Ver mais sobre mim!</button>
            </MoreContainer>

        </Fragment>
    );
}