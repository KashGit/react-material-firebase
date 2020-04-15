import React, { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { ThemeProvider } from '@material-ui/core';
import Header from '../components/Header';
import theme from '../styles/Theme';
import LandingPage from '../components/LandingPage';
import Footer from '../components/Footer';
import Services from '../components/Services';
import CustomSoftware from '../components/CustomSoftware';


function App() {
  const [tabIndex, setTabIndex] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState(0);
  return (
    <ThemeProvider
      theme={theme}>
      <BrowserRouter>
        <Header tabIndex={tabIndex}
          setTabIndex={setTabIndex}
          selectedIndex={selectedIndex}
          setSelectedIndex={setSelectedIndex}
        />
        <Switch>
          <Route exact path='/' render={(props) => <LandingPage {...props} setTabIndex={setTabIndex} setSelectedIndex={setSelectedIndex} />} />
          <Route exact path='/services' render={(props) => <Services {...props} setTabIndex={setTabIndex} setSelectedIndex={setSelectedIndex} />}  />
          <Route exact path='/customsoftware' render={(props) => <CustomSoftware {...props} setTabIndex={setTabIndex} setSelectedIndex={setSelectedIndex} />}  />
          <Route exact path='/websites' component={() => <div>website</div>} />
          <Route exact path='/mobileapps' component={() => <div>mobile apps</div>} />
          <Route exact path='/revolution' component={() => <div>revolution</div>} />
          <Route exact path='/about' component={() => <div>about</div>} />
          <Route exact path='/contact' component={() => <div>contact</div>} />
          <Route exact path='/estimates' component={() => <div>estimate</div>} />
        </Switch>
        <Footer
          setTabIndex={setTabIndex}
          setSelectedIndex={setSelectedIndex}
        />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
