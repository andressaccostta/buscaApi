import React from 'react'

import './styles.css';

import { BrowserRouter as Router } from "react-router-dom";

import Routes from './routes';
import Menu from "./components/Menu";



function App() {
  return (
       
    <div className="App">
     <Router>
      <Menu></Menu>
     <Routes></Routes>  
      </Router> 
    



</div>



  );

}

export default App;
