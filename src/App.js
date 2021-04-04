// import logo from './logo.svg';
// import './App.css';


import Hero from './comp/Hero';
import Products from './comp/Products';
import Feature from './comp/Feature';
import Footer from './comp/Footer';
import {pizzaData, dessertData} from './comp/Products/data';
import {BrowserRouter as Router} from 'react-router-dom';
import {GlobalStyle} from './globalStyles';



function App() {
  return (
    <Router>
        <GlobalStyle />
        <Hero />
        <Products
            heading = 'Choose your favorite'
            data = {pizzaData}
        />
        <Feature />
        <Products 
            heading = 'Treats you will love'
            data = {dessertData}
        />
        <Footer />
    </Router>
  );
}

export default App;
