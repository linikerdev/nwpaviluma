import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Content from './components/layout/layout'
import Header from './components/header/header'
import Info from './components/info/info'
import Services from './components/services/services'

export default () => {

  return (
    <Content>
      <Header />
      <Info />
      <Services />
    </Content>
  )

}
