import React from 'react';
import styled from 'styled-components'
import { Container } from 'reactstrap';
import bgAbout from '../../assets/about/about.jpg'

export default (props) => {

    return (
        <About bg={bgAbout}>
            <Container>
                <Title>SOBRE NÓS</Title>
                <Text>
                    Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado. Se popularizou na década de 60, quando a Letraset lançou decalques contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwares de editoração eletrônica como Aldus PageMaker.
                </Text>
            </Container>
        </About >
    )
}


const About = styled.div`
   background-position: center;
   background-size: 100% auto;
   background-image: linear-gradient(to bottom, rgba(0,0,0,0.97) 0%,rgba(0,0,0,0.5) 100%), url(${props => props.bg});
   min-height: 700px;
   text-align: justify;
`
const Text = styled.div`
    font-family: "Hind", Sans-serif;
    font-size: 20px;
    font-weight: 500;
    color: #fff;
    line-height:2.5;
`;

const Title = styled.div`
    text-align:center;
    padding: 40px;
    font-family: "Hind", Sans-serif;
    font-size: 34px;
    font-weight: 600;
    text-transform: uppercase;
    font-style: normal;
    text-decoration: none;
    line-height: 1.44em;
    letter-spacing: 0px;
    color: #fff;
`
