import React from 'react';
import About from '../../components/about/about.component';
import FeatureList from '../../components/feature-list/feature-list.component';
import Hero from '../../components/hero/hero.component';
import TeamList from '../../components/team-list/team-list.component';

import './homepage.styles.scss';

const HomePage = () => (
  <div className='homepage'>
    <Hero />
    <About />
    <FeatureList />
    <TeamList />
  </div>
);

export default HomePage;
