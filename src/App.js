import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Content from './components/layout/layout'
import Header from './components/header/header'

// import { Container } from './styles';

export default () => {

  const [MenuList] = useState([
    { title: 'home' },
    { title: 'Sobre' },
    { title: 'Serviços' },
    { title: 'Contato' }
  ])


  return (
    <Content>
      <Header menu={MenuList} />
    </Content>
  )

}
