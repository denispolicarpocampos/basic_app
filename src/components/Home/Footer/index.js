import React from 'react';
import styled from 'styled-components';
import { Row, Col, Container} from 'react-materialize';

const RowStyle = styled(Col)`
  margin-bottom: 2px;
  height: 40px;

`
const Footer = () => (
  <div>
      <Row>
        <RowStyle s={12} className='grey darken-2'>
        </RowStyle>
      </Row>
  </div>
);

export default Footer;