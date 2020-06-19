import React from "react";
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
// import { isMobile } from "react-device-detect";

export default (props) => {
  return (
    <Contact>
      <Container>
        <Title>FALE CONOSCO</Title>
        <Row>
          <Col md="4" xs="12" sm="12"></Col>
          <Col md="8" xs="12" sm="12">
            <Form>
              <FormGroup>
                <LabelInfo for="name">Nome</LabelInfo>
                <InputStyled
                  type="text"
                  name="text"
                  id="name"
                  placeholder="Informe seu nome"
                />
              </FormGroup>
              <FormGroup>
                <LabelInfo for="email">Email</LabelInfo>
                <InputStyled
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Informe seu email"
                />
              </FormGroup>
              <FormGroup>
                <LabelInfo for="exampleText">Mensagem:</LabelInfo>
                <InputStyled
                  className="textarea"
                  type="textarea"
                  name="text"
                  id="exampleText"
                  placeholder="Deixe sua mensagem"
                />
              </FormGroup>
              <ButtonSubmit size="lg" block>
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
  padding: 100px 0;
  background-color: #e3710a;
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
  min-height: 50px;
  background: #fff4;
  border: thin solid #fff2;
  color: #fff;
  outline: none;
  border: none;

  &.textarea{
   min-height:140px;
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
