import PropTypes from 'prop-types';
import { Fragment } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImagePortrait } from '@fortawesome/free-solid-svg-icons';

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
              <Nav.Link>
                <FontAwesomeIcon icon={faImagePortrait} /> Gallery
              </Nav.Link>
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
