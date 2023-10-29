// import React from 'react'
// import { MDBBtn } from 'mdb-react-ui-kit';
import './About.css';
import customer from './images/customer.png';

import bg04 from './images/bg-04.jpg';
import img1 from './images/img1.jpg';
const About = () => {
  return (
    <div>

        <div className="">
          <img src={bg04} alt="" className="background-image" />
          {/* <div className="content">
            <h1>Your Heading</h1>
            <p>Your paragraph text goes here.</p>
          </div> */}
        </div>

      
      <section className='container'>
        <div className='grid d-flex' style={{ "--bs-columns": 10, "--bs-gap": "1rem" }}>
          <div className='g-col-4'><img src={img1} alt='' height={500}/></div>
          <div className='g-col-6'>
            <h1>Welcome to our e-farming platform!</h1>
            <p>We are dedicated to 
                 revolutionizing the agricultural industry by connecting farmers and consumers in a seamless digital 
                  environment.Our platform leverages technology to empower farmers to showcase their products, share their farming practices,
                  and sell their produce directly to consumers.Through our platform, farmers gain access to a wider market, 
                  enabling them to reach more customers and increase their profitability. At the same time, consumers can enjoy the convenience of sourcing fresh, 
                  local produce from the comfort of their homes, fostering adirect and transparent relationship between farmers and consumers.
            </p>
            {/* <MDBBtn rounded color='warning'>Shop Now</MDBBtn> */}
            </div>
        </div>
      </section>
      <section className="testimonial-section mt-3">
          <div className="container">
            <div className="row">
              <div className="col-md-12 mb-4">
                <h2 className='text-center '>Our Satisfied Customer Says</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4">
                <div className="testimonial">
                  <img src={customer} alt=''height={100} width={96}/>
                  <p>I absolutely love the quality of the vegetables and fruits I ve received from this marketplace. 
                    The produce is always fresh, and I can taste the difference in their natural flavors. Its great to support local farmers too!</p>
                  <p className="customer-name">- John Doe</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="testimonial">
                  <img src={customer} alt=''height={100} width={96}/>
                  <p>I absolutely love the quality of the vegetables and fruits Ive received from this marketplace. 
                    The produce is always fresh, and I can taste the difference in their natural flavors. Its great to support local farmers too!</p>
                  <p className="customer-name">- Jane Smith</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="testimonial">
                  <img className='' src={customer} alt=''height={100} width={96}/>
                  <p>I absolutely love the quality of the vegetables and fruits Ive received from this marketplace. 
                    The produce is always fresh, and I can taste the difference in their natural flavors. Its great to support local farmers too!</p>
                  <p className="customer-name">- Alex Johnson</p>
                </div>
              </div>

            </div>
          </div>
        </section>
      
    </div>
  )
}

export default About;
