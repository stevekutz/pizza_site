// import logo from './logo.svg';
// import './App.css';


import Hero from './comp/Hero';
import Products from './comp/Products';
import {productData} from './comp/Products/data';
import {BrowserRouter as Router} from 'react-router-dom';
import {GlobalStyle} from './globalStyles';



function App() {
  return (
    <Router>
        <GlobalStyle />
        <Hero />
        <Products
            heading = 'Choose your favorite'
            data = {productData}
        ></Products>
    </Router>
  );
}

export default App;
