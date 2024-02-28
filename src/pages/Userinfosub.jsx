import React, { useEffect, useState } from 'react'
import Form from 'react-bootstrap/Form';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify'
import { addDetailsApi } from '../services/allApis';






function Userinfosub() {
  const [userDetails,setUserDetails]=useState({
    name:"",email:"",image:"",skill:"",time:"",phone:"",userId:""
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

useEffect(()=>{
  if(userDetails.image){
    setPreview(URL.createObjectURL(userDetails.image))
  }
},[userDetails.image])

const handleDetails=async ()=>{
  if(!userDetails.name || !userDetails.email ||!userDetails.image ||!userDetails.skill ||!userDetails.time ||!userDetails.phone ||!userDetails.userId  ){
    toast.warning("Enter valid details")
  }
  else{
    const{name,email,image,skill,time,phone,userId}=userDetails
    const userData=new FormData()
    userData.append("name",name)
    userData.append("email",email)
    userData.append("skill",skill)
    userData.append("time",time)
    userData.append("phone",phone)
    userData.append("userId",userId)
    userData.append("details_image",image)
    console.log(userData)
    const reqHeader={
      "Content-Type":"multipart/form-data","Authorization":`Bearer ${token}`
    }
    console.log(reqHeader);
    const res=await addDetailsApi(userData,reqHeader)
        console.log("res",res)
        if(res.status===200){

          
          toast.success("Details added successfully")
        //   setAddProjectResponse(res.data)
        //   
         }
        else{
          toast.error(res.response.data)
        }

  }

}


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
    <div>
        <div  className='p-3 border border-primary   shadow rounded'>
        <label className='text-center ' htmlFor='profile'>
        <h1>hello  <span className='text-info'>{userName}</span>{''}</h1>

        <Form.Label>Select your image</Form.Label>
        <input  className='align-items-center' type="file" id='profile' onChange={(e)=>setUserDetails({...userDetails,image:e.target.files[0]})} style={{ display: 'none' }}  />
        <img src={ preview?preview: "https://cdn-icons-png.flaticon.com/256/3135/3135715.png"} width={'100px'} height={'80px'} alt="img" />

      </label>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                            <Form.Label>Enter your name</Form.Label>
                                            <Form.Control type="text" placeholder="name" value={userDetails.name}  onChange={(e)=>setUserDetails({...userDetails,name:e.target.value})}/>
                                        </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                            <Form.Label>Enter your email</Form.Label>
                                            <Form.Control type="text" placeholder="email" value={userDetails.email}  onChange={(e)=>setUserDetails({...userDetails,email:e.target.value})}/>
                                        </Form.Group>
                                       
       
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                            <Form.Label>Enter your skill</Form.Label>
                                            <Form.Control type="text" placeholder="skill" value={userDetails.skill}  onChange={(e)=>setUserDetails({...userDetails,skill:e.target.value})}/>
                                        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                            <Form.Label>Enter time to tutor</Form.Label>
                                            <Form.Control type="text" placeholder="time" value={userDetails.time} onChange={(e)=>setUserDetails({...userDetails,time:e.target.value})} />
                                        </Form.Group>
        
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                            <Form.Label>Enter phone number</Form.Label>
                                            <Form.Control type="text" placeholder="phone"  value={userDetails.phone} onChange={(e)=>setUserDetails({...userDetails,phone:e.target.value})} />
                                        </Form.Group>
         <Link to={'/Userdash'}  className='btn btn-warning' onClick={handleDetails}>Save</Link>


        </div>
        
    </div>
  )
}

export default Userinfosub