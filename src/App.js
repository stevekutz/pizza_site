// import logo from './logo.svg';
// import './App.css';


import Hero from './comp/Hero';
import Products from './comp/Products';
import {BrowserRouter as Router} from 'react-router-dom';
import {GlobalStyle} from './globalStyles';


function App() {
  return (
    <Router>
        <GlobalStyle />
        <Hero />
        <Products />
    </Router>
  );
}

export default App;
