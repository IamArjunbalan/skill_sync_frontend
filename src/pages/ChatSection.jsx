import React, { useEffect, useState } from 'react';
import './ChatSection.css'
import { toast } from 'react-toastify';
import { addMessageApi, viewMsg } from '../services/allApis';



function ChatSection() {
  const [userMessage,setUserMessage]=useState({
    username:"",message:"",userId:""
  })
  const[viewMessage,setviewMessage]=useState([])
  const [token, setToken] = useState([])
  

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
 
 

  
  useEffect(()=>{
    const existingUser=JSON.parse(localStorage.getItem("currentUser"))
    setUserMessage({...userMessage,userId:existingUser._id,username:existingUser.username})
    if(localStorage.getItem("token")){
      setToken(localStorage.getItem("token"))
      
    }

  },[])

  const getMessage=async()=>{
    const reqHeader = {
      'Content-Type': "application/json", "Authorization": `Bearer ${token}`
    }
    const result = await viewMsg(reqHeader)
    if (result.status === 200) {
      setviewMessage(result.data)
      console.log(viewMessage)
    }
    else {
      setviewMessage([])
    }

  }


  const handleMessage=async ()=>{
    const{username,message,userId}=userMessage
    if(!message || !username ||!userId  ){
      toast.warning("Enter Message")
    }
    else{
      // const{username,message,userId}=userMessage
      const userData=new FormData()
      userData.append("username",username)
      userData.append("message",message)
      userData.append("userId",userId)
     
      console.log(userData)
      const reqHeader={
        "Content-Type":"multipart/form-data","Authorization":`Bearer ${token}`
      }
      console.log(reqHeader);
      
      const res=await addMessageApi(userData)
          console.log("res",res)
          console.log(res)
          if(res.status===200){
  
            
            // toast.success("Message added successfully")
            window.location.reload();
          
            
            
           }
          else{
            toast.error(res.response.data)
            console.log(res.response.data)
          }
  
    }
    
}

  return (
    <div className="main-container">
    <div className="chat-container border">
      {/* Chat messages */}
      <div className="messages">
      {
                  

            
          
                  viewMessage?viewMessage?.map(item=>(
        <div className="message">

          <strong>{item.username}</strong> {item.message}
        </div>
         )): <div className='text-danger'>No Review to show</div>
                
                
        }

       
        {/* Add more messages here */}
      </div>
    </div>
    
    {/* Send box */}
    <div className="send-box border">
      <input type="text" className="form-control" placeholder="Type your message..." value={userMessage.message} onChange={(e)=>setUserMessage({...userMessage,message:e.target.value})} />
      <button className="btn btn-primary" onClick={handleMessage}>Send</button>
    </div>
  </div>
  )
}

export default ChatSection