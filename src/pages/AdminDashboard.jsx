import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import Adminviewprofile from '../Components/Adminviewprofile'
import Adminreview from '../Components/Adminreview'
import Header from '../Components/Header'
import {  userDetails } from '../services/allApis'
import AdminMessage from '../Components/AdminMessage'








function AdminDashboard() {
  const [token, setToken] = useState("")
  const[details,setDetails]= useState([])


  const getDetails=async()=>{
    const reqHeader = {
      'Content-Type': "application/json", "Authorization": `Bearer ${token}`
    }
    const result = await userDetails(reqHeader)
    

    if (result.status === 200 ) {
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
    
    <div>
      <Header InDashboard={true}/>
      
       {/* <div className='p-3 border border-primary   shadow rounded'>
        <h1>Profiles</h1>
        <Adminviewprofile/>

       </div> */}
       <div  className='card shadow p-3 m-2 mt-5'>
               
              
                    <div className='d-flex justify-content-center'>
        
                     <h1 >profiles</h1>
                    </div>

           
        <Row>   
        
        {
          
            details?details?.map(item=>(
          
              <Col sm={12} md={6} className='mb-2 p-1'>
  
                <Adminviewprofile det={item}  />  
  
  
              </Col>
          
          
  
            )):<p></p>
        }
        
        </Row>
        
        </div>

       <Adminreview/>

       <div>

        <AdminMessage/>

        
       </div>

    </div>
  )
}

export default AdminDashboard