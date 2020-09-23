import Row from 'react-bootstrap/Row';
import Layout from '../components/Layout.jsx';
import Intro from '../components/Intro.jsx';

const Home = () => (
  <Layout>
    <Row className="justify-content-md-center">
      <Intro />
    </Row>
  </Layout>
);

export default Home;
