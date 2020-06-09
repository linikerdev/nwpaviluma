import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Content from './components/layout/layout'
import Header from './components/header/header'
import Info from './components/info/info'

export default () => {

  return (
    <Content>
      <Header />
      <Info />
    </Content>
  )

}
