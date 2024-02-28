import React, { useContext, useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import { Link } from 'react-router-dom';
import { BASE_URL } from '../services/baseUrl';
import { ToastContainer, toast } from 'react-toastify';
import { adminDel,deleteFav,userDetails } from '../services/allApis';
import { deleteDetailResponseContext } from '../context/ContextShares';









function Adminviewprofile({det}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
 


  // const Delete = async (id) => {
  //   const reqHeader = {
  //     'Content-Type': "application/json", "Authorization": `Bearer ${localStorage.getItem("token")}`
  //   }
  //   const result = await adminDel(reqHeader,id)
  //     const val = await deleteFav(reqHeader,deleteDetailResponse)
  //   if (result.status == 200 && val.status==200) {
  //     toast.success("hello admin deleted id!")
  //     getDetails()
  //     DeleteFavourite()
  //   }
  //   else {
  //     toast.error("Deletion Failed")
  //   }

  // }
  // const DeleteFavourite = async (id) => {
  //   const reqHeader = {
  //     'Content-Type': "application/json", "Authorization": `Bearer ${localStorage.getItem("token")}`
  //   }
  //   const result = await deleteFav(reqHeader,id)
  //   if (result.status == 200) {
  //     toast.success("Id deleted from favourites!!")
      
  //   }
  //   else {
  //     toast.error("Deletion Failed")
  //   }

  // }
 
  return (
    <div>
      <div className='p-3 border border-primary   shadow rounded col d-flex '>
     <div className='container'> 
       <div className='d-flex col'>
       

         <Card style={{ width: '100%' }} >
      <Card.Img variant="top" src={`${BASE_URL}/upload/${det.details_image}`}  style={{width:'100%',height:'345px'}} />
      <Card.Body>
        <Card.Title>{det.name}</Card.Title>
        <Card.Text>
          <p>{det.skill}</p>
          
         
        </Card.Text>
        
        
        
        
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
                  <img src={`${BASE_URL}/upload/${det.details_image}`} alt="image" style={{width:'100%',height:'345px'}} className='img-fluid' />

                </label>
              </div>
              <div className='col-lg-7'>
              <p className='form-control mb-2 rounded font-weight-bold'>Name:{det.name}</p>
                <p className='form-control mb-2 rounded font-weight-bold'>Skill:{det.skill}</p>
                <p className='form-control mb-2 rounded font-weight-bold'>Time:{det.time}</p>
                <p className='form-control mb-2 rounded font-weight-bold'>E-mail:{det.email}</p>
                <p className='form-control mb-2 rounded font-weight-bold'>Phone:{det.phone}</p>
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

export default Adminviewprofile