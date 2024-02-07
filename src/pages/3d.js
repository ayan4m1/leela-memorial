import { Container } from 'react-bootstrap';

import Layout from 'components/layout';
import WIPCard from 'components/wipCard';

export default function ThreeDPage() {
  return (
    <Layout title="3D View">
      <Container>
        <h1>3D Beagle Viewer</h1>
        <WIPCard />
      </Container>
    </Layout>
  );
}
