import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import Alert from './components/Alert';
import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import {
  BrowserRouter as Router,
} from "react-router-dom";

function App() {
  const[mode, setMode] = useState('light');
  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode ('dark');
      document.body.style.backgroundColor='grey';
      document.title = 'TextUtils - DarkMode';
    }
    else{
      setMode ('light');
      document.body.style.backgroundColor='white';
      document.title = 'TextUtils - LightMode';
    }
  }
  return(
    <>
    <Router>
      <Navbar title="TextUtils" mode= {mode} toggleMode={toggleMode} />
      <Alert alert="This is alert"/>
      <div className='container'>
      <Switch>
          <Route exact path="/about">
            <About/>
          </Route>
          <Route path="/">
          <TextForm heading="Enter the text to analyze" mode={mode}/>
          </Route>
        </Switch>
      </div>
      </Router>
    </>
  );
}
export default App;