import { OrbitControls } from '@react-three/drei';
import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import React from 'react';

export default function My3DModel() {
  const gltf = useLoader(GLTFLoader, '/model/scene.gltf'); // Adjust path if needed

  return (
    <>
      {/* Ambient light for soft even lighting */}
      <ambientLight intensity={1} />

      {/* Optional subtle directional light for slight shadow/highlight effect */}
      <directionalLight intensity={0.3} position={[10, 10, 5]} />

      {/* Model positioned and scaled nicely */}
      <primitive object={gltf.scene} scale={15} position={[-2,0, 0]} />

      {/* Orbit controls tailored for product showcase */}
      <OrbitControls
        enableZoom={true}
        enablePan={false}       // Usually panning is disabled for product views
        enableRotate={true}
        autoRotate={false}     // Disable auto rotation for user-controlled view
        minDistance={10}       // Control how close the user can zoom in
        maxDistance={20}       // Control how far the user can zoom out
        target={[0, 0, 0]}     // Focus at center of shoe
      />
    </>
  );
}
