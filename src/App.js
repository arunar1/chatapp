import './App.css';
import React from 'react';
import { BrowserRouter as Router,Routes,Route, Switch,Link } from 'react-router-dom';

import LoginPage from './components/LoginComponent/LoginPage';
function App() {
  return (
    <div className="App">
      <Router>
        <Route path='/'>
          <LoginPage/>
        </Route>
      </Router>
    </div>
  );
}

export default App;
