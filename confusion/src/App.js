import React from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import './App.css';


function App() {
  return (
    <div>
      <Navbar dark color="primary">
        <div className="container">
          <NavbarBrand href="/">Khyati Khanduja</NavbarBrand>
        </div>
      </Navbar>
    </div>
  );
}

export default App;
