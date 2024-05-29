import React from 'react';
import logo from '../components/images/logo 1.png';

function Navbar() {
  return (
    <nav className="navbar bg-body-tertiary">
      <div className="container-fluid">
        <div className="topo">
          <img src={logo} id="logo" alt="Logo" />
          <h6>Trabalho de Tecnologia e Desenvolvimento de software</h6>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
