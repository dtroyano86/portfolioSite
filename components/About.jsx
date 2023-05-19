import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';

const About = () => (
  <Col md="auto">
    <Row className="justify-content-md-center">
      <Col md={{ offset: 2, span: 6 }}>
        <h3 id="about" className="group-title">About Me</h3>
        <p>Hi! I'm Daniel, a software engineer based out of New Orleans.</p>
        <p>
          I've always been very passionate about making things, whether that's woodworking, 
          making Unity games in C#, or prototype Board Games. I'm the friend people come 
          to when they need something fixed or made. I've tackled electrician work, built retroPies, 
          and made furniture. No matter the problem I've always enjoyed digging my teeth into 
          it and get real satisfaction from watching the pieces click into place.
        </p>
      </Col>
      <Col md="3">
        <Image src="/profile.jpg" thumbnail className="profile-image" />
      </Col>
    </Row>
  </Col>
);

export default About;
