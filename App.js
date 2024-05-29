import React from 'react';

import Navbar from '../src/components/navbar';
import Footer from '../src/components/Footer';
import Main from '../src/components/Main';

import '../src/css/index.css';
import '../src/components/Footer'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";


function App() {
  return (
    <div>
      <Navbar/>
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;
