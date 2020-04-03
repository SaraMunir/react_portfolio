import React from 'react';
import NavBar from './components/NavBar';
import HomePage from './components/HomePage';
import ProjectPage from './components/ProjectPage';
import ContactPage from './components/ContactPage';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Route exact path= {["/", "/about"]}  component={HomePage} />
        <Route exact path="/ProjectPage"  component={ProjectPage} />
        <Route exact path="/ContactPage"  component={ContactPage} />
      </div>
    </Router>
  );
}

export default App;
