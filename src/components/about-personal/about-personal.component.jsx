import React from 'react';

import { Container, Row, Col } from 'react-bootstrap';

import graphAbout from '../../assets/about-personal.jpg';
import logoWord from '../../assets/tenang-word-color-nh.png';

import './about-personal.styles.scss';

const AboutPersonal = () => (
  <div className='about-personal'>
    <Container>
      <Row className='gx-5'>
        <Col md={7} className='d-flex flex-column justify-content-center'>
          <img className='logo-text' alt='logo text' src={logoWord} />
          <h3 className='subtitle'>for personal</h3>

          <p>
            Konsultasi terkait dengan permasalahan psikologis pribadimu kini
            terasa lebih mudah dan aman dengan tenang for personal.
          </p>

          <p>
            Psikolog tenang for personal akan membantu dan mendampingimu dalam
            menyelesaikan masalah dengan berbagai sudut pandang dan tanpa
            penghakiman. Mulai dari masalah hubungan, pekerjaan, pengembangan
            diri, dan lain sebagainya
          </p>

          <span className='soon'>Yuk mulai konseling</span>
        </Col>
        <Col md={5}>
          <img className='image' alt='brain' src={graphAbout} />
        </Col>
      </Row>
    </Container>
  </div>
);

export default AboutPersonal;
