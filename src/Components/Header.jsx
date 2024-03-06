import React from 'react'
import { Container, Navbar } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'

function Header({InDashboard}) {

  const navigate=useNavigate()

  // const [logout,setLogout]=useState("")
  const handleLogout=()=>{
      localStorage.removeItem('currentUser')
      localStorage.removeItem('token')
      localStorage.removeItem('role')
      navigate('/')
  }
  return (
    <Navbar className="position-fixed top-0 w-100" style={{backgroundColor:'#e5eaf5',zIndex:1}}>
        <Container>
            <Link to={'/'} style={{textDecoration:'none'}}>
          <Navbar.Brand href="#home">
          <i class="fa-solid fa-graduation-cap"></i>{' '}
          SkilSync
          </Navbar.Brand>
          </Link>
          {''}
          {/* <Link  to={'/userchat'} className='btn btn-info'>{''}<i class="fa-solid fa-message"></i>chat with the community</Link>  */}
         

         
          
          {
            InDashboard&&
            <div className='ms-auto btn' style={{backgroundColor:'#c8d6db'}} onClick={handleLogout}>
              Log Out {' '}
              {/* <i class="fa-solid fa-right-long"></i> */}


            </div>
          }
         
         
        
        </Container>
      </Navbar>
  )
}

export default Header