import React from 'react';

import { Container, Row, Col } from 'react-bootstrap';

import graphAbout from '../../assets/about-company.jpg';
import logoWord from '../../assets/tenang-word-color-nh.png';

import './about-company.styles.scss';

const AboutCompany = () => (
  <div className='about-company'>
    <Container>
      <Row className='gx-5'>
        <Col md={7} className='d-flex flex-column justify-content-center'>
          <img className='logo-text' alt='logo text' src={logoWord} />
          <h3 className='subtitle'>for company</h3>

          <h1>Employees' wellness program</h1>

          <p>
            Providing services to maintain and enhance employees' wellbeing,
            wellness, work performance, productivity to support the company's
            growth itself.
          </p>
        </Col>
        <Col md={5}>
          <img className='image' alt='brain' src={graphAbout} />
        </Col>
      </Row>
    </Container>
  </div>
);

export default AboutCompany;
