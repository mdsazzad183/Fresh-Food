// import React from 'react'
import './Contact.css'

import bg04 from './images/bg-04.jpg'
import MapComponent from './MapComponent'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faFacebook } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core'
import {fab} from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
  library.add(fab,fas);
  return (
    <div>

      <div className="">
          <img src={bg04} alt="" className="background-image" />
          <div className="content">
            <h1>Your Heading</h1>
            <p>Your paragraph text goes here.</p>
          </div>
        </div>
        <MapComponent/>
        <div className="container">
           <div className="row row-cols-2 row-cols-lg-4 g-2 g-lg-3">
             <div className="col">
               <div className="p-3 /">
                <h4>Any Question?</h4>
                <p>Free <FontAwesomeIcon icon={['fas', 'phone']} /> 01768015439</p>
               </div>
             </div>
             <div className="col">
               <div className="p-3 /">
                <h4>Write Email</h4>
                <p><FontAwesomeIcon icon={['fas', 'envelope']} /> e-farm2.0@gmail.com</p>
               </div>
             </div>
             <div className="col">
               <div className="p-3 /">
                <h4>Visit Our Office</h4>
                <p><FontAwesomeIcon icon={['fas', 'location-dot']} /> Sylhet, 3100, BD</p>
               </div>
             </div>
             <div className="col">
               <div className="p-3 /">
                  <a href='/' className='me-4 text-reset text-white'>
                  <FontAwesomeIcon icon={['fab', 'facebook']} size="2x"/>
                  </a>
                  <a href='/' className='me-4 text-reset'>
                  <FontAwesomeIcon icon={['fab', 'twitter']} size="2x"/>
                  </a>
                  <a href='/' className='me-4 text-reset'>
                  <FontAwesomeIcon icon={['fab', 'instagram']} size="2x"/>
                  </a>
                  <a href='/' className='me-4 text-reset'>
                  <FontAwesomeIcon icon={['fab', 'linkedin']} size="2x"/>
                  </a>
               </div>
             </div>
           </div>
           <div className='h-box'>
            <h1 className='text text-center'>We Always Here to Help You</h1>
               <div className="row row-cols-2 g-3 pq-box m-4">
                  <div className="col q-box">
                    <input type="text" className="form-control" placeholder="Your name" aria-label="First name"/>
                  </div>
                  <div className="col q-box">
                    <input type="email" className="form-control" placeholder="Email Address" aria-label="email"/>
                  </div>
                  <div className="col q-box">
                    <input type="text" className="form-control" placeholder="Phone" aria-label="phone"/>
                  </div>
                  <div className="col q-box">
                    <input type="text" className="form-control" placeholder="Subject" aria-label="subject"/>
                  </div>
                </div>
                <div className="col txt-box">
                  <textarea className="form-control txt" placeholder="Write Message" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
                <button type="button" className="c-btn text-white fs-5 fw-bold rounded-pill">Sent a Message <FontAwesomeIcon icon={['fas', 'fa-circle-arrow-right']}/> </button>
           </div>
        </div>

    </div>
  )
}

export default Contact
