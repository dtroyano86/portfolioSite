import PropTypes from 'prop-types';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import Image from 'react-bootstrap/Image';

const Project = ({ info, order }) => {
  const { name, description, image, stack, github, url } = info;
  return (
    <Row className="project-group">
      <Col md={{ order: order % 2 === 0 ? 'first' : 'last' }} className="project-image-container">
        <Image className="project-image" src={image} thumbnail />
      </Col>
      <Col className="project-text">
        <h4>{name}</h4>
        {description.map((item, i) => <p key={`desc${i}`}>{item}</p>)}
        <ul>
          {stack.map((item, i) => <li key={`nameStack${i}`}>{item}</li>)}
        </ul>
        <Row className="justify-content-md-center">
          <Col xs='1' className="md-auto">
            <a href={url} className="project-link">
              <FontAwesomeIcon icon={faExternalLinkAlt} />
            </a>
          </Col>
          { !github ? null
            : (
              <Col xs={{offset: 1, span: 1}} className="md-auto">
                <a href={github} className="project-link">
                  <FontAwesomeIcon icon={faGithub} />
                </a>
              </Col>
            )}
        </Row>
      </Col>
    </Row>
  );
};

export default Project;

Project.propTypes = {
  info: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.arrayOf(PropTypes.string).isRequired,
    image: PropTypes.string.isRequired,
    stack: PropTypes.arrayOf(PropTypes.string).isRequired,
    github: PropTypes.string,
    url: PropTypes.string.isRequired,
  }).isRequired,
  order: PropTypes.number.isRequired,
};
