import React from 'react'
import { Container,button,Row,Col} from 'react-bootstrap';
import './Content.css';
import { Button } from 'react-bootstrap';


const Content = () => {
    
  return (
    <Container>
        <Row>
            <Col sm={12} md={12} lg={12}>
        <h className='topic'>React Tutorial</h>
        <div className='para'>
        <p>React is a javascript library for building user interfaces.
           React is used to build single page-application.
           React allows us to create reusable UI components.
        </p>
        <button>Read More</button>
         </div>
         </Col>
         </Row>
         <Row>
         <Col sm={12} md={12} lg={12}>
        <h className='topic'>React props</h>
        <div className='para'>
        <p>It is an object which stores the value of attributes of a tag and work similar to the HTML attributes.
        It gives a way to pass data from one component to other components. It is similar to function arguments. Props are passed to the component in the same way as arguments passed in a function.
        </p>
        <button>Read More</button>
        </div>
        </Col>
        </Row>
        <Row>
        <Col sm={12} md={12} lg={12}>
        <h className='topic'>React Hooks</h>
        <div className='para'>
            <p>Hooks are a new addition in React 16.8. They let you use state and other React features without writing a class. Hooks are backwards-compatible. This page provides an overview of Hooks for experienced React users</p>
            <button>Read More</button>
        </div>
        </Col>
        </Row>
        <Row>
        <Col sm={12} md={12} lg={12}>
            
        <h className='topic'>Router in React</h>
        <div className='para'>
            <p>React Router is the standard routing library for React. From the docs: “React Router keeps your UI in sync with the URL. It has a simple API with powerful features like lazy code loading, dynamic route matching, and location transition handling built right in. Make the URL your first thought, not an after-thought.”</p>
            <button>Read More</button>
        </div>
        </Col>
        </Row>
        </Container>
  )
}

export default Content