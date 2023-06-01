import './App.css';
import React, {useState} from 'react';
import Navbar from './components/Navbar';
import Calculator from './components/Calculator';



function App() {
  const [mode, setMode] = useState('dark');
  const [textColor, setTextColor] = useState('light')
  const toggleMode = ()=>{
    if(mode === 'dark'){
      setMode('light');
      setTextColor('dark');
      document.body.style.backgroundColor = 'white';
      // showAlert("Dark mode has been enabled", "success");
    }
    else{
      setMode('dark');
      setTextColor('light');
      document.body.style.backgroundColor = '#042743';
      // showAlert("Light mode has been enabled", "success");
      
    }
  }
  return (
    <div>
        <Navbar mode={mode} toggleMode={toggleMode} textColor={textColor}/>
        <Calculator/>
    </div>
    
  );
}

export default App;
