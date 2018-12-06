import React from 'react';
import styled from 'styled-components';
import { Row, Col, Container, Navbar, NavItem, Icon} from 'react-materialize';

const RowStyle = styled(Row)`
  margin-bottom: 2px;

`
const Header = () => (
  <div>
      <RowStyle>
        <Navbar className='deep-purple accent-3' brand='Administrativo' right>
          <NavItem href='#'>Link1</NavItem>
          <NavItem href='#'>Link2</NavItem>
          <NavItem href='#'>
            <Icon>account_circle</Icon>
          </NavItem>
        </Navbar>
      </RowStyle>
  </div>
);

export default Header;