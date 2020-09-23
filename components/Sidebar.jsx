import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faDev, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const SidebarLinks = () => (
  <div id="sidebar-links">
    <FontAwesomeIcon icon={faGithub} />
    <FontAwesomeIcon icon={faDev} />
    <FontAwesomeIcon icon={faLinkedin} />
  </div>
);

export default SidebarLinks;
