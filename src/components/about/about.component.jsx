import React from 'react';
import aboutImage from '../../assets/brain.jpg';
import { Container, Row, Col } from 'react-bootstrap';

import logoWord from '../../assets/tenang-word-color-nh.png';

import './about.styles.scss';

const About = () => (
  <div className='about'>
    <Container>
      <Row className='gx-5'>
        <Col md={5}>
          <img className='image' alt='brain' src={aboutImage} />
        </Col>
        <Col md={7} className='d-flex flex-column justify-content-center'>
          <img className='logo-text' alt='logo text' src={logoWord} />
          <p>
            Kesehatan mentalmu sangat berharga. Maka dari itu, tenang hadir
            sebagai kepedulian untuk membantu dan mendampingimu merasa lebih
            tenang, bahagia dan sejahtera.
          </p>
          <p>
            Dibangun dengan menggabungkan antara teknologi, dan pendekatan
            psikologi, seperti cognitive behavioral techniques (CBT) serta
            menyesuaikan dengan budaya dan bahasa manusia; tenang menyediakan
            layanan kesehatan mental kapanpun dan dimanapun.
          </p>
        </Col>
      </Row>
    </Container>
  </div>
);

export default About;

// <div className='about-graph'>
//       <div className='image' style={{ backgroundImage: `url(${brain})` }} />
//     </div>
//     <div className='about-content'></div>
