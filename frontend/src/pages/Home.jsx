import React from 'react'
import '../style/Home.css';

import {Container, Row , Col} from 'reactstrap';
import heroImg from '../assets/images/hero-img01.jpg'
import heroImg02 from '../assets/images/hero-img02.jpg'
import heroVideo from '../assets/images/hero-video.mp4'
import worldImg from '../assets/images/world.png'
import Subtitle from '../shared/Subtitle';
import ServiceList from '../services/ServiceList';
import SearchBar from '../shared/SearchBar';
import FeatureTourList from '../components/Featured-tours/FeatureTourList';
import experienceImg from '../assets/images/experience.png'
import MasonryImagesGallery from '../Image-gallery/MasonryImagesGallery';
import Testimonials from '../components/Testimonial/Testimonials';
import Newsletter from '../shared/Newsletter';



const Home = () => {
  return (
    <>
    <section>
      <Container>
        <Row>
          <Col lg='6'>
            <div className="hero_content">
              <div className="hero_subtitle d-flex align-items-center">
                <Subtitle Subtitle={'Know Before You Go'}/>
                <img src={worldImg} alt="" />
              </div>
              <h1> Traveling Opens the door to creating <span className="highlight">memories</span></h1>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae, facilis? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus, ea. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo earum quam aliquid voluptatibus.</p>
            </div>
          </Col>
          <Col lg='2'>
            <div className="hero_img-box">
              <img src={heroImg} alt="" />
            </div>
          </Col>
          <Col lg='2'>
            <div className="hero_img-box mt-5">
              <video src={heroVideo} alt="" autoPlay loop />
            </div>
          </Col>
          <Col lg='2'>
            <div className="hero_img-box">
              <img src={heroImg02} alt="" />
            </div>
          </Col>
          <SearchBar/>
        </Row>
      </Container>
    </section>


    {/* =========== secton  ============ */}

    <section>
      <Container>
        <Row>
          <Col lg='3'>
            <h5 className="services_subtitle"> What we Serve</h5>
            <h2 className='Services_title'>We offer our best services</h2>
          </Col>
          <ServiceList/>
        </Row>
      </Container>
    </section>

{/* ===========================feature tour section =================== */}
<section>
  <Container>
    <Row>
      <Col lg='12' className='mb-5'>
        <Subtitle Subtitle={'Explore'}>
        </Subtitle>
          <h3 className="featured_tour-title">Our Featured tours</h3>
      </Col>
      <FeatureTourList/>
    </Row>
  </Container>
</section>



{/*  =================== experience section */}

<section>
  <Container>
    <Row>
      <Col lg='6'>
        <div className="experience_content">
          <Subtitle subtitle={'Experience'}></Subtitle>
          <h2>With our experience <br />We will serve you</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi, tempore. <br />Lorem ipsum dolor sit, amet consectetur adipisicing.</p>
        </div>

        <div className="counter_wrapper d-flex align-items-center gap-5">
          <div className="counter_box">
            <span>112k+</span>
            <h6>Successful Trip</h6>
          </div>
          <div className="counter_box">
            <span>3k+</span>
            <h6>Regular clients</h6>
          </div>
          <div className="counter_box">
            <span>15</span>
            <h6>Years Experience</h6>
          </div>
        </div>
      </Col>
      <Col lg='6'>
        <div className="experience_img">
          <img src={experienceImg} alt="" />
        </div>
      </Col>
    </Row>
  </Container>
</section>




{/* ======================== Galary section  ============= */}
<section>
  <Container>
    <Row>
      <Col lg='12'>
      <Subtitle Subtitle={"Gallery"}>
        </Subtitle>
        <h3 className="gallery_title">Visit our cutomers tour gallery</h3>
      </Col>
      <Col lg='12'>
        <MasonryImagesGallery/>
      </Col>
    </Row>
  </Container>
</section>




{/* ======================== Testimonial section  ============= */}

<section>
  <Container>
    <Row>
      <Col lg='12'>
      <Subtitle Subtitle={"Fan Love"}/>
        <h2 className="testimonial_title">What our fans say about us</h2>
      </Col>
      <Col lg='12'>
        <Testimonials/>
      </Col>
    </Row>
  </Container>
</section>

{/* ======================== newsletter section  ============= */}

<Newsletter/>

    </>
  )
}

export default Home
