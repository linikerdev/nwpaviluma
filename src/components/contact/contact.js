import React, { useState } from "react";
import styled from "styled-components";
import {
  Container,
  Row,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
} from "reactstrap";
import {
  FaMapMarkerAlt as IconMap,
  FaEnvelope as IconEmail,
  FaPhoneAlt as IconPhone,
} from "react-icons/fa";

export default (props) => {
  const [infoEmail, setInfo] = useState({});

  const handleChange = (event) => {
    setInfo({
      ...infoEmail,
      [event.target.name]: event.target.value,
    });
  };

  const sendEmail = () =>
    !invalidForm ? console.log(infoEmail) : console.log("erro");

  const invalidForm = !infoEmail.name || !infoEmail.email || !infoEmail.message;
  return (
    <Contact>
      <Container>
        <Title>FALE CONOSCO</Title>
        <Row>
          <Col md="5" xs="12" sm="12">
            <InfoBox border>
              <div className="icon">
                <IconEmail />
              </div>
              <div className="text">contato@nwpaviluma.com.br</div>
            </InfoBox>
            <InfoBox border>
              <div className="icon">
                <IconPhone />
              </div>
              <div className="text">(22) 2651-9699</div>
            </InfoBox>
            <InfoBox>
              <div className="icon">
                <IconMap />
              </div>
              <div className="text">
                Rod. Amaral Peixoto, KM 73, BomSUCESSO (BACAXÁ), SAQUAREMA, CEP:
                28993-610
              </div>
            </InfoBox>
          </Col>
          <Col md="7" xs="12" sm="12">
            <Form>
              <FormGroup>
                <LabelInfo for="name">Nome</LabelInfo>
                <InputStyled
                  type="text"
                  id="name"
                  name="name"
                  onChange={handleChange}
                  value={infoEmail.name || ""}
                  placeholder="Informe seu nome"
                />
              </FormGroup>
              <FormGroup>
                <LabelInfo for="email">Email</LabelInfo>
                <InputStyled
                  type="email"
                  id="email"
                  name="email"
                  onChange={handleChange}
                  value={infoEmail.email || ""}
                  placeholder="Informe seu email"
                />
              </FormGroup>
              <FormGroup>
                <LabelInfo for="exampleText">Mensagem:</LabelInfo>
                <InputStyled
                  className="textarea"
                  type="textarea"
                  id="exampleText"
                  name="message"
                  onChange={handleChange}
                  value={infoEmail.message || ""}
                  placeholder="Deixe sua mensagem"
                />
              </FormGroup>
              <ButtonSubmit
                disabled={invalidForm}
                onClick={sendEmail}
                size="lg"
                block
              >
                Enviar
              </ButtonSubmit>
            </Form>
          </Col>
        </Row>
      </Container>
    </Contact>
  );
};

const Contact = styled.div`
  padding: 50px 0;
  background-color: #e3710a;
`;

const Title = styled.div`
  text-align: center;
  font-family: "Hind", Sans-serif;
  font-size: 24px;
  font-weight: 600;
  text-transform: uppercase;
  font-style: normal;
  text-decoration: none;
  line-height: 1.44em;
  letter-spacing: 0px;
  color: #fff;
  margin-bottom: 70px
`;

const ButtonSubmit = styled(Button)`
  border: 2px solid #fff7 !important;
  background-color: transparent;
  transition: 1s;
  font-weight: 600;
  font-size: 18px;
  :hover {
    background-color: #fff7;
    color: #e3710a;
    cursor: pointer;
  }
`;
const LabelInfo = styled(Label)`
  color: #fff;
`;
const InputStyled = styled(Input)`
  min-height: 40px;
  background: #fff4;
  border: thin solid #fff2;
  color: #fff;
  outline: none;
  border: none;

  &.textarea {
    min-height: 140px;
  }
  &:focus-within {
    border: dotted 1px #fff8;
    background: #fff4;
    box-shadow: none;
    color: #fff;
  }
  &:active,
  &:visited {
    box-shadow: none;
    background: #fff4;
    color: #fff;
  }

  ::placeholder {
    /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: #fff4;
    opacity: 1; /* Firefox */
  }

  :-ms-input-placeholder {
    /* Internet Explorer 10-11 */
    color: #fff4;
  }

  ::-ms-input-placeholder {
    /* Microsoft Edge */
    color: #fff4;
  }
`;

const InfoBox = styled.div`
  display: flex;
  border-bottom: ${(props) => (!!props.border ? "thin dotted #fff8" : "none")};
  padding: 10px;
  margin: 10px;
  .icon {
    font-size: 26px;
    color: #fff8;
  }
  .text {
    font-family: "Hind", Sans-serif;
    margin: 12px 10px;
    color: #fff8
  }
`;
