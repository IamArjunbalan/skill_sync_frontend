import React, { useEffect, useState } from 'react'
import Userprofile from '../Components/Userprofile'
import Header from '../Components/Header'
import { Card, Col, Row } from 'react-bootstrap'
import Favprofile from '../Components/Favprofile'
import { Link, useNavigate } from 'react-router-dom'
import { viewFvourite } from '../services/allApis'








function UserDashboard() {
  const [token, setToken] = useState("")
  const[details,setDetails]= useState([])


  const getFavourite=async()=>{
    const reqHeader = {
      'Content-Type': "application/json", "Authorization": `Bearer ${token}`
    }
    const result = await viewFvourite(reqHeader)
    if (result.status === 200) {
      setDetails(result.data)
      console.log(details)
    }
    else {
      setDetails([])
    }

  }

  useEffect(() => {
    if (token) {
      getFavourite()
    }
  }, [token])

  


 

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setToken(localStorage.getItem("token"))
      
    }
  }, [])
  const navigate=useNavigate()
  const[userName,setUserName]=useState("")
  useEffect(() => {
    const existingUser = JSON.parse(localStorage.getItem("currentUser"))
    if(existingUser){
        setUserName(JSON.parse(localStorage.getItem("currentUser")).username)
    }
    else{
        navigate('/login')
    }
     
    }, [])

  return (
    <div className='mt-3'>
    <Header InDashboard={true}/>
    <Row style={{marginTop:'100px',marginBottom:'20px'}}>
      
        <h1>Welcome <span className='text-success'>{userName}</span>{''}
        <Link to={'/Usermain'}  className='btn btn-warning'>Visit profiles</Link></h1>
        
       
       

        <Col sm={12} md={8}>
        <Favprofile />
        </Col>
        
        
       
        {/* profile to add */}
     
      <Col sm={12} md={4}>
        
          <Userprofile/>
      
      
      

      </Col>
      </Row>

      <div className='my-5'>
   
    <marquee behavior="" direction="slide" hspace="5%">

    <Row>
      <Col className='p-3'>
      <Card  style={{ width: '18rem',height:'20rem' }} className='rounded border shadow'>
                <Card.Img variant="top" src={`https://static.vecteezy.com/system/resources/previews/008/056/924/original/young-smiling-man-cartoon-character-doing-presentation-of-business-project-concept-flat-illustration-isolated-on-white-background-free-vector.jpg`} style={{width:'100%',height:'200px'}} />
                <Card.Body>
                    <Card.Title>Add your profile here!</Card.Title>
                    <Link to={'/Userinfo'} className='ms-3 btn btn-success'>Add<i class="fa-solid fa-arrow-right"></i></Link>
                    
                </Card.Body>
            </Card>

      </Col>

      <Col className='p-3'>
      <Card  style={{ width: '18rem',height:'20rem' }} className='rounded border shadow'>
                <Card.Img variant="top" src={`https://apastyle.apa.org/images/psi-chi-literature-review-webinar-tile_tcm11-304299.jpg`} style={{width:'100%',height:'200px'}} />
                <Card.Body>
                    <Card.Title>Review Us here!!!</Card.Title>
                    <Link to={'/Userreview'} className='ms-3 btn btn-success'>Review US!!</Link>

                    
                </Card.Body>
            </Card>


      </Col>

      <Col className='p-3'>
      <Card  style={{ width: '18rem', height:'20rem' }} className='rounded border shadow'>
                <Card.Img variant="top" src={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS630_YjCBnCQ2rFoXoh4jyoOUswk3N3V_igA&usqp=CAU`} style={{width:'100%',height:'200px'}} />
                <Card.Body>
                    <Card.Title>Check out  our profiles</Card.Title>
                    <Link to={'/Usermain'} className='ms-3 btn btn-success'>see profiles!!</Link>

                    
                </Card.Body>
            </Card>


      </Col>
    </Row>
    
            </marquee>
    
   
    </div>
      
  
    
      
  </div>
  )
}

export default UserDashboard