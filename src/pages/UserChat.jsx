import React from 'react'
import { Container } from 'react-bootstrap'

function UserChat() {
  return (
    <Container style={{ height:'100vh', width:'100vh',display:'flex',flexDirection:'column',justifyContent:'center',gap:'1rem',alignItems:'center'}}>
        
        <div  style={{height:'90vh',width:'65vw',backgroundColor:'#FFFDD0',display:'grid',gridTemplateColumns:'25% 75%',alignItems: 'flex-start'}}></div>
    </Container>
  )
}

export default UserChat