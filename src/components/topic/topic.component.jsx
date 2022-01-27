import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import './topic.styles.scss';

const Topic = () => (
  <div className='topic'>
    <Container>
      <Row>
        <Col>
          <h1 className='title'>
            Some topics related to employees wellness program:
          </h1>
        </Col>
      </Row>
      <Row className='gx-5'>
        <Col>
          <div className='wrapper'>
            <ul>
              <li>Stress management</li>
              <li>Managing anxiety</li>
              <li>Resilience in workplace</li>
              <li>Time management</li>
              <li>Conflict management</li>
              <li>Work life balance</li>
              <li>Mental health in workplace</li>
            </ul>
          </div>
        </Col>
        <Col>
          <div className='wrapper'>
            <ul>
              <li>Growth mindset in workplace</li>
              <li>Achievement motivation</li>
              <li>Team building</li>
              <li>Leadership coaching</li>
              <li>Service excellent</li>
              <li>Excelling in communication</li>
              <li>Retirement preparation</li>
            </ul>
          </div>
        </Col>
      </Row>
    </Container>
  </div>
);

export default Topic;
