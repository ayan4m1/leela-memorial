import { Container } from 'react-bootstrap';

import Layout from 'components/layout';

export default function IndexPage() {
  return (
    <Layout title="Home" description="Memorial for my beagle.">
      <Container className="text-center">
        <video autoPlay muted loop height={512} style={{ borderRadius: 8 }}>
          <source src="/beagle-zoom.webm" type="video/webm" />
        </video>
        <h1>Leela the Beagle</h1>
        <h2>2012 &mdash; 2024</h2>
        <h3>She will always be in our hearts.</h3>
      </Container>
    </Layout>
  );
}
