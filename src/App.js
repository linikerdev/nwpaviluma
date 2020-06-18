import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Content from './components/layout/layout'
import Header from './components/header/header'
import Info from './components/info/info'
import About from './components/about/about'
import Services from './components/services/services'
import Footer from './components/footer/footer'

export default () => {
  document.title = 'NW PAVILUMA'
  return (
    <Content>
      <Header />
      <Info />
      <About />
      <Services />
      <Footer />
    </Content>
  )

}
