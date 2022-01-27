import React from 'react';
import AboutChatbot from '../../components/about-chatbot/about-chatbot.component';
import HeroChatbot from '../../components/hero-chatbot/hero-chatbot.component';
import MentalHealthChatbot from '../../components/mental-health-chatbot/mental-health-chatbot.component';
import SectionChatbot from '../../components/section-chatbot/section-chatbot.component';

import './chatbot.styles.scss';

const Chatbot = () => (
  <div className='chatbot'>
    <HeroChatbot />
    <SectionChatbot />
    <AboutChatbot />
    <MentalHealthChatbot />
  </div>
);

export default Chatbot;
