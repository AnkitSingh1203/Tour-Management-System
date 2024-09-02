import React , { useState , useEffect} from 'react'
import '../style/tour.css'
import CommonSection from '../shared/CommonSection'
import Newsletter from '../shared/Newsletter'
import SearchBar from '../shared/SearchBar'
import tourData from '../assets/data/tours'
import TourCard from '../shared/TourCard'
import {Col, Container, Row } from 'reactstrap'


const Tours = () => {

  const [pageCount, SetPageCount]=useState(0)
  const [page,setPage]=useState(0);

  useEffect(()=>{
    const pages=Math.ceil(5/4);

    SetPageCount(pages)
  },[page])


  return (
    <>
    <CommonSection title={"All Tour"}/>
    <section>
      <Container>
        <Row>
          <SearchBar/>
        </Row>
      </Container>
    </section>
    <section>
      <Container>
        <Row>
          {
            tourData?.map(tour =>(<Col lg='3' key={tour.id}>
              < TourCard tour={tour}/></Col>))
          }
        </Row>
        <Col lg='12'>
          <div className="pagination d-flex align-items-center justify-content-center mt-4 gap-3">
            {[...Array(pageCount).keys()].map(number=>(
              <span key={number} onClick={()=> setPage(number)}
              className={page===number?'active_page':''}
              >
                {number + 1}
              </span>
            ))}
          </div>
        </Col>
      </Container>
    </section>
    <Newsletter/>
    
    </>
  )
}

export default Tours
