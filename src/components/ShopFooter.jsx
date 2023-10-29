// import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import './ShopFooter.css';
export default function ShopFooter() {
  return (
    <MDBFooter bgColor='light' className='text-center text-lg-start text-muted mt-4 bg-dark'>
      <MDBContainer fluid className='p-4 border-bottom text-white'>
        <MDBRow className='justify-content-center justify-content-lg-between'>
          <MDBCol size='auto' className='d-none d-lg-block'>
            <span>Get connected with us on social networks:</span>
          </MDBCol>
          <MDBCol size='auto'>
            <a href='/' className='me-4 text-reset text-white'>
              <MDBIcon fab icon='facebook-f' />
            </a>
            <a href='/' className='me-4 text-reset'>
              <MDBIcon fab icon='twitter' />
            </a>
            <a href='/' className='me-4 text-reset'>
              <MDBIcon fab icon='google' />
            </a>
            <a href='/' className='me-4 text-reset'>
              <MDBIcon fab icon='instagram' />
            </a>
            <a href='/' className='me-4 text-reset'>
              <MDBIcon fab icon='linkedin' />
            </a>
            <a href='/' className='me-4 text-reset'>
              <MDBIcon fab icon='github' />
            </a>
          </MDBCol>
        </MDBRow>
      </MDBContainer>

      <MDBContainer className='mt-5 text-white'>
        <MDBRow>
          <MDBCol size='12' md='6' lg='3' className='mb-4'>
            <h6 className='text-uppercase fw-bold mb-4'>
              <MDBIcon icon='gem' className='me-3' />
              Buy Fresh and Stay Healthy
            </h6>
            <p>
            We started this project to ensure that farmers get a fair price
              for their product and consumers get fresh fruits and vegetables.
            </p>
          </MDBCol>

          <MDBCol size='12' md='6' lg='3' className='mb-4'>
            <h6 className='products text-uppercase fw-bold mb-4'>Products</h6>
            <p>
              <a href='#!' className='text-reset'>
                Vegetable
              </a>
            </p>
            <p>
              <a href='#!' className='text-reset'>
                Fruit
              </a>
            </p>
            <p>
              <a href='#!' className='text-reset'>
                Fresh Honny
              </a>
            </p>
            <p>
              <a href='#!' className='text-reset'>
                Others
              </a>
            </p>
          </MDBCol>

          <MDBCol size='12' md='6' lg='3' className='mb-4'>
            <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
            <p>
              <a href='#!' className='text-reset'>
                Pricing
              </a>
            </p>
            <p>
              <a href='#!' className='text-reset'>
                Settings
              </a>
            </p>
            <p>
              <a href='#!' className='text-reset'>
                Orders
              </a>
            </p>
            <p>
              <a href='#!' className='text-reset'>
                Help
              </a>
            </p>
          </MDBCol>

          <MDBCol size='12' md='6' lg='3' className='mb-4'>
            <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
            <p>
              <MDBIcon icon='home' className='me-2' />
              Sylhet, 3100, BD
            </p>
            <p>
              <MDBIcon icon='envelope' className='me-3' />
              info@example.com
            </p>
            <p>
              <MDBIcon icon='phone' className='me-3' /> 01768015439
            </p>
            <p>
              <MDBIcon icon='print' className='me-3' /> 01 234 567 89
            </p>
          </MDBCol>
        </MDBRow>
      </MDBContainer>

      <div className='text-center p-4 text-white' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2021 Buy Fresh and Stay Healthy.
      </div>
    </MDBFooter>
  );
}
