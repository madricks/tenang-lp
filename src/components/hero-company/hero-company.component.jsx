import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import company from '../../assets/company.png';
import background from '../../assets/banner.png';

import './hero-company.styles.scss';

const HeroCompany = () => (
  <div className='hero-company'>
    <div
      className='hero-company-container'
      style={{ backgroundImage: `url(${background})` }}
    >
      <Container>
        <Row>
          <Col className='content' md={5}>
            <h1 className='title'>Personalized. Preventive. Practical.</h1>
            <h1>Your company grows as your people grow.</h1>
            <p className='sub-title'>
              Your employees mental health matters, too
            </p>
          </Col>
          <Col className='graph' md={7}>
            <img alt='company' src={company} />
          </Col>
        </Row>
      </Container>
    </div>
  </div>
);

export default HeroCompany;
