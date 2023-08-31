import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import pic2 from './images/pic2.png'; // Tell webpack this JS file uses this image
// import '../src/App.css';
function ValueComp() {
  return (
    <Container className='val'>
      <Row className='mt-5'>
       <Col xs={12} md={6}>
         <Image src={pic2} fluid 
          className=' rounded'/>
        </Col>
        <Col xs={12} md={6}>
          <p className='mt-5 textb'>
          <h2 className='pb-4 text-m12 '>
          Our Services
          </h2  >
          We provide the current and adequate information you need
          to guide you at every point of your sexual and reproductive
          health. We have a podcast you could also listen to or you 
          can join our Quarterly safe space sexual meetup.
          </p>
        </Col>
        
      </Row>
    </Container>
  );
}

export default ValueComp;