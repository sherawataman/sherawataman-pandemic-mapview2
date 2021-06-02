import React, {useEffect} from 'react';

// import ReactDOM from 'react-dom';
import {routes} from './routes'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
// import { Router, Route, Link, browserHistory } from 'react-router'
import logo from './logo.svg';
import './App.css';
import Dashboard from './modules/dashboard/dashboard'
import Home from './modules/dashboard/home'
import About from './modules/dashboard/about'
import Map from './modules/map/map'
import Corona from './modules/dashboard/corona';
import Ebola from './modules/dashboard/ebola';
import Cholera from './modules/dashboard/cholera';
import Hiv from './modules/dashboard/hiv'

function App() {
  // let routing = []
  // useEffect(() => {
    
  //   routes.map((item, key)=>{
  //     routing.push({path:item.path, component: item.component, key: key})
  //   })
  // }, [])
  return (
    // <div className="App">
    //  <Dashboard/>
    // </div>
    <Router>
    
      <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link to="/corona">Corona</Link>
          </li>
          <li>
            <Link to="/ebola">Ebola</Link>
          </li>
          <li>
            <Link to="/cholera">cholera</Link>
          </li>
          <li>
            <Link to="/hiv">Hiv</Link>
          </li>
        </ul>

      <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/corona">
            <Corona/>
          </Route>
          <Route path="/ebola">
            <Ebola/>
          </Route>
          <Route path="/cholera">
            <Cholera/>
          </Route>
          <Route path="/hiv">
            <Hiv/>
          </Route>
        </Switch>
        
        
    </Router>
  );
}

export default App;
