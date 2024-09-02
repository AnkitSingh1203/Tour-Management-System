import React from 'react'
import ServiceCard from './ServiceCard'
import {Col} from "reactstrap"

import weatherImg from '../assets/images/weather.png'
import guidImg from '../assets/images/guide.png'
import customizationImg from '../assets/images/customization.png'



const ServiceData=[
    {
        imgUrl:weatherImg,
        title:"Calculate Weather",
        desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit aspernatur porro dicta dolores."
    },
    {
        imgUrl:guidImg,
        title:"Best Tour Guide",
        desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit aspernatur porro dicta dolores."
    },
    {
        imgUrl:customizationImg,
        title:"Customization",
        desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit aspernatur porro dicta dolores."
    },
]


const ServiceList = () => {
  return (
    <>{
        ServiceData.map((item,index)=>(
        <Col lg='3' key={index}>
            <ServiceCard item={item}/>
        </Col>
        ))
        }
    </>
  )
}

export default ServiceList
