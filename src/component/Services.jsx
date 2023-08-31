import { Col, Container, Row } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card';
import Edu from './images/KnowledgeSharing.svg';
import Online from './images/Online Support.svg';
import Train from './images/Training.svg';
import './Style.css';

// import '../src/App.css';
function Services(){
    return(
    <Container>
     <Row className='mt-5'>
      <Col >
      <Card className='cad1 '>
      <Card.Body >
        <Card.Title>
        <Image src={Edu} fluid/>
        </Card.Title>
        <Card.Subtitle className="mb-2 text-m1">Education</Card.Subtitle>
        <Card.Text className='textb'>
           We educate and enlighten young women
           on sexual and reproductive health.
        </Card.Text>
      </Card.Body>
      </Card>
     </Col>
     <Col >
     <Card  className='cad2'>
      <Card.Body>
        <Card.Title> <Image src={Online} fluid/></Card.Title>
        <Card.Subtitle className="mb-2 text-m2">Service Provision</Card.Subtitle>
        <Card.Text className='textb'>
        We provide a variety of services that fall
        within the range of Non-Governmental
        Organization services.
        </Card.Text>
      </Card.Body>
     </Card>
     </Col>
     <Col >
     <Card className='cad3'>
      <Card.Body>
        <Card.Title> <Image src={Train} fluid/></Card.Title>
        <Card.Subtitle className="mb-2 text-m3">Training & Development</Card.Subtitle>
        <Card.Text className='textb'>
        Availability of training & development 
        programs and podcasts to guide
        young women.
        </Card.Text>
      </Card.Body>
    </Card>
     </Col>

    </Row>
    </Container>
    

);
}

export default Services;