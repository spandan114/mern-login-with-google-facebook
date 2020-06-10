import React,{useEffect} from 'react';

import {useDispatch} from 'react-redux';

import {BrowserRouter as Router ,Route,Switch} from 'react-router-dom';
import './App.css';

import Button from './components/buttons/Button';
import Profile from './components/profile/Profile';
import Navbar from './components/navbar/Navbar';

// ACTIONS
import {fetchAll} from './actions/authActions'

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch( fetchAll())
  }, [])//DidMount


  return (
    
    <Router>
    <Navbar />
      <Switch>
                <Route exact path="/" component={Button} />
                <Route exact path="/profile" component={Profile} />
      </Switch>
    </Router>
  );
}

export default App;
