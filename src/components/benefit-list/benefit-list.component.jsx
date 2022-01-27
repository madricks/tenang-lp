import React from 'react';

import { Container, Row, Col } from 'react-bootstrap';

import { FaBoxOpen, FaStar, FaMountain, FaTrophy } from 'react-icons/fa';

import './benefit-list.styles.scss';

const BenefitList = () => (
  <div className='benefit-list'>
    <Container>
      <Row>
        <Col>
          <h1 className='title'>The benefits</h1>
        </Col>
      </Row>
      <Row>
        <Col className='text-center'>
          <div className='icon-wrapper bg-1'>
            <FaBoxOpen className='icon' />
          </div>
          <p className='content'>the program is Personalized & practical</p>
        </Col>
        <Col className='text-center'>
          <div className='icon-wrapper bg-2'>
            <FaStar className='icon ' />
          </div>
          <p className='content'>
            awareness of the mental health condition of your company and
            employees
          </p>
        </Col>
        <Col className='text-center'>
          <div className='icon-wrapper bg-3'>
            <FaMountain className='icon ' />
          </div>
          <p className='content'>
            employees become more resilient, happy, and productive
          </p>
        </Col>
        <Col className='text-center'>
          <div className='icon-wrapper bg-4'>
            <FaTrophy className='icon' />
          </div>
          <p className='content'>return of investment fot the company</p>
        </Col>
      </Row>
    </Container>
  </div>
);

export default BenefitList;
