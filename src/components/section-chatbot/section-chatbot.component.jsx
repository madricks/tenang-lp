import React from 'react';

import { Container, Row, Col } from 'react-bootstrap';

import anxiety from '../../assets/anxiety.jpg';

import './section-chatbot.styles.scss';

const SectionChatbot = () => (
  <div className='section-chatbot'>
    <Container>
      <Row className='gx-5'>
        <Col md={5}>
          <img className='image' alt='brain' src={anxiety} />
        </Col>
        <Col md={7} className='d-flex flex-column justify-content-center'>
          <h1 className='title'>Apakah anda:</h1>
          <ul>
            <li>Merasa sedih sekali jam 11 malam?</li>
            <li>Butuh teman curhat yang bisa dipercaya ?</li>
            <li>Overthinking hingga ga bisa tidur dini hari? </li>
            <li>Mau konseling tapi khawatir dihakimi?</li>
          </ul>
        </Col>
      </Row>
    </Container>
  </div>
);

export default SectionChatbot;
