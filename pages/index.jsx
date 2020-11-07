import Head from 'next/head';
import Row from 'react-bootstrap/Row';
import Layout from '../components/Layout.jsx';
import Intro from '../components/Intro.jsx';
import About from '../components/About.jsx';
import Portfolio from '../components/Portfolio.jsx';
import SideBarLinks from '../components/Sidebar.jsx';
import SidebarLinks from '../components/Sidebar.jsx';

const Home = () => (
  <>
    <Head>
      <title>Daniel Troyano</title>
    </Head>
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
      <SidebarLinks />
    </Layout>
  </>
);

export default Home;
