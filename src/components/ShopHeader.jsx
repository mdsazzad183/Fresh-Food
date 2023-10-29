import { useContext, useState } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FaShoppingCart } from 'react-icons/fa';
import './fontAwosome.jsx';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Link, NavLink } from 'react-router-dom'; // Import NavLink
import logo from './images/1-removebg-preview.png';
import './ShopHeader.css';
import { AuthContext } from '../providers/AuthProviders';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

export default function ShopHeader() {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch(error => console.error(error));
  }

  const [showBasic, setShowBasic] = useState(false);

  const toggleNavbar = () => {
    setShowBasic(!showBasic);
  };

  return (
    <Navbar className='navBar' expand="lg" fixed="top">
      <Container fluid>
        <Navbar.Brand href="#home">
          <img alt="" src={logo} width="30" height="30" className="d-inline-block align-top text-white" />{' '}
          FRESH FOOD
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarExample01" onClick={toggleNavbar}>
          <FontAwesomeIcon icon={faBars} />
        </Navbar.Toggle>
        <Navbar.Collapse id="navbarExample01" className="nav-bar justify-content-end" in={showBasic}>
          <Nav className="ml-auto nav-items">
            <li>
              <NavLink to="/" className='navbar-item' activeClassName="active"> {/* Use NavLink */}
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to='/shop' className='navbar-item' activeClassName="active"> {/* Use NavLink */}
                Shop
              </NavLink>
            </li>
            <li>
              <NavLink to='/about' className='navbar-item' activeClassName="active"> {/* Use NavLink */}
                About
              </NavLink>
            </li>
            <li>
              <NavLink to='/contact' className='navbar-item' activeClassName="active"> {/* Use NavLink */}
                Contact
              </NavLink>
            </li>
            <li>
              <NavLink to='/signup' className='navbar-item' activeClassName="active"> {/* Use NavLink */}
                Sign Up
              </NavLink>
            </li>
            <li>
              <NavLink to='/signin' className='navbar-item' activeClassName="active"> {/* Use NavLink */}
                Sign In
              </NavLink>
            </li>
            <li>
              <NavLink to='/mycart' className='navbar-item' activeClassName="active"> {/* Use NavLink */}
                <button className=" gap-2">
                  <FaShoppingCart></FaShoppingCart>
                  {/* <div className="badge badge-secondary">+{cart?.length || 0}</div> */}
                </button>
              </NavLink>
            </li>
            <div className='ml-8'>
              {/* Use FontAwesome icon */}
              <button onClick={handleLogOut} className='btn-xs'>
                {user ? <FontAwesomeIcon icon={faSignOutAlt} /> : <Link to='/signin'></Link>}
              </button>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
