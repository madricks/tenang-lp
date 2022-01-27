import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import chatbot from '../../assets/chatbot.png';
import background from '../../assets/banner.png';

import './hero-chatbot.styles.scss';

const HeroChatbot = () => (
  <div className='hero-chatbot'>
    <div
      className='hero-chatbot-container'
      style={{ backgroundImage: `url(${background})` }}
    >
      <Container>
        <Row>
          <Col className='content' md={5}>
            <h1 className='title'>Accessible. Anonymous. Anytime (24/7).</h1>
            <p className='sub-title'>
              Mental health artificial intelligence chatbot yang membantumu
              merasa lebih tenang
            </p>
            <span className='soon'>Available on March 2022</span>
          </Col>
          <Col className='graph' md={7}>
            <img alt='chatbot' src={chatbot} />
          </Col>
        </Row>
      </Container>
    </div>
  </div>
);

export default HeroChatbot;
