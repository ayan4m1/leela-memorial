import Layout from 'components/layout';
import { Container, Image } from 'react-bootstrap';

import logo from '../images/gatsby-icon.png';

export default function IndexPage() {
  return (
    <Layout title="Home" description="Memorial for my beagle.">
      <Container className="text-center">
        <Image src={logo} alt="Beagle" rounded />
        <h1>Leela the Beagle</h1>
        <h2>2011 &mdash; 2024</h2>
        <h3>May she rest in peace.</h3>
      </Container>
    </Layout>
  );
}
