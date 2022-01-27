import React from 'react';

import { Container, Row, Col } from 'react-bootstrap';

import logoWord from '../../assets/tenang-word-color-nh.png';

import './mental-health-chatbot.styles.scss';

const MentalHealthChatbot = () => (
  <div className='mental-health-chatbot'>
    <Container>
      <Row>
        <Col>
          <img className='logo-text' alt='logo' src={logoWord} />
          <h3 className='subtitle'>mental health chatbot</h3>
          <p>
            Ketika perkembangan teknologi berkolaborasi dengan psikologi dan
            disesuaikan secara budaya dan bahasa
          </p>
        </Col>
      </Row>
      <Row>
        <Col>
          <ul>
            <li>Cognitive Behavioral Techniques (CBT)</li>
            <li>Interpersonal Psychoteraphy (IPT)</li>
            <li>psychological First Aid</li>
          </ul>
        </Col>
        <Col>
          <ul>
            <li>Artificial Intelligence (AI)</li>
            <li>Natural Language Processing (NLP)</li>
          </ul>
        </Col>
      </Row>
    </Container>
  </div>
);

export default MentalHealthChatbot;
