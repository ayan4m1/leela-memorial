import { Container } from 'react-bootstrap';

import Layout from 'components/layout';
import WIPCard from 'components/wipCard';

export default function StoryPage() {
  return (
    <Layout title="Leela's Story">
      <Container>
        <h1>Leela&apos;s Story</h1>
        <WIPCard />
      </Container>
    </Layout>
  );
}
