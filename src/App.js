import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import Login from './components/Login';
import PrivateRoute from './components/PrivateRoute';
import ItemList from './components/ItemList';
import {DashboardVue} from './components/DashboardView';
import Registration from './components/Registration';

const sizes = {
  desktop: 992,
  tablet: 768,
  phone: 576,
}

const media = Object.keys(sizes).reduce((acc,label) => {
  acc[label] = (...args) => 
  css`@media (max-width:${sizes[label]}px){
      ${css(...args)}

  }`

  return acc

  
},{})

const StyledApp = styled.div`
  * {
    box-sizing: border-box;
  }

  width:100%;
  height:100%;

  
  
  
  font-family: 'Roboto', sans-serif;
  font-size:14px;

  input:focus,
  select:focus,
  textarea:focus,
  button:focus {
    outline: none;
  }

  .gen-login-container{
    margin-top: 40px;
    ${media.desktop`margin-top:0px;`}
  }

  .complete-dashboard-container{
    height:100%;
}
  .footer{
    width:100%;
    background:lightgray;
    height:20vh;
  }
}

`


class App extends Component {
  render() {
    return (
      <Router>
        <StyledApp>
          <Route exact path='/' component={Login}/>
          <Route exact path='/register' component={Registration}/>
          <Route exact path='/protected' component={DashboardVue}/>
          
        </StyledApp>
        
      </Router>
      
    );
  }
}

export default App;
