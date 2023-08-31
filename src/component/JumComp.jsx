import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import pic1 from './images/pic1.png'; // Tell webpack this JS file uses this image
// import '../src/App.css';
function JumComp() {
  return (
    <Container className='jum'>
      <Row className='mt-5 '>
        <Col xs={12} md={6} className='mt-5'>
          <p className='mt-5 textb'>
          <h2 className='pb-4 ju'>
          Healthy Sexual & Reproductive Living
          </h2>
          Access quality information on reproductive health education.
          We provide adequate and current information on sexual and
          reproductive health.
          </p>
        </Col>
        <Col xs={12} md={6}>
        <Image src={pic1} fluid 
          className=' rounded'/>
        </Col>
      </Row>
    </Container>
  );
}

export default JumComp;