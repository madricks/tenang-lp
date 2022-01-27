import React from 'react';
import './App.scss';
import Navbar from './components/navbar/navbar.component';
import HomePage from './pages/homepage/homepage.component';
import { FaWhatsapp } from 'react-icons/fa';

import { Route, Switch, Link } from 'react-router-dom';
import Footer from './components/footer/footer.component';
import Chatbot from './pages/chatbot/chatbot.component';
import PersonalPage from './pages/personalpage/personalpage.component';
import CompanyPage from './pages/companypage/companypage.component';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <Navbar />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/chatbot' component={Chatbot} />
          <Route exact path='/personal' component={PersonalPage} />
          <Route exact path='/company' component={CompanyPage} />
        </Switch>
        <Footer />

        <Link className='floating-button' to='#'>
          <FaWhatsapp className='icon' />
        </Link>
      </div>
    );
  }
}

export default App;
