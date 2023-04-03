import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './Newsletter.css'

function Newsletter() {
  return (
    <Container className='news_letter'>
      <Row >
        <Col md={6} className='signup_text'>
          <img className="vector-icon" alt="" src="svg/vector.svg" />
          <h3>Sign Up for Newslette</h3>
          <p>Lorem ipsum dolor sit amet, consectetur<br />
            tempor incididunt ut labore et dolore magna aliqua.</p>
        </Col>
        <Col md={6} className="subscribe_box">
          <div className="searchbox-wrap">
            <input type="text" placeholder="enter your email here" />
            <button><span>subscribe</span> </button>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default Newsletter