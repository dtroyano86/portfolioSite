import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faDev, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const SidebarLinks = () => (
  <div id="sidebar-links">
    <a className="sidebar-link" href="https://github.com/dtroyano86">
      <FontAwesomeIcon icon={faGithub} />
    </a>
    <a className="sidebar-link" href="https://dev.to/dtroyano86">
      <FontAwesomeIcon icon={faDev} />
    </a>
    <a className="sidebar-link" href="https://www.linkedin.com/in/daniel-troyano-5550421b6/">
      <FontAwesomeIcon icon={faLinkedin} />
    </a>
  </div>
);

export default SidebarLinks;
