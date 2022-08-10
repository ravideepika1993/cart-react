import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap';
import './Home.css';
import Logo from './Images/Logo.jpg';

const Home = () => {
  return (
    
    <Navbar>
        
        <Container>
            <Navbar.Brand><img src={Logo} className='image'></img> W3 SCHOOLS </Navbar.Brand>
            <Nav className='items'>
                <Nav.Link className='list'>Home</Nav.Link>
                <Nav.Link className='list'>Get started</Nav.Link>
                <Nav.Link className='list'>Courses</Nav.Link>
                <Nav.Link className='list'>Contact Us</Nav.Link>
                <Nav.Link className='list'>Help</Nav.Link>

            </Nav>

        </Container>
        
    </Navbar>
    
  )
}

export default Home