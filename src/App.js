import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import Alert from './components/Alert';
import React, { useState } from 'react';


function App() {
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  return (
    <>
      <Navbar title="TextUtils" aboutText="about Text" />
      <Alert alert={alert} />
      <div className="container">
      <TextForm showAlert={showAlert} heading="Enter the text to analyze below" />
      <About headinga="About Us" />
      </div>
    </>
  )
}


export default App
