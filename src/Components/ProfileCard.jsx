import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Form, Link, useNavigate } from 'react-router-dom';
import { useState,useEffect } from 'react';

import Modal from 'react-bootstrap/Modal';
import { addFavouriteApi, userDetails } from '../services/allApis';
import { Col, Row } from 'react-bootstrap';
import { BASE_URL } from '../services/baseUrl';
import { ToastContainer, toast } from 'react-toastify';






function ProfileCard({detail}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [userDetails,setUserDetails]=useState({
    name:detail.name,email:detail.email,details_image:detail.details_image,skill:detail.skill,time:detail.time,phone:detail.phone,userId:detail.userId
})

  const [token,setToken]=useState("")
  useEffect(()=>{
    const existingUser=JSON.parse(localStorage.getItem("currentUser"))
    setUserDetails({...userDetails,userId:existingUser._id})
    if(localStorage.getItem("token")){
      setToken(localStorage.getItem("token"))
    }

  },[])
console.log(userDetails)
const[preview,setPreview]=useState("")
// useEffect(()=>{
//   if(userDetails.image){
//     setPreview(URL.createObjectURL(userDetails.image))
//   }
// },[userDetails.image])

// add favourite

const handleFavourite=async ()=>{
     
  
  
  
    const{name,email,details_image,skill,time,phone,userId}=userDetails
    const userData=new FormData()
    userData.append("name",name)
    userData.append("email",email)
    userData.append("skill",skill)
    userData.append("time",time)
    userData.append("phone",phone)
    userData.append("userId",userId)
    userData.append("details_image",details_image)
    console.log(userData)
    const reqHeader={
      "Content-Type":"multipart/form-data","Authorization":`Bearer ${token}`
    }
    console.log(reqHeader);
    const res=await addFavouriteApi(userData,reqHeader)
        console.log("res",res)
        if(res.status===200){

          
          toast.success("Added to Favourites successfully")
        //   setAddProjectResponse(res.data)
        //   
         }
        else{
          toast.error(res.response.data)
        }
      

  

}
console.log(detail)



  return (
    <div >

        
     <div className='p-3 border border-primary   shadow rounded col d-flex '>
     <div className='container'> 
       <div className='d-flex col'>

       
        
      <Card style={{ width: '100%' }}>
      <Card.Img variant="top" src={`${BASE_URL}/upload/${detail.details_image}`}  style={{width:'100%',height:'345px'}}/>
      <Card.Body>
        <Card.Title>{detail.name}</Card.Title>
        <Card.Text>
          {detail.skill}
        </Card.Text>
        
        <Button variant="primary" onClick={handleFavourite} >add to favourite</Button>
        
      </Card.Body>
      <Link  className='btn btn-warning' onClick={handleShow}> View profile</Link>
      
    </Card>    
    
    <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>profile</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <form>
            <div className='row'>
              <div className='col-lg-5 d-flex align-item-center'>
                <label htmlFor="profile" className='text-center'>
                  <input type="file" id='project' style={{ display: 'none' }} />
                  <img src={`${BASE_URL}/upload/${detail.details_image}`}  style={{width:'100%',height:'345px'}} alt="image" className='img-fluid' />

                </label>
              </div>
              <div className='col-lg-7'>
              
                
                <p className='form-control mb-2 rounded font-weight-bold'>Name:{detail.name}</p>
                <p className='form-control mb-2 rounded font-weight-bold'>Skill:{detail.skill}</p>
                <p className='form-control mb-2 rounded font-weight-bold'>Time:{detail.time}</p>
                <p className='form-control mb-2 rounded font-weight-bold'>E-mail:{detail.email}</p>
                <p className='form-control mb-2 rounded font-weight-bold'>Phone:{detail.phone}</p>
                
              </div>
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          
        </Modal.Footer>
      </Modal>
      </div>      

    </div>
    </div>
    </div> 
  )
}

export default ProfileCard