import React from 'react';
import CompanyFact from '../../components/company-fact/company-fact.component';
import HeroCompany from '../../components/hero-company/hero-company.component';
import AboutCompany from '../../components/about-company/about-company.component';

import './companypage.styles.scss';
import CompanyWorkflow from '../../components/company-workflow/company-workflow.component';
import Topic from '../../components/topic/topic.component';
import BenefitList from '../../components/benefit-list/benefit-list.component';

const CompanyPage = () => (
  <div className='company'>
    <HeroCompany />
    <CompanyFact />
    <AboutCompany />
    <CompanyWorkflow />
    <Topic />
    <BenefitList />
  </div>
);

export default CompanyPage;
