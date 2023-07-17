import './App.css';
import React from 'react';
import { BrowserRouter as Router,Routes,Route, Switch,Link } from 'react-router-dom';
import Mess from './components/MessagingComponent/Mess';
import LoginPage from './components/LoginComponent/LoginPage';
function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path='/'>
          <LoginPage/>
        </Route>
        <Route path='/chat'>
          <Mess/>
        </Route>
      </Router>
    </div>
  );
}

export default App;
