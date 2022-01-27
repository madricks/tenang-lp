import React from 'react';

import { Container, Row, Col } from 'react-bootstrap';
import Donut from '../chart/donut.component';

import { VscPerson } from 'react-icons/vsc';

import './company-fact.styles.scss';

const CompanyFact = () => (
  <div className='company-fact'>
    <Container>
      <Row>
        <Col>
          <h1 className='title'>
            Your employees mental health can affect your company
          </h1>
        </Col>
      </Row>
      <Row className='gx-5'>
        <Col>
          <div className='graph'>
            <Donut percent={72} />
          </div>
          <p className='content'>
            employees in Indonesia feel unmotivated in workplace
          </p>
        </Col>
        <Col>
          <div className='graph'>
            <VscPerson className='person active' />
            <VscPerson className='person active' />
            <VscPerson className='person' />
            <VscPerson className='person' />
            <VscPerson className='person' />
          </div>
          <p className='content'>
            every 2 of 5 employees suffering from work stress
          </p>
        </Col>
        <Col>
          <div className='graph'>
            <Donut percent={45} />
          </div>
          <p className='content'>
            employees' sick leaves are caused by personal and mental health
            problems
          </p>
        </Col>
      </Row>
    </Container>
  </div>
);

export default CompanyFact;
