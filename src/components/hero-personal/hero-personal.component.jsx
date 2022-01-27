import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import personal from '../../assets/personal2.png';
import background from '../../assets/banner.png';

import './hero-personal.styles.scss';

const HeroPersonal = () => (
  <div className='hero-personal'>
    <div
      className='hero-personal-container'
      style={{ backgroundImage: `url(${background})` }}
    >
      <Container>
        <Row>
          <Col className='content' md={5}>
            <h1 className='title'>Affordable. Private. Secure.</h1>
            <p className='sub-title'>
              Konseling online bersama psikolog profesional berlisensi dengan
              aman, nyaman, dan terjangkau
            </p>
          </Col>
          <Col className='graph' md={7}>
            <img alt='personal' src={personal} />
          </Col>
        </Row>
      </Container>
    </div>
  </div>
);

export default HeroPersonal;
