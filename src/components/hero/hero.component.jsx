import React from 'react';
import background from '../../assets/bg2.png';
import { Container, Row, Col } from 'react-bootstrap';

import './hero.styles.scss';
import ButtonDownloadApp from '../button-download-app/button-download-app.component';
import { ButtonDownloadAppTypes } from '../button-download-app/button-download-app.types';

const Hero = () => (
  <div className='hero'>
    <div
      className='hero-container'
      style={{ backgroundImage: `url(${background})` }}
    >
      <Container>
        <Row>
          <Col md={5}>
            <h1 className='title'>Semua bisa tenang</h1>
            <p className='sub-title'>
              Dukungan kesehatan mental untuk semua, kapanpun dan dimanapun
            </p>
            <div className='buttons'>
              <ButtonDownloadApp
                type={ButtonDownloadAppTypes.APPSTORE}
                url='#'
              />
              <ButtonDownloadApp
                type={ButtonDownloadAppTypes.PLAYSTORE}
                url='#'
              />
            </div>
          </Col>
          <Col md={7}></Col>
        </Row>
      </Container>
    </div>
  </div>
);

export default Hero;
