import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaUserAlt } from 'react-icons/fa';

import './team-list.styles.scss';

const TeamList = () => (
  <div className='team-list'>
    <Container>
      <Row>
        <Col className='text-center'>
          <h1 className='title'>Team tenang</h1>
        </Col>
      </Row>
      <Row>
        <Col className='teams'>
          <div className='team'>
            <div className='image'>
              <FaUserAlt className='icon' />
            </div>
            <h3>Salma</h3>
            <p>
              is a clinical psychologist and also personal development coach.
              She came up with this idea based on her own experiences and her
              clients.
            </p>
          </div>

          <div className='team'>
            <div className='image'>
              <FaUserAlt className='icon' />
            </div>
            <h3>Andre</h3>
            <p>
              The person behind the scaling up of tenang because he has some
              experiences in tech-preneur. He's one extraordinary and energetic
              person
            </p>
          </div>

          <div className='team'>
            <div className='image'>
              <FaUserAlt className='icon' />
            </div>
            <h3>Oki</h3>
            <p>
              Our IT guy who has years of experiences in developing software. So
              basically, the one who help us put these ideas into the software
              that we can use.
            </p>
          </div>

          <div className='team'>
            <div className='image'>
              <FaUserAlt className='icon' />
            </div>
            <h3>Leo</h3>
            <p>
              Is a social-butterfly person. He always have some friends here and
              there. He helps tenang build the networkings
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  </div>
);

export default TeamList;
