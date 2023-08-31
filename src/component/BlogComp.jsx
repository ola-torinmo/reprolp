import './Style.css';
import React from 'react';
import { Col,Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
// import { useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import b1 from './images/b1.png';
import b2 from './images/b2.png';
import b3 from './images/b3.png';
import b4 from './images/b4.png';
import b5 from './images/b5.png';

function BlogComp() {
  // const [key, setKey] = useState('home');
  return (

    <Container>
      <Tabs
      defaultActiveKey="home"
      transition={false}
      id="noanim-tab-example"
      className="mb-3 tb justify-content-end"
      
    >
      <Tab eventKey="home" title="All">
      <Row>
        <Col className='mt-5'><Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={b2} />
            <Card.Body>
            <span className='d-flex'>SEXUAL HEALTH   <p>March 28, 2021</p></span>
              <Card.Title className='head'>SEXUAL HEALTH Know the STI: Hepatitis B</Card.Title>
                {/* <Card.Text>
                  Some quick example text to build on the card title and make up the
                   bulk of the card's content.
                </Card.Text> */}
                
            </Card.Body>
        </Card></Col>
        <Col className='mt-5'><Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={b3} />
            <Card.Body>
            <span className='d-flex'>SEXUAL HEALTH   <p>March 28, 2021</p></span>
              <Card.Title className='head'>DIY: Breast Self-Examination</Card.Title>
                <Card.Text className='text'>
                Breast self-examination as the name implies is the practice of checking the breasts on a monthly basis to  detect any unusuals.
                </Card.Text>
                
            </Card.Body>
        </Card></Col>
        <Col className='mt-5'><Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={b5} />
            <Card.Body>
            <span className='d-flex'>SEXUAL HEALTH   <p>March 28, 2021</p></span>
              <Card.Title className='head'>How to avoid an abortion</Card.Title>
                <Card.Text className='text'>
                What do you do in a place with restrictive abortion laws?
                </Card.Text>
                
            </Card.Body>
        </Card></Col>
        <Col className='mt-5'>
          <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={b1} />
            <Card.Body>
              <span className='d-flex'>WOMEN'S HEALTH   <p>January 26, 2019</p></span>
              <Card.Title className='head'>What to know about Polycystic Ovarian Syndrome</Card.Title>
                <Card.Text className='text'>
                Many women struggle with infertility in
                Nigeria caused by various factors which  are
                usually not detected on time. One of these
                factors can be Polycystic Ovarian Syndrome.
                </Card.Text>
                
            </Card.Body>
          </Card>
          </Col>
          <Col className='mt-5 wh'><Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={b4} />
          
            <Card.Body>
            <span className='d-flex'>WOMEN'S HEALTH   <p>January 26, 2019</p></span>
              <Card.Title className='head'>Common Myths of Intimate Partner Violence</Card.Title>
                {/* <Card.Text>
                  Some quick example text to build on the card title and make up the
                   bulk of the card's content.
                </Card.Text> */}
                
            </Card.Body>
        </Card></Col>

        </Row>
      </Tab>
      <Tab eventKey="profile" title="Women's Health">
      <Row className=''>
        <Col  className='mt-5'>
          <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={b1} />
            <Card.Body>
              <span className='d-flex'>WOMEN'S HEALTH   <p>January 26, 2019</p></span>
              <Card.Title className='head'>What to know about Polycystic Ovarian Syndrome</Card.Title>
                <Card.Text className='text'>
                Many women struggle with infertility in
                Nigeria caused by various factors which  are
                usually not detected on time. One of these
                factors can be Polycystic Ovarian Syndrome.
                </Card.Text>
                
            </Card.Body>
          </Card>
          </Col>
          <Col className='mt-5 wh'><Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={b4} />
          
            <Card.Body>
            <span className='d-flex'>WOMEN'S HEALTH   <p>January 26, 2019</p></span>
              <Card.Title className='head'>Common Myths of Intimate Partner Violence</Card.Title>
                {/* <Card.Text>
                  Some quick example text to build on the card title and make up the
                   bulk of the card's content.
                </Card.Text> */}
                
            </Card.Body>
        </Card></Col>

    </Row>
       
      </Tab>
      <Tab eventKey="contact" title="Sexual Health" >
      <Row>
        <Col className='mt-5'><Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={b2} />
            <Card.Body>
            <span className='d-flex'>SEXUAL HEALTH   <p>March 28, 2021</p></span>
              <Card.Title className='head'>SEXUAL HEALTH Know the STI: Hepatitis B</Card.Title>
                {/* <Card.Text>
                  Some quick example text to build on the card title and make up the
                   bulk of the card's content.
                </Card.Text> */}
                
            </Card.Body>
        </Card></Col>
        <Col className='mt-5'><Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={b3} />
            <Card.Body>
            <span className='d-flex'>SEXUAL HEALTH   <p>March 28, 2021</p></span>
              <Card.Title className='head'>DIY: Breast Self-Examination</Card.Title>
                <Card.Text className='text'>
                Breast self-examination as the name implies is the practice of checking the breasts on a monthly basis to  detect any unusuals.
                </Card.Text>
                
            </Card.Body>
        </Card></Col>
        <Col className='mt-5'><Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={b5} />
            <Card.Body>
            <span className='d-flex'>SEXUAL HEALTH   <p>March 28, 2021</p></span>
              <Card.Title className='head'>How to avoid an abortion</Card.Title>
                <Card.Text className='text'>
                What do you do in a place with restrictive abortion laws?
                </Card.Text>
                
            </Card.Body>
        </Card></Col>

        </Row>
        
      </Tab>
      <Tab eventKey="contact" title="Babycare" disabled>
        
      </Tab>
    </Tabs>
    </Container>
  );
}

export default BlogComp;