import { Container } from 'react-bootstrap';

import Layout from 'components/layout';
import WIPCard from 'components/wipCard';

export default function ImagesPage() {
  return (
    <Layout title="Images">
      <Container>
        <h1>Images</h1>
        <WIPCard />
      </Container>
    </Layout>
  );
}
