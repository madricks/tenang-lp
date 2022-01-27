import React from 'react';

import { Container, Row, Col } from 'react-bootstrap';

import graphPersonalFact from '../../assets/graph-personal-fact-2.jpg';

import './personal-fact.styles.scss';

const PersonalFact = () => (
  <div className='personal-fact'>
    <Container>
      <Row>
        <Col md={5}>
          <img className='image' alt='brain' src={graphPersonalFact} />
        </Col>
        <Col md={7} className='d-flex flex-column justify-content-center'>
          <h1 className='title'>Hidup memang terkadang berat dan ga mudah.</h1>

          <div className='question-wrapper'>
            <Row className='mb-4'>
              <Col>
                <div className='question'>
                  Stress dengan sekolah, kuliah, pekerjaan?
                </div>
              </Col>
              <Col>
                <div className='question'>
                  Konflik dengan teman, pasangan, orangtua?
                </div>
              </Col>
            </Row>
            <Row>
              <Col>
                <div className='question'>
                  Baru aja putus, gagal atau ngalamin sesuatu yang bikin ga
                  nyaman?
                </div>
              </Col>
              <Col>
                <div className='question'>
                  Merasa ga percaya diri, takut, bingung, cemas?
                </div>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </Container>
  </div>
);

export default PersonalFact;
