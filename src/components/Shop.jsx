// import { useCart } from '../routes/CartContext';
import { useNavigate } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import data from './vegetables.json';
import { Link } from 'react-router-dom';
import bg04 from './images/bg-04.jpg';

function Shop() {
  const navigateTo = useNavigate();

  const numCards = 32; // Specify the number of cards you want to display
  const vegetables = Array.from({ length: numCards }).map((_, idx) => data.vegetables[idx % data.vegetables.length]);

  const handleAddToCart = () => {
    // Dispatch an action to add the food item to the cart
    // dispatch({ type: 'ADD_TO_CART', payload: item });
    navigateTo('/mycart');
  };

  return (
    <div>
      <img src={bg04} className='bgImage' alt='' />
      <div className='container'>
        <nav className="navbar navbar-light bg-light mb-5">
          <div className="container-fluid">
            <h1 className="navbar-brand">Marketplace</h1>
            <form className="d-flex">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-warning" type="submit">Search</button>
            </form>
          </div>
        </nav>
        <div>
          <ul className="nav nav-pills justify-content-center mb-4">
            <li className="nav-item">
              <Link className="nav-link bg-info" to='/'>All</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to='/'>Vegetable</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to='/'>Fruit</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to='/'>Pulses</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to='/'>Dried</Link>
            </li>
          </ul>
        </div>
        <Row xs={1} md={4} className="g-4 ms-4">
          {vegetables.map((item, idx) => (
            <Col key={idx}>
              <Card className='card-info'>
                <Card.Img variant="top" className='img' src={item.img} />
                <Card.Body>
                  <Card.Title className='d-flex justify-content-center'>{item.name}</Card.Title>
                  <Card.Text className='price d-flex justify-content-center'>Price: {item.price} TAKA</Card.Text>
                  <div className='d-flex justify-content-center'>
                    <button
                      className='cart-btn'
                      onClick={() => handleAddToCart(item)}
                    >
                      ADD TO CART
                    </button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        {/* <div className="join m-4">
          <button className="join-item btn">1</button>
          <button className="join-item btn btn-active">2</button>
          <button className="join-item btn">3</button>
          <button className="join-item btn">4</button>
        </div> */}
      </div>
    </div>
  );
}

export default Shop;
