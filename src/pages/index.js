import Layout from 'components/layout';
import { Container, Image } from 'react-bootstrap';

import logo from '../images/gatsby-icon.png';

export default function IndexPage() {
  return (
    <Layout title="Home" description="Memorial for my beagle.">
      <Container className="text-center">
        <Image src={logo} alt="Beagle" rounded />
        <h1>Leela the Beagle</h1>
        <h2>2012 &mdash; 2024</h2>
        <h3>She will always be in our hearts.</h3>
      </Container>
    </Layout>
  );
}
