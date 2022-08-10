import React from 'react'
import { Nav, Navbar,Container} from 'react-bootstrap'
import './Reactnav.css';



const Reactbootnav = () => {
  return (
    <Navbar bg='success' expand='lg'>
        <Container>
            <Navbar.Brand href='#home'>MOBILE MART</Navbar.Brand>
            <Navbar.Toggle aria-controls='basic-navbar-nav'/>
            <Navbar.Collapse id='basic-navbar-nav'>
                <Nav className='ms-auto'>
                    <Nav.Link  className='nav-item' href='/'>Home</Nav.Link>
                    <Nav.Link  className='nav-item'href='about'>About</Nav.Link>
                    <Nav.Link  className='nav-item' href='product'>Product</Nav.Link>
                    <Nav.Link  className='nav-item' href='contact'>Contact</Nav.Link>
                    <button className='btn'>cart</button>

                </Nav>
                
            </Navbar.Collapse>
            
        </Container>

    </Navbar>
    
    
  )
  
}

export default Reactbootnav