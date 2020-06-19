import React, { useState } from "react";
import styled from "styled-components";
import { Container, Row, Col } from "reactstrap";
import bgAbout from "../../assets/about/about.jpg";
import { isMobile } from "react-device-detect";

export default (props) => {
  const [diferencies] = useState([
    { title: "EMPRESA VENCEDORA", icon: "medal.png" },
    { title: "GESTÃO BEM DEFINIDA", icon: "partnership.png" },
    { title: "COMPREENDER O CLIENTE", icon: "money.png" },
    { title: "COMPROMISSO COM O PROJETO", icon: "work.png" },
  ]);

  const diferecies = () =>
    diferencies.map((it, i) => (
      <ItemDiference key={i} sm="6" xs="6" md="3">
        <div className="icon">
          <img src={require(`../../assets/about/${it.icon}`)} alt={it.title} />
        </div>
        <div className="textInfo">{it.title}</div>
      </ItemDiference>
    ));
  return (
    <About bg={bgAbout}>
      <Container>
        <Title>SOBRE NÓS</Title>
        <Text>
          Lorem Ipsum é simplesmente uma simulação de texto da indústria
          tipográfica e de impressos, e vem sendo utilizado desde o século XVI,
          quando um impressor desconhecido pegou uma bandeja de tipos e os
          embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum
          sobreviveu não só a cinco séculos, como também ao salto para a
          editoração eletrônica, permanecendo essencialmente inalterado. Se
          popularizou na década de 60, quando a Letraset lançou decalques
          contendo passagens de Lorem Ipsum, e mais recentemente quando passou a
          ser integrado a softwares de editoração eletrônica como Aldus
          PageMaker.
        </Text>
        <Diference>
          <SubTitle>NOSSO DIFERENCIAL</SubTitle>
          <Row className="content">{diferecies()}</Row>
        </Diference>
      </Container>
    </About>
  );
};

const About = styled.div`
  padding: 50px 0;
  background-position: center;
  background-size: ${(props) => (!isMobile ? "100% auto" : "auto 100%")};
  background-repeat: no-repeat;
  background-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.97) 0%,
      rgba(0, 0, 0, 0.5) 100%
    ),
    url(${(props) => props.bg});
`;
const Text = styled.div`
  font-family: "Hind", Sans-serif;
  font-size: 16px;
  font-weight: 500;
  color: #fff;
  line-height: 2.5;
  text-align: justify;
`;

const Title = styled.div`
  text-align: center;
  padding: 20px;
  font-family: "Hind", Sans-serif;
  font-size: 24px;
  font-weight: 600;
  text-transform: uppercase;
  font-style: normal;
  text-decoration: none;
  line-height: 1.44em;
  letter-spacing: 0px;
  color: #fff;
`;

const Diference = styled.div`
  padding-top: 10px;
  padding-bottom: 20px;
  display: flex;
  flex-direction: column;
  .content {
    display: flex;
    justify-content: space-between;
  }
`;
const SubTitle = styled(Title)`
  font-size: 18px;
  line-height: 1em;
  text-align: center;
  margin-top: 50px;
  margin-bottom: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ItemDiference = styled(Col)`
  display: flex;
  margin: 30px auto;
  .icon {
    background-color: #fe7d0a;
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: 60px !important;
    height: 60px !important;
    border-radius: 60px;
    img {
      max-width: ${(props) => (isMobile ? 25 : 35)}px;
      max-height: ${(props) => (isMobile ? 25 : 35)}px;
    }
  }
  .textInfo {
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fe7d0a;
    font-family: "Hind", Sans-serif;
    font-size: 14px;
    font-weight: 700;
    text-transform: uppercase;
    font-style: normal;
    text-decoration: none;
    line-height: 1.5em;
    padding: 5px;
  }
`;
