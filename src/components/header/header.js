import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import { Container } from "reactstrap";
import { isMobile } from "react-device-detect";

import Menu from "./menu";
import logo from "../../assets/logo/logo.png";

import "../../assets/slides/slider1.jpg";
import "../../assets/slides/slider2.jpg";
import "../../assets/slides/slider3.jpg";

export default (props) => {
  const [slide, setSlide] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      const sl = slide === 3 ? 1 : slide + 1;
      setSlide(sl);
    }, 5000);

    return () => clearInterval(interval);
  }, [props, slide]);

  const getSlide = (num) => {
    const sl = require(`../../assets/slides/slider${num}.jpg`);
    return sl;
  };

  return (
    <Header slide={getSlide(slide)}>
      <BarLogo>
        <img src={logo} alt="logo" />
      </BarLogo>
      <Container>
        <Menu itens={props.menu} />
      </Container>
    </Header>
  );
};

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const Header = styled.div`
  background: #fff;
  height: ${(props) => (!isMobile ? "645" : "500")}px;
  background-image: url(${(props) => props.slide});
  background-position: center;
  background-size: ${(props) => (!isMobile ? "100% auto" : "auto 100%")}; 
  background-repeat: no-repeat;
  transition: all 1s ease-in-out;
  animation: 1.5s ${fadeIn} ease-in-out;
`;
const BarLogo = styled.div`
  padding: 15px 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* Permalink - use to edit and share this gradient: https://colorzilla.com/gradient-editor/#ffffff+80,0a0c06+100&1+58,0+100 */
  background: -moz-linear-gradient(
    top,
    rgba(255, 255, 255, 1) 58%,
    rgba(255, 255, 255, 0.48) 80%,
    rgba(10, 12, 6, 0) 100%
  ); /* FF3.6-15 */
  background: -webkit-linear-gradient(
    top,
    rgba(255, 255, 255, 1) 58%,
    rgba(255, 255, 255, 0.48) 80%,
    rgba(10, 12, 6, 0) 100%
  ); /* Chrome10-25,Safari5.1-6 */
  background: linear-gradient(
    to bottom,
    rgba(255, 255, 255, 1) 58%,
    rgba(255, 255, 255, 0.48) 80%,
    rgba(10, 12, 6, 0) 100%
  ); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ffffff', endColorstr='#000a0c06',GradientType=0 ); /* IE6-9 */
`;
