import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import { Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function NavLink({ to, external, icon, label }) {
  return (
    <Nav.Link
      as={external ? 'a' : Link}
      to={external ? undefined : to}
      href={external ? to : undefined}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      className="px-3"
    >
      <FontAwesomeIcon icon={icon} fixedWidth /> {label}
    </Nav.Link>
  );
}

NavLink.propTypes = {
  to: PropTypes.string.isRequired,
  external: PropTypes.bool,
  icon: PropTypes.object,
  label: PropTypes.string.isRequired
};
