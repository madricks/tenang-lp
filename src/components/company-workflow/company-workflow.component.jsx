import React from 'react';

import { Container, Row, Col } from 'react-bootstrap';
import { FaFileMedical, FaFileAlt, FaSearch } from 'react-icons/fa';
import { IoIosPeople } from 'react-icons/io';

// import logoWord from '../../assets/tenang-word-color-nh.png';

import './company-workflow.styles.scss';

const CompanyWorkflow = () => (
  <div className='company-workflow'>
    <Container>
      <Row>
        <Col>
          <h1 className='title'>How we work</h1>
        </Col>
      </Row>
      <Row className='gx-5'>
        <Col className='text-center'>
          <div className='icon-wrapper'>
            <FaSearch className='icon' />
          </div>
          <h2>1. Assesment</h2>
          <p>
            Tenang for company will assess your company and employees
            psychological needs, and also their mental health conditions. The
            name of the employees will not be revealed
          </p>
        </Col>
        <Col className='text-center'>
          <div className='icon-wrapper'>
            <FaFileMedical className='icon' />
          </div>
          <h2>2. Treatment</h2>
          <p>
            Tenang for company will give treatment to your employees based on
            the assesment results
          </p>
        </Col>
        <Col className='text-center'>
          <div className='icon-wrapper'>
            <FaFileAlt className='icon' />
          </div>
          <h2>3. Result</h2>
          <p>
            Tenang for company will give the treatment results in quantitative
            and qualitative data
          </p>
        </Col>
        <Col className='text-center'>
          <div className='icon-wrapper'>
            <IoIosPeople className='icon' />
          </div>
          <h2>4. Added services</h2>
          <p>
            Tenang for company will give added services; counselling sessions
            and AI chatbot
          </p>
        </Col>
      </Row>
    </Container>
  </div>
);

export default CompanyWorkflow;
