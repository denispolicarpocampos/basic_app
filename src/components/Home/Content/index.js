import React from 'react';
import styled from 'styled-components'
import { Row, Col, Container, Navbar, NavItem} from 'react-materialize';

const MenuStyle = styled(Col)`
  background-color: #eeeeee;
  width: 100%;
  height: 550px;
`
const RowStyle = styled(Row)`
  margin-bottom: 0px;
`

const Content = () => (
  <RowStyle>
    <MenuStyle s={12}>
    </MenuStyle>
  </RowStyle>
);

export default Content;