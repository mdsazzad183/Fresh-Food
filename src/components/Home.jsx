// import React from 'react';
import "./Home.css";
import customer from "./images/customer.png";

import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import data from "./foods.json";
import bg1 from "./images/bg-01.jpg";
import bg2 from "./images/bg-02.jpg";
import bg3 from "./images/bg-03.jpg";


const Home = () => {

  const numCards = 12; 
  const foods = Array.from({ length: numCards }).map(
    (_, idx) => data.foods[idx % data.foods.length]
  );
  return (
    <>
      <main>
        {/* <ShopHeader /> */}

        <section>
          <div
            id="carouselExampleControls"
            className="carousel slide"
            data-bs-ride="carousel"
            data-bs-interval="2000"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src={bg1} className="d-block w-100" alt="..." />
              </div>
              <div className="carousel-item">
                <img src={bg2} className="d-block w-100" alt="..." />
                <div className="carousel-caption">
                  <p>Image 2 Description</p>
                  <button className='cart-btn'>Read More</button>
                </div>
              </div>
              <div className="carousel-item">
                <img src={bg3} className="d-block w-100" alt="..." />
                <div className="carousel-caption">
                  <p>Image 3 Description</p>
                  <button className='cart-btn'>Read More</button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="d-flex grid facilities">
            <div className="g-col-3">
              <img
                src="https://cdn-icons-png.flaticon.com/128/327/327896.png"
                className=""
                alt=""
                width={160}
                height={156}
              />
              <h3>FREE SHIPPING</h3>
              <p>ON ORDER OVER 5KG</p>
            </div>
            <div className="g-col-3">
              <img
                src="https://cdn-icons-png.flaticon.com/128/9884/9884278.png"
                className=""
                alt=""
                width={160}
                height={156}
              />
              <h3>ALWAYS FRESH</h3>
              <p>PRODUCT WELL PACKAGE</p>
            </div>
            <div className="g-col-3">
              <img
                src="https://cdn-icons-png.flaticon.com/128/6603/6603021.png"
                className=""
                alt=""
                width={160}
                height={156}
              />
              <h3>SUPERIOUR QUALITY</h3>
              <p>QUALITY PRODUCT</p>
            </div>
            <div className="g-col-3">
              <img
                src="https://cdn-icons-png.flaticon.com/128/1067/1067566.png"
                className=""
                alt=""
                width={160}
                height={156}
              />
              <h3>SUPPORT</h3>
              <p>24/7 SUPPORT</p>
            </div>
          </div>
        </section>

        <section className=""></section>

        {/* services */}

        <section className=" service-info">
          <h1 className="mt-11 text-4xl font-bold text-center">OUR SERVICES</h1>
          <div className="m-8 container gap-4 flex justify-center">
            <div className="card w-96 bg-base-100 shadow-xl">
              <figure className="px-5 pt-5">
                <img
                  src="https://img.freepik.com/free-photo/fresh-dairy-products_114579-84810.jpg"
                  alt="Shoes"
                  className="rounded-xl"
                />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">Dairy Produts!</h2>
                <p>
                  Dairy products like milk, yogurt, and cheese are excellent
                  sources of calcium, which is vital for strong bones and teeth.
                </p>
                <div className="card-actions">
                  <button className='cart-btn'>Buy Now</button>
                </div>
              </div>
            </div>
            <div className="card w-96 bg-base-100 shadow-xl">
              <figure className="px-10 pt-10">
                <img
                  src="https://img.freepik.com/free-photo/front-view-different-nuts-with-white-confitures-grey-surface_140725-74929.jpg"
                  alt="Shoes"
                  className="rounded-xl"
                />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">Pulses!</h2>
                <p>
                  Pulses, such as lentils, chickpeas, and beans, are rich in
                  protein, fiber, and various vitamins and minerals.
                </p>
                <div className="card-actions">
                  <button className='cart-btn'>Buy Now</button>
                </div>
              </div>
            </div>
            <div className="card w-96 bg-base-100 shadow-xl">
              <figure className="px-10 pt-10">
                <img
                  src="https://img.freepik.com/free-photo/cornucopia-composition-with-delicious-foods_23-2149103286.jpg"
                  alt="Shoes"
                  className="rounded-xl"
                />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">Fruits</h2>
                <p>
                  Vegetables and fruits are packed with essential vitamins,
                  minerals, and fiber, contributing to a well-balanced diet.
                </p>
                <div className="card-actions">
                  <button className='cart-btn'>Buy Now</button>
                </div>
              </div>
            </div>
            <div className="card w-96 bg-base-100 shadow-xl">
              <figure className="px-10 pt-10">
                <img
                  src="https://img.freepik.com/free-photo/vegetables-herbs-basket_23-2147694078.jpg"
                  alt="Shoes"
                  className="rounded-xl"
                />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">Vegetables</h2>
                <p>
                  Vegetables and fruits are packed with essential vitamins,
                  minerals, and fiber, contributing to a well-balanced diet.
                </p>
                <div className="card-actions">
                  <button className='cart-btn'>Buy Now</button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="container">
          <div className="products ">
            <h1 className="text-center text-4xl font-bold">OUR PRODUCTS</h1>
            <p className="text-center mb-4">
              Consumers will be able to buy these vegetables and fruits directly
              from the farmers, which will keep things fresh.
            </p>
          </div>
          <Row xs={1} md={4} className="g-4 ms-4">
            {foods.map((food, idx) => (
              <Col key={idx}>
                <Card className="card-info">
                  <Card.Img
                    variant="top"
                    className="img"
                    src={food.photo_url}
                  />
                  <Card.Body>
                    <Card.Title>{food.name}</Card.Title>
                    <Card.Text>Price: ${food.price}</Card.Text>
                  </Card.Body>
                  {/* <Button variant="primary">Add to cart</Button> */}
                </Card>
              </Col>
            ))}
          </Row>
        </section>

        {/* Testimonial section */}
        <section className="testimonial-section mt-3">
          <div className="container">
            <div className="row">
              <div className="col-md-12 mb-4">
                <h2 className="text-center text-4xl font-bold">
                  {" "}
                  Our Satisfied Customer Says
                </h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4">
                <div className="testimonial justify-evenly">
                  {/* <img src={customer} alt="" height={100} width={96} /> */}
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <img src={customer} alt="" height={100} width={96} />
                  </div>
                  <p>
                    I absolutely love the quality of the vegetables and fruits
                    Ive received from this marketplace. The produce is always
                    fresh, and I can taste the difference in their natural
                    flavors. Its great to support local farmers too!
                  </p>
                  <p className="customer-name">- John Doe</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="testimonial">
                <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <img src={customer} alt="" height={100} width={96} />
                  </div>
                  <p>
                    I absolutely love the quality of the vegetables and fruits
                    Ive received from this marketplace. The produce is always
                    fresh, and I can taste the difference in their natural
                    flavors. Its great to support local farmers too!
                  </p>
                  <p className="customer-name">- Jane Smith</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="testimonial">
                <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <img src={customer} alt="" height={100} width={96} />
                  </div>
                  <p>
                    I absolutely love the quality of the vegetables and fruits
                    Ive received from this marketplace. The produce is always
                    fresh, and I can taste the difference in their natural
                    flavors. Its great to support local farmers too!
                  </p>
                  <p className="customer-name">- Alex Johnson</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      {/* <ShopFooter /> */}
    </>
  );
};

export default Home;
