import React, { useEffect, useState } from 'react'
import Header from '../Components/Header'
import ProfileCard from '../Components/ProfileCard'
import { Col, Row } from 'react-bootstrap'
import { userDetails } from '../services/allApis'
import { Link } from 'react-router-dom'







function UserMain() {
    const [token, setToken] = useState("")
  const[details,setDetails]= useState([])

  const getDetails=async()=>{
    const reqHeader = {
      'Content-Type': "application/json", "Authorization": `Bearer ${token}`
    }
    const result = await userDetails(reqHeader)
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
      getDetails()
    }
  }, [token])

  


 

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setToken(localStorage.getItem("token"))
    }
  }, [])

    return (

        <div  className='card shadow p-3 m-2 mt-5'>

            <Header InDashboard={true}/>
            


               
              
                    <div className='d-flex justify-content-center'>
        
                     <h1 >All profiles</h1>
                    
                    </div>

           
            
        <Row>
        
          {
            

              details?details?.map(item=>(
                <Col sm={12} md={6} >
    
                  <ProfileCard  detail={item}/>  
    
    
                </Col>
              )) : <div className='text-danger'>No data to show</div>

            
            // details?details?.map(item=>(
            //   <Col sm={12} md={6} className='mb-2 p-1'>
  
            //     <ProfileCard  detail={item}/>  
  
  
            //   </Col>
            // )) : <div className='text-danger'>No data to show</div>
          }
          
         
          
  
  
        
        </Row>
        
        </div>
        
    )
}

export default UserMain
