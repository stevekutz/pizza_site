// import logo from './logo.svg';
// import './App.css';

import Navbar from "./comp/Navbar";
import Hero from './comp/Hero';
import {BrowserRouter as Router} from 'react-router-dom';
import {GlobalStyle} from './globalStyles';


function App() {
  return (
    <Router>
        <GlobalStyle />
        <Hero />

    </Router>
  );
}

export default App;
