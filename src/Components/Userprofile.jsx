import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { viewUser } from '../services/allApis'
import { BASE_URL } from '../services/baseUrl'



function Userprofile() {

  const [token, setToken] = useState("")
  const[details,setDetails]= useState([])
  const[preview,setPreview]=useState("")

  

  const getDetails=async()=>{
    const reqHeader = {
      'Content-Type': "application/json", "Authorization": `Bearer ${token}`
    }
    
    
    const result = await viewUser(reqHeader)
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
  console.log(details)
  return (
    
    <div className='card shadow p-5 me-2'>
    <div>
      <h3>My profile</h3>
      {/* <span className='border btn'>
        <i  class="fa-solid fa-check" style={{ color: '#63E6BE' }}></i>
      </span> */}
    

    </div>

    <div className='mt-3 row justify-content-center'>
      <label className='text-center' htmlFor='profile'>
        <input type="file" id='profile' style={{ display: 'none' }}  />
        <img src={`${BASE_URL}/upload/${details.details_image}`}width={'100px'} height={'80px'} alt="img" />

      </label>
      



                  <div className='mt-3'>
                    
                  <div className='form-control mb-2 rounded font-weight-bold'>Name:{details.name}</div>
                  </div>
            
                  <div className='mt-3'>
                  <p className='form-control mb-2 rounded font-weight-bold'>skill:{details.skill}</p>
                  </div>
                  <div className='mt-3'>
                  <p className='form-control mb-2 rounded font-weight-bold'>Time schedule:{details.time}</p>
                  </div>
                  <div className='mt-3'>
                  <p className='form-control mb-2 rounded font-weight-bold'>emil:{details.email}</p>
                  </div>
                  <div className='mt-3'>
                  <p className='form-control mb-2 rounded font-weight-bold'>Phone:{details.phone}</p>
                  </div>{''}
                  

              
     
      



      


    </div>

    

  </div>

  )
}

export default Userprofile