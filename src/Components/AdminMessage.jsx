import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'
import { deleteMsg, viewMsg } from '../services/allApis'
import { toast } from 'react-toastify'






function AdminMessage() {
    const [token, setToken] = useState("")
    const[Message,setMessage]= useState([])
    const getMessage=async()=>{
        const reqHeader = {
          'Content-Type': "application/json", "Authorization": `Bearer ${token}`
        }
        const result = await viewMsg(reqHeader)
        if (result.status === 200) {
            setMessage(result.data)
          console.log(Message)
        }
        else {
            setMessage([])
        }
    
      }
    
      useEffect(() => {
        if (token) {
          getMessage()
        }
      }, [token])
      
      useEffect(() => {
        if (localStorage.getItem("token")) {
          setToken(localStorage.getItem("token"))
        }
      }, [])
      const DeleteMessage = async (id) => {
        const reqHeader = {
          'Content-Type': "application/json", "Authorization": `Bearer ${localStorage.getItem("token")}`
        }
        const result = await deleteMsg(reqHeader,id)
        if (result.status == 200) {
          toast.success("Message deleted")
          getMessage()
        }
        else {
          toast.error("Deletion Failed")
        }
    
      }
    
  return (
    <div>
         <div className='p-3 border border-primary   shadow rounded w-100'>
            <h1>Messages</h1>
         <Table striped className=''>

                
<thead class="thead-dark">
  <tr>
    
    <th> Name</th>
    <th>Message</th>
    <th></th>
    
  </tr>
</thead>

{
  Message?Message?.map(item=>(



   
<tbody>
  <tr>
    
    
    <td>{item.username}</td>
    <td>{item.message}</td>
    <td><button className='btn btn-danger' onClick={() => DeleteMessage(item._id)}>delete</button></td>

   
  </tr>

</tbody>
 )): <div className='text-danger'>No message to show</div>
                
                
}





</Table>
</div>

    </div>
  )
}

export default AdminMessage