import React from 'react'
import '../style/tour-details.css'
import {Container,Row,Col,Form,Listgroup} from 'reactstrap'
import {useParams} from 'react-router-dom'
import tourData from '../assets/data/tours'
import CalculateAvgRating from '../utils/avgRating'

const TourDetails = () => {

  const {id}= useParams()

  // this is static data 
  const tour = tourData.find(tour=>tour.id===id);
  // distructure properties from tour obj

  const {photo ,title,desc, price,address,reviews,city,distance,maxGroupSize}=tour;
  const {totalRating,avgRating}= CalculateAvgRating(reviews)



  return (
    <>
    
    <section>
      <Container>
        <Row>
          <Col lg ='5'>
            <div className="tour_content">
              <img src={photo}alt="" />
              <div className="tour_info">
                <h2>{title}</h2>
                <div className="d-flex align-items-center gap-5">
                <span className='tour_rating d-flex align-item-center gap-1'>
                 <i class="ri-star-fill" style={{'color':'var(--secondary-color)'}}></i>
                 {CalculateAvgRating===0 ? null : avgRating}{totalRating===0 ? ('not rated'):(<span>({reviews?.length})</span>)} 
            
                </span>
                <span><i class="ri-map-pin-user-line"></i> {address}</span>

                </div>
                <div className="tour_extra_details">
                  <span><i class="ri-map-pin-line"></i> {city}</span>
                  <span><i>₹ </i> {price} /per person</span>
                  <span><i class="ri-group-line"></i> {maxGroupSize}</span>
                </div>
                <h5>Description</h5>
                <span>{desc}</span>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section></>
  )
}

export default TourDetails
