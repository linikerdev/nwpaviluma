import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import { ScrollingProvider, Section } from "react-scroll-section";

import Content from "./components/layout/layout";
import Header from "./components/header/header";
import Info from "./components/info/info";
import About from "./components/about/about";
import Services from "./components/services/services";
import Contact from "./components/contact/contact";
import Footer from "./components/footer/footer";

export default () => {
  document.title = "NW PAVILUMA";

  const [MenuList] = useState([
    { title: "home", id: "home" },
    { title: "Sobre", id: "about" },
    { title: "Serviços", id: "services" },
    { title: "Contato", id: "contact" },
  ]);

  return (
    <ScrollingProvider>
      <Content>
        <Section id="home">
          <Header menu={MenuList} />
        </Section>
        <Info />
        <Section id="about">
          <About />
        </Section>
        <Section id="services">
          <Services />
        </Section>
        <Section id="contact">
          <Contact />
        </Section>
        <Footer />
      </Content>
    </ScrollingProvider>
  );
};
