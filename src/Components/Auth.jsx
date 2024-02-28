import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { Link,useNavigate } from 'react-router-dom'
import { loginApi, registerApi } from '../services/allApis'
import { toast } from 'react-toastify'







function Auth({ register,login,admin }) {
    const [userData, setUserData] = useState({
        username:'',password:'', email:''
    })
    // console.log(userData)
    const navigate=useNavigate()
    const handleRegistration = async (e)=>{
        e.preventDefault()
        if(!userData.username || !userData.password || !userData.email){
            alert("Enter valid infomation !!")
        }
        else{
            const res= await registerApi(userData)
            if(res.status===200){
                console.log(res);
                toast.success(`Registration of ${res.data.username} is successfull !!`)
                setUserData({username:"",password:"",email:""})
                navigate('/login')
            }
            else{
                toast.error(res.response.data)
            }
        }
    }
    console.log(userData)

    const handlelogin=async (e)=>{
        e.preventDefault()
        const {email,password}=userData
        if(!email || !password){
            toast.info("enter email and password!")
        }
        else{
            const res =await loginApi(userData)
            if(res.status === 200 && res.data.existingUser){
                localStorage.setItem("currentUser",JSON.stringify(res.data.existingUser))
                localStorage.setItem("role",res.data.role)
                localStorage.setItem("token",res.data.token)
                toast.success("Login Successfull !!")
                setUserData({username:"",password:"",email:""})
                navigate('/')

            }
            else if (res.status === 200 && res.data.existingAdmin){
                localStorage.setItem("currentUser",JSON.stringify(res.data.existingAdmin))
                localStorage.setItem("role",res.data.role)
                localStorage.setItem("token",res.data.token)
                toast.success("Login Successfull !!")
                setUserData({username:"",password:"",email:""})
                navigate('/Admindash')

            }
            else{
                toast.info("enter correct details")
            }
        }
    }

    
    
    const registerForm = register ? true : false
    return (
        <div style={{ width: '100%', heigh: '100vh' }} className='d-flex justify-content-center'>
            <div className=' container w-5'>
                {/* <Link to={'/'} style={{ textDecoration: 'none' }} className='d-flex align-items-center'>
                    <i class="fa-solid fa-arrow-left"></i>
                    Back to Home

                </Link>
                 */}
                <div className='  bg-dark d-flex justify-content-center align-items-center p-5 rounded' style={{height:'100vh'}} >
                    <div className='row align-items-center'>
                        <div className='col-lg-6'>
                            <img src='https://trade.idbicapital.com/NewLogin/images/91374.png' style={{height:'700px',width:'100vh'}} alt="image" />
                        </div>
                        <div className='col-lg-6'>
                            <div className='d-flex align-items-center flex-column'>
                                <div className='d-flex mt-2 text-light'>
                                    {/* <i class="fa-solid fa-graduation-cap" style={{ color: '#e6eaed' }}> </i> */}
                                    <span className='h1 fw-bolder'>SkillSync</span>


                                </div>
                                <h4 className='text-light'>
                                    {
                                        registerForm ? 'Sign Up For SkillSync' : 'Sign In For SkillSync'
                                    }
                                </h4>
                                <form className='w-100 text-dark ' >
                                    {
                                        registerForm &&
                                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                            
                                            <Form.Control type="text" placeholder="Enter name" value={userData.username} onChange={(e)=>{setUserData({ ...userData,username:e.target.value})}} />
                                        </Form.Group>

                                    }
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                       
                                        <Form.Control type="email"  placeholder="Enter email address" value={userData.email} onChange={(e)=>{setUserData({ ...userData,email:e.target.value})}} />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                       
                                        <Form.Control type="password" placeholder=" Enter Password"  value={userData.password} onChange={(e)=>{setUserData({ ...userData,password:e.target.value})}}/>
                                    </Form.Group>

                                    {/* <div className='d-flex justify-content-center mt-4'>
                                            
                                                <Button className='btn-success '>
                                                    {
                                                        registerForm ? "sign in" : "sign up"

                                                    }
                                                </Button>
                                                

                                            
                                        </div> */}

                                    {
                                        registerForm ?
                                            <div>
                                                
                                                <button  type='submit' className='btn btn-primary' onClick={handleRegistration} >Sign up</button>
                                                <Link to={'/login'} className='ms-3'>Already a user? sign in...</Link>
                                            </div> :
                                            <div>
                                                <span>
                                                    <a href="/Userdash"></a>
                                                <button type='submit' className='btn btn-primary'  onClick={handlelogin}>Sign in</button>

                                                </span>
                                                
                                                <Link to={'/register'} className='ms-3' >New user? sign up...</Link>
                                            </div>
                                    }
                                </form>
                            </div>



                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Auth