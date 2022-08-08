// import logo from './logo.svg';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React,{useState} from 'react'
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  // Switch,
  Route,
  // Routes,
  Switch,
  // Link
} from "react-router-dom";

function App() {
  const [mode, setMode]=useState('light');
  const [alert,setAlert]=useState(null);

  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }

  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='#271c82'
      showAlert("Dark mode has been enabled","success");
      document.title="TextUtils - Dark Mode";
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white'
      showAlert("Light mode has been enabled","success");
      document.title="TextUtils - Light Mode";
    }
    
  }
  
  return (
    <>
    <Router>
    <Navbar title="TextUtils" About="About Us" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <div className="container">
    <Switch>
          <Route path="/about">
            <About mode={mode}/>
          </Route> 
          <Route path="/"> 
            <TextForm alert={showAlert} heading="Analyze Your Text Here" mode={mode}/>
           </Route> 
    </Switch> 
      {/* <About/> */}
    </div>
    </Router> 
    </>
  );
}

export default App;
