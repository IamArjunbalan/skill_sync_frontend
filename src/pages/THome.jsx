import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import img from '../Assets/elearning.png'
import Header from '../Components/Header'
import { Link } from 'react-router-dom'




function THome() {
  const [isLogged,setisLogged]=useState(false)
  useEffect(()=>{
    if(localStorage.getItem("currentUser")){
      setisLogged(true)
    }
    else{
      setisLogged(false)
    }
  },[])
  
  return (
    
    <div className='container-fluid rounded' style={{width:'100%',height:'100vh',backgroundColor:'#a0d2eb'}}>
        <Row className='align-items-center p-5 h-100'>
            <Col sm={12} md={6}>
                <h1 style={{fontSize:'80px'}} className='text-light'>
                <i class="fa-solid fa-graduation-cap"></i>
                    SkillSync</h1>
                <p className='text-dark' style={{fontSize:'30px'}}>Unlock your potential and accelerate your growth with our innovative skill enhancement platform</p>
                {
                isLogged?
                
              <Link to={'/Userdash'}  className='btn btn-warning'>Lets start!! </Link>
              
                
              :
              <Link to={'/login'}  className='btn btn-success'>Start your pursuit </Link>


             }
             
                
            </Col>
            <Col  sm={12} md={6}>
            <img src={img} className='img-fluid' alt='/'/>

            </Col>
        </Row>

    </div>
  )
}

export default THome