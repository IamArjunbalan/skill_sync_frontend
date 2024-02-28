import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { addReviewApi } from '../services/allApis';







function UserReview() {
  const [userReviews,setUserReviews]=useState({
    name:"",review:"",userId:""
  })
  const [token,setToken]=useState("")
  useEffect(()=>{
    const existingUser=JSON.parse(localStorage.getItem("currentUser"))
    setUserReviews({...userReviews,userId:existingUser._id})
    if(localStorage.getItem("token")){
      setToken(localStorage.getItem("token"))
    }

  },[])

  const handleReview=async ()=>{
    if(!userReviews.name || !userReviews.review  ||!userReviews.userId  ){
      toast.warning("Enter valid details")
    }
    else{
      const{name,review,userId}=userReviews
      const userData=new FormData()
      userData.append("name",name)
      userData.append("review",review)
      userData.append("userId",userId)
     
      console.log(userData)
      const reqHeader={
        "Content-Type":"multipart/form-data","Authorization":`Bearer ${token}`
      }
      console.log(reqHeader);
      const res=await addReviewApi(userData)
          console.log("res",res)
          if(res.status===200){
  
            
            toast.success("Review added successfully")
          //   setAddProjectResponse(res.data)
          //   
           }
          else{
            toast.error(res.response.data)
          }
  
    }
  
  }
  return (
    <div  className='p-3 border border-primary   shadow rounded w-100'>
        <h1>Submit your Reviews</h1>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                            <Form.Label>Enter your name</Form.Label>
                                            <Form.Control type="text" placeholder="name" value={userReviews.name}  onChange={(e)=>setUserReviews({...userReviews,name:e.target.value})}/>
                                        </Form.Group>
          <FloatingLabel controlId="floatingTextarea2" label="Tell me what you think about us!!!">
        <Form.Control
          as="textarea"
          placeholder="Tell me what you think about us!!!" value={userReviews.review}  onChange={(e)=>setUserReviews({...userReviews,review:e.target.value})}
          style={{ height: '100px' }}
        />
      </FloatingLabel>
      <Link to={'/Userdash'} className='ms-3 btn btn-success' onClick={handleReview}>Submit</Link>

    </div>
  )
}

export default UserReview