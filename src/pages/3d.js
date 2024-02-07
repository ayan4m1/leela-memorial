import { Suspense } from 'react';
import { Container } from 'react-bootstrap';
import { OrbitControls, useGLTF } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';

import Layout from 'components/layout';
import Loader from 'components/loader';

const BeagleViewer = () => {
  const { scene } = useGLTF('../beagle.glb');

  return (
    <Canvas style={{ height: '100vh' }} gl={{ antialias: false }} dpr={1.5}>
      <ambientLight />
      {/* eslint-disable-next-line react/no-unknown-property */}
      <primitive object={scene} />
      <OrbitControls makeDefault />
    </Canvas>
  );
};

export default function ThreeDPage() {
  return (
    <Layout title="3D View">
      <Container>
        <h1>3D Beagle Viewer</h1>
        <Suspense fallback={<Loader />}>
          <BeagleViewer />
        </Suspense>
      </Container>
    </Layout>
  );
}
