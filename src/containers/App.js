import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import { ThemeProvider } from '@material-ui/core';
import Header from '../components/Header';
import theme from '../styles/Theme';
import Home from '../components/Home';
import Services from '../components/Services';


function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
      <Header/>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/services' component={Services}/>
        <Route exact path='/customsoftwares' component ={() => <div>customsoftwares</div>} />
        <Route exact path='/websites' component ={() => <div>website</div>} />
        <Route exact path='/mobileapps' component ={() => <div>mobile apps</div>} />
        <Route exact path='/revolution' component ={() => <div>revolution</div>} />
        <Route exact path='/about' component ={() => <div>about</div>} />
        <Route exact path='/contact' component ={() => <div>contact</div>} />
        <Route exact path='/estimate' component ={() => <div>estimate</div>} />
      </Switch>
      </BrowserRouter>  
    </ThemeProvider>
  );
}

export default App;
