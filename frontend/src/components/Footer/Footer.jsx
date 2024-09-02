import React from 'react'
import './footer.css'
import {Container,Row,Col, ListGroup, ListGroupItem} from 'reactstrap'
import { Link } from 'react-router-dom'
import logo from '../../assets/images/logo.png'

const year=new Date().getFullYear()

const quick_links=[
  {
      path:'/home',
      display:'Home'
  },
  {
      path:'/about',
      display:'about'
  },
  {
      path:'/tours',
      display:'tours'
  }
]


const quick_links2=[
  {
      path:'/gallery',
      display:'Gallery'
  },
  {
      path:'/login',
      display:'Login'
  },
  {
      path:'/register',
      display:'Register'
  }
]

const Footer = () => {
  return (
    <><footer className='footer'>
      <Container>
        <Row>
          <Col lg='3'>
            <div className="logo">
              <img src={logo} alt="" />
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero, consequatur.</p>
              <div className="social_links d-flex align-items-center gap-4">
                <span>
                  <Link to='#'>
                  <i class="ri-youtube-line "></i>
                  </Link>
                  <Link to='#'>
                  <i class="ri-github-fill"></i>
                  </Link>
                  <Link to='#'>
                  <i class="ri-facebook-circle-fill"></i>
                  </Link>
                  <Link to='#'>
                  <i class="ri-instagram-line"></i>
                  </Link>
                </span>

              </div>
            </div>
          </Col>
          <Col lg='3'>
            <h5 className='footer_links-title'> Discover</h5>
            <ListGroup className='footer_quick-links'>
              {
                quick_links.map((item,index)=>
                 <ListGroupItem key={index} className='ps-0 border-0'>
                <Link to={item.path}>{item.display}</Link>
                </ListGroupItem>
                
                )
              }
            </ListGroup>
          </Col>
          <Col lg='3'>

          <h5 className='footer_links-title'> Quick Link</h5>
          <ListGroup className='footer_quick-links'>
              {
                quick_links2.map((item,index)=>
                 <ListGroupItem key={index} className='ps-0 border-0'>
                <Link to={item.path}>{item.display}</Link>
                </ListGroupItem>
                
                )
              }
            </ListGroup>
          </Col>
          <Col lg='3'>
          <h5 className='footer_links-title'> Contact</h5>
          <ListGroup className='footer_quick-links'>
              
                 <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-3'>
                  <h6 className='mb-0 d-flex align-items-center gap-2'>
                    <span><i class="ri-map-pin-line"></i></span>
                    Address:
                  </h6>
                  <p className='mb-0'> Noida, India 201312</p>
                </ListGroupItem>
                
              
            </ListGroup>
          <ListGroup className='footer_quick-links'>
              
                 <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-3'>
                  <h6 className='mb-0 d-flex align-items-center gap-2'>
                    <span><i class="ri-mail-open-line"></i></span>
                    Email:
                  </h6>
                  <p className='mb-0'>tour@travelworld.com</p>
                </ListGroupItem>
                
              
            </ListGroup>
          <ListGroup className='footer_quick-links'>
              
                 <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-3'>
                  <h6 className='mb-0 d-flex align-items-center gap-2'>
                    <span><i class="ri-phone-line"></i></span>
                    phone no:
                  </h6>
                  <p className='mb-0'>+91 9582892345</p>
                </ListGroupItem>
            </ListGroup>
          </Col>

          <Col lg='12' className='text-center mt-4 mb-0'>
            <p className='copyright'>Copyright {year}, design by Abhay and Ankit, Developed by Sachin. all rights reserved</p>
          </Col>

        </Row>
      </Container>
    </footer>
    </>
  )
}

export default Footer
