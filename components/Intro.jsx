import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

const Intro = () => (
  <Col md="auto" className="intro">
    <p>Hello, my name is</p>
    <h1>Daniel Troyano</h1>
    <h2>I make things for the internet</h2>
    <p>
      I'm a New Orleans Software Engineer that has always been passionate
      <br />
      about creating things and solving problems
    </p>
    <Button size="lg" variant="outline-info">Contact Me</Button>
  </Col>
);

export default Intro;
