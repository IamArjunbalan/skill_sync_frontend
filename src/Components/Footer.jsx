import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div>
        <div style={{ width:'100%', height: '300px',backgroundColor:'#e5eaf5'}}>
        <Row className='p-5'>
          <Col md='4'>
            <h4 className='text-dark'> <i class="fa-solid fa-graduation-cap"></i>{''}
        SkillSync</h4>
        <p style={{textAlign:'justify', color:'#0b0c0d'}} >
Skill Sync is a dynamic platform fostering connection by matching individuals based on complementary skills. Through intuitive algorithms, it seamlessly brings together individuals seeking to exchange expertise, fostering collaborative growth. Whether you're looking to learn or teach. </p>
          </Col>
          <Col md='3' className='d-flex flex-column text-center'>
            <h4>Links</h4>
            <Link to={'/'} style={{textDecoration:'none',color:'black'}} >Landing page</Link>
            <Link to={'/login'} style={{textDecoration:'none',color:'black'}}>Login</Link>
            <Link to={'/Register'} style={{textDecoration:'none',color:'black'}}>Register</Link>
            {/* <Link to={'/userreview'} style={{textDecoration:'none',color:'black'}}>send your review</Link> */}
          </Col>
          <Col md='2' className=' d-flex flex-column text-center'>
            <h4>Guides</h4>
            <Link to={'https://react.dev/'} style={{textDecoration:'none' ,color:'black'}}>React</Link>
            <Link to={'https://react-bootstrap.netlify.app/'} style={{textDecoration:'none',color:'black'}}>React Bootstrap</Link>
            <Link to={'https://fontawesome.com/'} style={{textDecoration:'none',color:'black'}}>Fontawesome</Link>
          </Col>
          <Col md='3' className='d-flex flex-column text-center'>
            <h4>Connect us!</h4>
            <Link to={'https://www.facebook.com/'} style={{textDecoration:'none',color:'blue'}} ><span><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/480px-Facebook_Logo_%282019%29.png" alt=""  height={'20px'}width={'20px'}/></span></Link>
            <Link to={'https://www.instagram.com/'} style={{textDecoration:'none',color:'green'}}><span><img src="https://png.pngtree.com/png-clipart/20180524/ourmid/pngtree-instagram-social-media-icon-png-image_3572472.png" alt=""  height={'20px'}width={'20px'}/></span></Link>
            <Link to={'https://twitter.com/?lang=en'} style={{textDecoration:'none',color:'green'}}><span><img src="https://upload.wikimedia.org/wikipedia/commons/5/57/X_logo_2023_%28white%29.png" alt=""  height={'20px'}width={'20px'}/></span></Link>

          </Col>
        </Row>
        <p className='text-center mt-3 '></p>
      </div>
    </div>
  )
}

export default Footer