import PropTypes from 'prop-types';
import { Fragment } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import {
  faCube,
  faFileText,
  faHeart,
  faImagePortrait
} from '@fortawesome/free-solid-svg-icons';

import NavLink from 'components/navLink';

export default function Header({ siteTitle }) {
  return (
    <Fragment>
      <Navbar expand="lg" bg="primary" variant="dark">
        <Container>
          <Navbar.Brand as="a" href="/" className="py-2">
            {siteTitle}
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse>
            <Nav>
              <NavLink to="/story" icon={faFileText} label="Her Story" />
              <NavLink to="/images" icon={faImagePortrait} label="Images" />
              <NavLink to="/3d" icon={faCube} label="3D View" />
              <NavLink
                external
                to="https://bfp.org/"
                icon={faHeart}
                label="Contribute"
              />
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Fragment>
  );
}

Header.propTypes = {
  siteTitle: PropTypes.string.isRequired
};
