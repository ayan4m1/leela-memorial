import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Container } from 'react-bootstrap';
import {
  OrbitControls,
  PerspectiveCamera,
  Stage,
  useGLTF
} from '@react-three/drei';
import { EffectComposer, N8AO } from '@react-three/postprocessing';

import Layout from 'components/layout';
import Loader from 'components/loader';

const BeagleViewer = () => {
  const { scene } = useGLTF('../beagle.glb');

  return (
    <Canvas style={{ height: '100%' }} gl={{ antialias: false }}>
      {/* eslint-disable-next-line react/no-unknown-property */}
      <color attach="background" args={['rgb(39, 43, 48)']} />
      <Stage
        environment={{ ground: false, preset: 'apartment' }}
        adjustCamera={0.75}
      >
        {/* eslint-disable-next-line react/no-unknown-property */}
        <primitive object={scene} />
      </Stage>
      <PerspectiveCamera makeDefault />
      <OrbitControls
        makeDefault
        maxPolarAngle={Math.PI / 2 - Math.PI / 16}
        minDistance={1}
        maxDistance={3}
      />
      <EffectComposer disableNormalPass>
        <N8AO aoRadius={0.25} intensity={2} />
      </EffectComposer>
    </Canvas>
  );
};

export default function ThreeDPage() {
  if (typeof window === 'undefined') {
    return (
      <Layout title="3D View">
        <h1>3D Beagle Viewer</h1>
      </Layout>
    );
  }

  return (
    <Layout title="3D View">
      <Container fluid className="h-100">
        <Suspense fallback={<Loader />}>
          <BeagleViewer />
        </Suspense>
      </Container>
    </Layout>
  );
}
