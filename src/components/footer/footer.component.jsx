import React from 'react';
import logoWordWhite from '../../assets/tenang-word-white.png';
import { Container, Row, Col } from 'react-bootstrap';
import { FaInstagram, FaRegEnvelope } from 'react-icons/fa';

import './footer.styles.scss';

const Footer = () => (
  <div className='footer'>
    <Container>
      <Row>
        <Col className='footer-company'>
          <img className='logo' alt='logo' src={logoWordWhite} />
          <p>PT Tenang Untuk Dunia</p>
        </Col>
        <Col>
          <h3>Layanan tenang</h3>
          <ul>
            <li>Tenang chatbot</li>
            <li>Tenang for personal</li>
            <li>Tenang for corporate</li>
          </ul>
        </Col>
        <Col>
          <h3>Kontak tenang</h3>
          <ul>
            <li>
              <FaInstagram className='icon' />
              @haitenangaja
            </li>
            <li>
              <FaRegEnvelope className='icon' />
              halotenangaja@gmail.com
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  </div>
);

export default Footer;
