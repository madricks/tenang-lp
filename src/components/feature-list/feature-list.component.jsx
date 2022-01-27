import React from 'react';
import { Link } from 'react-router-dom';

import { Container, Row, Col } from 'react-bootstrap';

import { BsChatLeftDots, BsPhone, BsBuilding } from 'react-icons/bs';

import logoWord from '../../assets/tenang-word-color-nh.png';

import './feature-list.styles.scss';

const FeatureList = () => (
  <div className='feature-list'>
    <Container>
      <Row className='text-center'>
        <Col>
          <h1 className='title'>Merasa tenang dengan</h1>
        </Col>
      </Row>
      <Row>
        <Col className='features'>
          <div className='feature'>
            <div className='image'>
              <BsChatLeftDots className='icon' />
            </div>

            <img className='logo-text' alt='logo text' src={logoWord} />
            <h3 className='subtitle'>mental health chatbot</h3>

            <p>
              Butuh tempat cerita yang responsif, tidak menghakimi, private, dan
              dapat dihubungi kapanpun?
            </p>

            <Link className='button' to='#'>
              Gunakan tenang chatbot
            </Link>
          </div>
          <div className='feature'>
            <div className='image'>
              <BsPhone className='icon' />
            </div>

            <img className='logo-text' alt='logo text' src={logoWord} />
            <h3 className='subtitle'>for personal</h3>

            <p>
              for personal Gunakan tenang for personal Merasa stress? Khawatir?
              Bingung? Mood ga stabil? Konflik dengan orang lain?
            </p>

            <p>Yuk konseling online dengan psikolog profesional!</p>

            <Link className='button' to='#'>
              Gunakan tenang for personal
            </Link>
          </div>
          <div className='feature'>
            <div className='image'>
              <BsBuilding className='icon' />
            </div>

            <img className='logo-text' alt='logo text' src={logoWord} />
            <h3 className='subtitle'>for company</h3>

            <p>
              Ingin meningkatkan well-being, resiliensi, dan produktivitas
              karyawan? Kami bisa membantu mewujudkannya!
            </p>

            <Link className='button' to='#'>
              Gunakan tenang for corporate
            </Link>
          </div>
        </Col>
      </Row>
    </Container>
  </div>
);

export default FeatureList;
