import { useState } from "react";
import styled from "styled-components";
import { Fragment } from "../layout/Fragment";

const Section = styled.section`
    padding: 2rem 0;
    text-align: center;
    min-height: 80vh;

`;

const Title = styled.h2`
    font-size: 3rem;
    font-weight: bold;
    margin-bottom: 0.5rem;
`;

const Subtitle = styled.span`
    font-size: 1.5rem;
    color: #888;
    margin-bottom: 2rem;
    margin-top: -.5rem;
    
    display: block;
`;

const Container = styled.div`
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Tabs = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 2rem;
`;

const TabButton = styled.div`
    font-size: 1.5rem;
    font-weight: 500;
    color: ${({ active }) => (active ? "#333" : "#aaa")};
    margin: 0 1rem;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    border: 1px solid #333;
    padding: 1rem;
    border-radius: .5rem;

    &:hover {
        color: #333;
    }
`;

const Sections = styled.div`
    display: grid;
    grid-template-columns: 1fr;
`;

const Content = styled.div`
    display: ${({ active }) => (active ? "block" : "none")};
`;

const Data = styled.div`
    display: grid;
    grid-template-columns: 1fr max-content 1fr;
    column-gap: 1.5rem;
    margin-bottom: 1.5rem;


    @media screen and (max-width: 350px) {
        column-gap: 0.5rem;
    }
`;

const TitleData = styled.h3`
    font-size: 1.2rem;
    font-weight: 500;
    max-width: 200px;
    margin: auto;

`;

const SubtitleData = styled.span`
    font-size: 1rem;
    margin-top: .5rem;
    color: #555;
    max-width: 300px;
    display: inline-block;
    margin-bottom: 0.5rem;
`;

const Calendar = styled.div`
    font-size: 0.875rem;
    color: #888;
`;

const Rounder = styled.span`
    display: inline-block;
    width: 13px;
    height: 13px;
    background-color: #555;
    border-radius: 50%;
`;

const Line = styled.span`
    display: block;
    width: 1px;
    height: 100%;
    background-color: #555;
    transform: translate(6px, -7px);
`;

export const Trajectory = () => {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    };

    return (

        <Fragment id="trajectory">    
            <Section>
                <Title>Trajetória.</Title>
                <Subtitle>Minha jornada pessoal</Subtitle>

                <Container>
                    <Tabs>
                        <TabButton
                            active={toggleState === 1}
                            onClick={() => toggleTab(1)}
                        >
                            Educação
                        </TabButton>

                        <TabButton
                            active={toggleState === 2}
                            onClick={() => toggleTab(2)}
                        >
                            Experiência
                        </TabButton>
                    </Tabs>

                    <Sections>
                        <Content active={toggleState === 1}>
                            <Data>
                                <div>
                                    <TitleData>Engenharia de Software</TitleData>
                                    <SubtitleData>Jala University</SubtitleData>
                                    <Calendar>
                                        2025 - Presente
                                    </Calendar>
                                </div>
                                <div>
                                    <Rounder />
                                    <Line />
                                </div>
                            </Data>

                            <Data>
                                <div></div>
                                <div>
                                    <Rounder />
                                    <Line />
                                </div>
                                <div>
                                    <TitleData>Desenvolvimento Full Stack</TitleData>
                                    <SubtitleData>Digital College | Geração Tech (1a Edição)</SubtitleData>
                                    <Calendar>
                                        ago/2024 - out/2024
                                    </Calendar>
                                </div>
                            </Data>

                            <Data>
                                <div>
                                    <TitleData>AWS Academy Cloud Foundations</TitleData>
                                    <SubtitleData>Amazon Web Services (AWS)</SubtitleData>
                                    <Calendar>
                                        jun/2023
                                    </Calendar>
                                </div>

                                <div>
                                    <Rounder />
                                    <Line />
                                </div>
                            </Data>

                            <Data>
                                <div></div>
                                <div>
                                    <Rounder />
                                    <Line />
                                </div>
                                <div>
                                    <TitleData>Suporte Técnico em TI</TitleData>
                                    <SubtitleData>Dell Lead</SubtitleData>
                                    <Calendar>
                                        fev/2023 - abril/2023
                                    </Calendar>
                                </div>
                            </Data>

                            <Data>
                                <div>
                                    <TitleData>Técnico em Informática</TitleData>
                                    <SubtitleData>EEEP Professor Onélio Porto</SubtitleData>
                                    <Calendar>
                                        2021 - 2023
                                    </Calendar>
                                </div>
                                <div>
                                    <Rounder />
                                </div>
                            </Data>
                        </Content>

                        <Content active={toggleState === 2}>

                            <Data>

                                <div>
                                    <TitleData>Freelancer</TitleData>
                                    <SubtitleData>Workana</SubtitleData>
                                    <Calendar>
                                        2025 - Presente
                                    </Calendar>
                                </div>

                                <div>
                                    <Rounder />
                                    <Line />
                                </div>
                            </Data>

                            <Data>
                                <div></div>
                                <div>
                                    <Rounder />
                                    <Line />
                                </div>
                                <div>
                                    <TitleData>Voluntariado de TI</TitleData>
                                    <SubtitleData>Atados</SubtitleData>
                                    <Calendar>
                                        out/2024 - presente
                                    </Calendar>
                                </div>

                            </Data>

                            <Data>

                                <div>
                                    <TitleData>Estágiario Full Stack</TitleData>
                                    <SubtitleData>Superintendência de Obras Públicas do Ceará (SOP-CE)</SubtitleData>
                                    <Calendar>
                                        ago/2023 - dez/2023
                                    </Calendar>
                                </div>

                                <div>
                                    <Rounder />
                                </div>
                            </Data>
                        </Content>
                    </Sections>
                </Container>
            </Section>
        </Fragment>
    );
}
