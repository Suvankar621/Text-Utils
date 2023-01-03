import './App.css';
import { useState } from 'react';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

function App() {
  const [Mode, setMode] = useState('light')
  const toggleMode = () => {
    if (Mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = '#212529';
      document.body.style.color = 'white'
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black'
    }
  }
  return (
    <>
    <Router>
      <Navbar title="Text-Utils" mode={Mode} toggleMode={toggleMode} />
      <div className="container my-3">
      <Routes>
        <Route path="/" element={<TextForm heading="Enter your Text"/>}></Route>
        <Route path="/about" element={<About mode={Mode}/>}></Route>
      </Routes>
          
          </div>
        </Router>

        {/* <About/> */}
     

    </>
  );
}

export default App;
