// import React from 'react';
import './Services.css';
import Header from './Header';
import ShopFooter from './ShopFooter';
import vegetable from './images/vegetables.jpg';
import pulses from './images/pulses.jpg';
import fruit from './images/fruits.jpg';
function Services() {
  return (
    <>
    <Header/>
    <div className="section">
      <div className="title">
        <h1>Our Services</h1>
        <p>
        We provide a variety of vegetables, rustic fruits, which are fresh and beneficial for the our body. 
        Consumers will be able to buy these vegetables and fruits directly from the farmers, which will keep things fresh.
        </p>
       <div  className="row row-cols-1 row-cols-md-3 g-4">
          <div  className="col">
            <div  className="card">
              <img src={vegetable}  className="card-img-top" alt="Hollywood Sign on The Hill"/>
              <div  className="card-body">
                <h5  className="card-title">Card title</h5>
                <p  className="card-text">
                Fresh vegetables are nature s vibrant bounty, bursting with essential nutrients.
                From crisp greens to colorful peppers, their vibrant hues invite nourishment and health.
                </p>
                <button type="button"  className="btn btn-outline-warning" data-mdb-ripple-color="dark">Warning</button>
              </div>
            </div>
          </div>
          <div  className="col">
          <div  className="card">
            <img src={pulses}  className="card-img-top" alt="Palm Springs Road"/>
            <div  className="card-body">
              <h5  className="card-title">Card title</h5>
              <p  className="card-text">
              Fresh pulses, natures nutritious gems, bursting with vibrant flavors and essential protein. 
              From vibrant green lentils to creamy chickpeas, they lend wholesome goodness to every meal.
              </p>
              <button type="button"  className="btn btn-outline-warning" data-mdb-ripple-color="dark">Warning</button>
            </div>
          </div>
          </div>
          <div  className="col">
            <div  className="card">
              <img src={fruit}  className="card-img-top" alt="Los Angeles Skyscrapers"/>
              <div  className="card-body">
                <h5  className="card-title">Card title</h5>
                <p  className="card-text">
                  Fresh fruits are natures delightful bounty, bursting with vibrant colors and flavors. 
                  They are a nourishing source of vitamins, minerals, and antioxidants, promoting overall health and well-being.
                </p>
                <button type="button"  className="btn btn-outline-warning" data-mdb-ripple-color="dark">Warning</button>
              </div>
            </div>
          </div>
       </div>
      </div>
      <ShopFooter/>
    </div>
    </>
  );
}

export default Services;