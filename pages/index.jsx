import Row from 'react-bootstrap/Row';
import Layout from '../components/Layout.jsx';
import Intro from '../components/Intro.jsx';
import About from '../components/About.jsx';
import Portfolio from '../components/Portfolio.jsx';

const Home = () => (
  <Layout>
    <Row className="justify-content-md-center group">
      <Intro />
    </Row>
    <Row className="justify-content-md-center group">
      <About />
    </Row>
    <Row className="justify-content-md-center group">
      <Portfolio />
    </Row>
  </Layout>
);

export default Home;
