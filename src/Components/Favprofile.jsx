import React, { useContext, useEffect, useState } from 'react'
import { Button, Card } from 'react-bootstrap'
import { deleteFav, viewFvourite } from '../services/allApis'
import { BASE_URL } from '../services/baseUrl'
import { ToastContainer, toast } from 'react-toastify'
import { deleteDetailResponseContext } from '../context/ContextShares';








function Favprofile() {
  const [token, setToken] = useState("")
  const[details,setDetails]= useState([])
  const {deleteDetailResponse, setDeleteDetailResponse} = useContext(deleteDetailResponseContext)

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
      setDeleteDetailResponse(details._id)
    }
  }, [])

  const DeleteFavourite = async (id) => {
    const reqHeader = {
      'Content-Type': "application/json", "Authorization": `Bearer ${localStorage.getItem("token")}`
    }
    const result = await deleteFav(reqHeader,id)
    if (result.status == 200) {
      toast.success("Id deleted from favourites!!")
      getFavourite()
    }
    else {
      toast.error("Deletion Failed")
    }

  }

  
  return (
    <div>
      <div >
      <h1>Favourite profiles</h1>
      
      <div className='p-3 border border-primary shadow rounded col d-flex'>
      <div className='container'>
       <div className='d-flex flex-wrap justify-content-center mt-3'>

          

          {
            
            


            details?details?.map(item=>(

              <Card style={{ width: '100%' }} className='card m-2' >
              <Card.Img variant="top" src={`${BASE_URL}/upload/${item.details_image}`}  style={{width:'100%',height:'345px'}}/>
              <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <Card.Text>
                 skill:{item.skill}
                </Card.Text>
        
                <Button className='btn btn-danger' onClick={() => DeleteFavourite(item._id)} >Remove</Button>
                
                
                
              </Card.Body>
              
            </Card>


            )):<p className=' text text-danger'>No data to show</p>

            
          }


       


        </div>
        </div>
        </div>
        </div>
    
    </div>
  )
}

export default Favprofile