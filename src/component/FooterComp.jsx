import { Col, Container, Row } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import Twitter from './images/Twitter.svg'; // Tell webpack this JS file uses this image
import Insta from './images/Instagram.svg'; // Tell webpack this JS file uses this image
import Face from './images/Facebook.svg'; // Tell webpack this JS file uses this image

import React from 'react';
import './Style.css';

function FooterComp() {
  return (
    <footer className="foot  mt-5 pt-5 pb-5">
      < Container>
       <Row className='fo mt-4 '>
        <Col>
         <Image src={Twitter} fluid/>
        </Col>
        <Col>
         <Image src={Insta} fluid/>
        </Col>
        <Col>
         <Image src={Face} fluid/>
        </Col>
        
       </Row>
       <Row className="text-center p-3 text-white foot">
        &copy; {new Date().getFullYear()} Copyright. All rights reserved.
      </Row>
      </Container>
      

    </footer>
    
  );
}

export default FooterComp;