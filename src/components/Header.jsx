import {useState} from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';
// import logo from './logo.png';

const Header = () => {
  const location = useLocation();

  const [showBasic, setShowBasic] = useState(false);

  const toggleNavbar = () => {
    setShowBasic(!showBasic);
  };


  const validPaths = ['/about', '/services', '/contact', '/signup', '/signin'];


  const shouldDisplayNavbar = validPaths.includes(location.pathname);

  if (!shouldDisplayNavbar) {

    return null;
  }

  return (
    <>
    <header>
      <Navbar bg="light" expand="lg" fixed="top">
        <Container>
        <Navbar.Brand href="#home">
            <img alt="" src="https://img.freepik.com/free-photo/eat-healthy-restaurant-logo-papercraft-cut-out-style_53876-126879.jpg" width="30" height="30" className="d-inline-block align-top"
            />{' '}
            React Bootstrap
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarExample01" onClick={toggleNavbar}>
            <FontAwesomeIcon icon={faBars} />
          </Navbar.Toggle>
          <Navbar.Collapse id="navbarExample01" className="nav-bar justify-content-end" in={showBasic}>
            <Nav className="ml-auto nav-items">
            <Link to='/home' className="navbar-item">Home</Link>
              <Link to='/about' className="navbar-item">About</Link>
              <Link to='/services' className="navbar-item">Services</Link>
              <Link to='/shop' className="navbar-item">Shop</Link>
              <Link to='/signup' className="navbar-item">Sign Up</Link>
              <Link to='/signin' className="navbar-item">Sign In</Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
    </>
  );
};

export default Header;
