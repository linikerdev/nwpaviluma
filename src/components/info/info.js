import React from 'react';
import styled from 'styled-components'




export default (props) => {
    return (
        <BoxInfo>
            <NameLogo>NW PAVILUMA</NameLogo>
            <Text> Estamos transformando as idéias e visões em projetos reconhecidos.</Text>
        </BoxInfo>
    )
}


const BoxInfo = styled.div`
    background-color: #F5F6F6;
    padding: 30px;
    display:flex;
    align-items:center;
    justify-content:center;
`

const NameLogo = styled.div`
    color: #FE7D0A;
    font-family: "Hind", Sans-serif;
    font-size: 30px;
    font-weight: 600;
    text-transform: uppercase;
    font-style: normal;
    text-decoration: none;
    line-height: 1.344em;
    letter-spacing: 0px;
    margin: auto 10px
`
const Text = styled.span`
    font-family: "Hind", Sans-serif;
    font-size: 18px;
    font-weight: 600;
    text-transform: none;
    font-style: normal;
    text-decoration: none;
    line-height: 23.04px;

`