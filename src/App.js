import React from 'react';
import './App.css';
import About from './Component/About';
import Achievement from './Component/Achievement';
import Footer from './Component/Footer';
import Product from './Component/Product';

function App() {
  return (
    <div className="app-body">
         <div className="top-container">
            <div className="left-container">
                <Achievement/>
            </div>
            <div className="right-container">
                <About/>
            </div>
         </div>

         <Product/>

         <Footer/>
    </div>
  );
}

export default App;
