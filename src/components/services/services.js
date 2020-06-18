import React, { useState } from 'react';
import styled from 'styled-components'
import { Container, Row, Col } from 'reactstrap';
import { isMobile } from 'react-device-detect';

export default (props) => {
    const [services] = useState([
        { title: "CONSTRUÇÃO DE ESTRADAS", icon: "icon1.png", image: "image1.png" },
        { title: "CERTIFICAÇÃO DE MATERIAIS", icon: "icon2.png", image: "image3.png" },
        { title: "ESTRADAS E RODOVIAS", icon: "icon3.png", image: "image2.png" },
        { title: "CAMINHOS DE ACESSO", icon: "icon4.png", image: "image4.png" },
        { title: "SUBSTITUIÇÃO DE ASFALTO", icon: "icon5.png", image: "image6.png" },
        { title: "INSPEÇÃO DE REVESTIMENTO", icon: "icon6.png", image: "image5.png" }
    ])

    const makeBox = (img, icon, text, index) => (
        <Box sm="6" xs="6" md="4" key={index}>
            <img className="bg" src={require(`../../assets/services_images/${img}`)} alt="image1" />
            <BoxText>
                <img src={require(`../../assets/services_icons/${icon}`)} alt="icon1" />
                <div className="text">{text}</div>
            </BoxText>
        </Box>
    )

    return (
        <Services>
            <Title>O QUE NÓS FAZEMOS</Title>
            <Subtitle>
                Nossos serviços de construção de estradas ajudam a entender o comportamento dos materiais de estradas em relação às cargas esperadas e aos mecanismos de deterioração.
                Os serviços de construção de estradas da Paviluma são o desempenho e a durabilidade de materiais e produtos para estradas.
                </Subtitle>
            <Row >
                {services.map(({ title, icon, image }, index) => makeBox(image, icon, title, index))}
            </Row>
        </Services >
    )
}


const Services = styled(Container)`
    display:flex;
    flex-direction:column;
    padding: 100px 0;
   width:90%;
`

const Title = styled.div`
    text-align:center;
    margin: 40px auto;
    font-family: "Hind", Sans-serif;
    font-size: 34px;
    font-weight: 600;
    text-transform: uppercase;
    font-style: normal;
    text-decoration: none;
    line-height: 1.44em;
    letter-spacing: 0px;
`
const Subtitle = styled.div`
    text-align: justify;
    margin: 10px auto;

`
const Box = styled(Col)`
    overflow:hidden;
    margin-bottom: 15px;
    .bg{
        width:100%;
        border:2px solid  #FE7D0A;
        border-radius: 5px;
    }
`
const BoxText = styled.div`
    display:flex;
    
    .text{
        font-family: "Hind", Sans-serif;
        font-size: ${props => isMobile ? 10 : 20}px!important;
        font-weight: 600;
        vertical-align:middle;
        display:flex;
        justify-content:center;
        align-items:center;
    }
        img{
        max-height:50px;
        max-width:50px;
        margin:5px;
        }
`