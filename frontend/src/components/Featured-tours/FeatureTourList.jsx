import React from 'react'

import TourCard from '../../shared/TourCard'
import tourData from '../../assets/data/tours'
import { Col } from 'reactstrap';

const FeatureTourList = () => {
  return (
    <>
    {
        tourData?.map(tour=>(
            <Col key={tour.id} lg='3' className='mb-4'>
                <TourCard tour={tour}/>
            </Col>
        ))
    }
    </>
  )
}

export default FeatureTourList
