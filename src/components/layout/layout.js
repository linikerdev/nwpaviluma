import React from 'react';
import styled from 'styled-components'


// import { Container } from './styles';

function Layout(props) {
  return <Page>
    {props.children}
  </Page>;
}

export default Layout;


const Page = styled.div`
  background: #fff;
`;
