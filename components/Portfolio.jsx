import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Project from './Project.jsx';

const Portfolio = () => {
  const projects = [
    {
      name: 'Trailr',
      description: [
        'Giving users a social-media-style community to share their experiences while engaging in an outdoor (and socially distant) activity.',
        'Trailr provides users access to hiking trails in their area, as well as search-by-location functionality. Trails load automatically as a user traverses to new areas within Google Maps. Users can save their favorite trails to plan trips, and rate the difficulty and likeability of each trail that they encounter. Users can also upload geo-tagged photos, sharing interesting things they find along the trail route with other users. Users can comment on their own photos and photos that others upload, and they can edit their own comments.'
      ],
      image: '/trailr.png',
      stack: ['React.js', 'Node.js', 'MySQL', 'Google Maps API'],
      github: 'https://github.com/SeniorTrails/trailr',
      url: 'https://trailr.org',
    },
    {
      name: 'Horter',
      description: [
        'Horter is an application which helps users create gardens, update and maintain information about them, and learn more about how to add to them and keep them growing strong. It features a helpful ChatBot which can troubleshoot gardener questions, as well as an Augmented Reality garden planning display which will help users envision what their garden will look like ‘off-the-page’.',
      ],
      image: '/horter.jpg',
      stack: ['Vue.js', 'Node.js', 'PostgreSQL', 'A-Frames'],
      github: 'https://github.com/TheGreenThumbs/Horter',
      url: 'https://horter.org',
    },
    {
      name: 'Delgado Fab lab',
      description: [
        'FabLab NOLA at Delgado Community College is intended for use by students, small businesses and entrepreneurs, and other members of the community.',
        'The FabLab provides a unique makerspace for exploration and creation for community learners and small businesses that are interested in digital fabrication with a focus on those with limited exposure and access to manufacturing, design tools, and technology.',
      ],
      image: '/delgado.png',
      stack: ['React.js', 'Firebase', 'Firestore'],
      url: 'https://delgado-fab-lab.web.app/',
    },
  ];
  return (
    <Col>
      <Row className="justify-content-md-start">
        <Col md={{ offset: 4, span: 4 }}>
          <h3 id="portfolio" className="group-title">Portfolio</h3>
        </Col>
      </Row>
      {projects.map((project, i) => <Project key={project.name} info={project} order={i} />)}
    </Col>
  );
};

export default Portfolio;
