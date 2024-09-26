import React from 'react';
import {Link} from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="mt-5"  style={{ backgroundColor: '#20c997',width: '100vw', margin: '0', padding: '0' }}>
          

           
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Revas Online Shop</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav  ms-auto">
        <Link className="nav-link me-3" to="/Register">Register</Link> 

       <Link className="nav-link" to="/Login">Login</Link>
      </div>
    </div>
  </div>
</nav>
        </div>
    );
};

export default Navbar;