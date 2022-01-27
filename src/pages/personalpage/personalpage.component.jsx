import React from 'react';
import AboutPersonal from '../../components/about-personal/about-personal.component';
import HeroPersonal from '../../components/hero-personal/hero-personal.component';
import PersonalFact from '../../components/personal-fact/personal-fact.component';
import ProsAndCons from '../../components/pros-and-cons/pros-and-cons.component';

import './personalpage.styles.scss';

const PersonalPage = () => (
  <div className='personal'>
    <HeroPersonal />
    <PersonalFact />
    <AboutPersonal />
    <ProsAndCons />
  </div>
);

export default PersonalPage;
