import React from 'react';
import logo from '../components/images/logo 1.png';

function Footer() {
  return (
    <footer className="footer">
      <strong>Desenvolvedores:</strong>
      <div className="Desenvolvedores">
        <br />
        <strong>João Pedro Ortega</strong>
        <br />
        <strong>Matheus H. Souza</strong>
      </div>
      <img src={logo} id="logofooter" alt="Logo" />
    </footer>
  );
}

export default Footer;
