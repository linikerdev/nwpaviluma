import React from 'react';
import styled from 'styled-components'
import { Container } from 'reactstrap';
const dt = new Date();
export default (props) => {
    return (
        <Footer>
            <Container>
                © {dt.getFullYear()} PAVILUMA. ,Todos os direitos reservados
            </Container>
        </Footer >
    )
}

const Footer = styled.div`
    background-color: #1B2027;
    padding: 20px;
    color: #fff;
    font-family: "Open Sans", Sans-serif;
    font-size: 13px;
    font-weight: 400;
    text-transform: none;
    font-style: normal;
    text-decoration: none;
    line-height: 22.75px;
    letter-spacing: 0px;
`