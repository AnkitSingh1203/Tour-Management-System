import React from 'react'
import { Card, CardBody} from 'reactstrap';
import {Link} from 'react-router-dom';
import './tour_card.css'
import CalculateAvgRating from '../utils/avgRating';


const TourCard = ({tour}) => {
    const {id,title,city,photo,price,featured, reviews}=tour;
    const {totalRating, avgRating}= CalculateAvgRating(reviews)


  return (
   <>
   <div className="tour_card">
    <Card>
        <div className="tour_img">
            <img src={photo} alt="tourmg" />
           { featured &&  <span>Featured</span>}
        </div>
        <CardBody>
        <div className="card_top d-flex align-items-center justify-content-between">

            <span className='tour_location d-flex align-item-center gap-1'>
            <i class="ri-map-pin-line"></i>{city}
            </span>
            <span className='tour_rating d-flex align-item-center gap-1'>
            <i class="ri-star-fill"></i>{avgRating===0 ? null : avgRating}{totalRating===0 ? ('not rated'):(<span>({reviews.length})</span>)} 
            
            </span>
        </div>
        <h5 className='tour_title'><Link to={`/tours/${id}`}>{title}</Link></h5>
        <div className="card_bottom d-flex align-items-center justify-content-between mt-3">
            <h5>Rs {price} <span>/per person</span></h5>
            <button className="btn booking_btn">
                <Link to={`/tours/${id}`}> Book Now</Link>
            </button>
        </div>
    </CardBody>

    </Card>
   
   </div>
   </>
  )
}

export default TourCard
