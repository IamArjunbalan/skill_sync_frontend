import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import { deleteRvw, userReview } from '../services/allApis';
import { toast } from 'react-toastify';





function Adminreview() {
  const [token, setToken] = useState("")
  const[reviews,setReviews]= useState([])

  const getReviews=async()=>{
    const reqHeader = {
      'Content-Type': "application/json", "Authorization": `Bearer ${token}`
    }
    const result = await userReview(reqHeader)
    if (result.status === 200) {
      setReviews(result.data)
      console.log(reviews)
    }
    else {
      setReviews([])
    }

  }
  const DeleteReview = async (id) => {
    const reqHeader = {
      'Content-Type': "application/json", "Authorization": `Bearer ${localStorage.getItem("token")}`
    }
    const result = await deleteRvw(reqHeader,id)
    if (result.status == 200) {
      toast.success("Review deleted")
      getReviews()
    }
    else {
      toast.error("Deletion Failed")
    }

  }

  useEffect(() => {
    if (token) {
      getReviews()
    }
  }, [token])
  
  useEffect(() => {
    if (localStorage.getItem("token")) {
      setToken(localStorage.getItem("token"))
    }
  }, [])
  return (
    <div>
        <div className='p-3 border border-primary   shadow rounded w-100'>
            <h1>Review</h1>
            
            
           
                <Table striped className=''>

                
                <thead>
                  <tr>
                    
                    <th> Name</th>
                    <th>Review</th>
                    
                  </tr>
                </thead>
                
                {
                  

            
          
                   reviews?reviews?.map(item=>(
                <tbody>
                  <tr>
                    
                    <td>{item.name}</td>
                    <td>{item.review}</td>
                    <td><button className='btn btn-danger' onClick={() => DeleteReview(item._id)}>delete</button></td>
                   
                  </tr>
                
                </tbody>
                )): <div className='text-danger'>No Review to show</div>
                
                
                }
              </Table>



              

            
         

            
            
        
        </div>
      
    </div>
  )
}

export default Adminreview