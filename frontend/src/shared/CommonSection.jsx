import React from 'react'
import './Common-section.css'
import {Container, Row, Col} from 'reactstrap'


const CommonSection = () => {
  return (
    <section className="common_section">
      <Container>
        <Row>
          <Col lg='12'>
            <h1>All Tour</h1>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default CommonSection
