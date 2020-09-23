import PropTypes from 'prop-types';
import Container from 'react-bootstrap/Container';
import Header from './Header.jsx';

const Layout = ({ children }) => (
  <Container className="app">
    <Header />
    {children}
  </Container>
);

export default Layout;

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
