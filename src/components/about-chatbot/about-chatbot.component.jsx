import React from 'react';

import { Container, Row, Col } from 'react-bootstrap';

import chat from '../../assets/chat.jpg';
import logoWord from '../../assets/tenang-word-color-nh.png';

import './about-chatbot.styles.scss';

const AboutChatbot = () => (
  <div className='about-chatbot'>
    <Container>
      <Row className='gx-5'>
        <Col md={7} className='d-flex flex-column justify-content-center'>
          <img className='logo-text' alt='logo text' src={logoWord} />
          <h3 className='subtitle'>mental health chatbot</h3>

          <p>
            Chatbot tenang dibuat untuk membantu lebih banyak orang agar bisa
            merasa tenang, bahagiadan sejahtera tanpa terhalang waktu dan
            tempat.
          </p>

          <p>
            Dibangun dengan menggabungkan antara teknologi, psikologi, serta
            penyesuaian budayadan bahasa Indonesia sehingga kamu bisamerasa
            seakan mengobrol dengan terapis secara langsung.
          </p>

          <span className='soon'>Available on March 2022</span>
        </Col>
        <Col md={5}>
          <img className='image' alt='brain' src={chat} />
        </Col>
      </Row>
    </Container>
  </div>
);

export default AboutChatbot;
