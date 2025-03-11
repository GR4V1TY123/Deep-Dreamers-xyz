import React, { useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import Spline from '@splinetool/react-spline';

const ShoeModel = ({ color }) => {
  const { scene } = useGLTF("/NikeJordan3/Air jordan.glb"); // Ensure the model is in 'public/'

  // Apply color change to the shoe material
  scene.traverse((child) => {
    if (child.isMesh) {
      child.material.color.set(color);
    }
  });

  useFrame(() => {
    scene.rotation.y += 0.002; // Rotates the model on the Y-axis
  });

  return <primitive object={scene} scale={0.2} position={[-0.5, 0, 0]} />;
};


const Hero = () => {
  const [color, setColor] = useState("#ff0000"); // Default color (Red)

  return (
    <div>
      <div className="relative min-h-screen flex items-center justify-center">
        {/* Background Text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center mb-36">
          <h1 className="text-[325px] font-black leading-none text-gray-400 opacity-50" style={{ fontFamily: "'Anton', sans-serif" }}>
            JUST DO IT.
          </h1>
        </div>

        {/* 3D Model */}
        {/* <div className="relative w-1/2 h-screen flex items-center justify-center z-20">
          <Canvas camera={{ position: [3, 5, 6], fov: 50 }}>
            <ambientLight intensity={0.5} />
            <directionalLight position={[8, 0, 0]} intensity={5} />
            <ShoeModel color={color} />
            <OrbitControls enableZoom={false} enablePan={false} />
          </Canvas>
        </div> */}
        <main className="z-10">
          <Spline
            scene="https://prod.spline.design/3STEflriYSepFFQa/scene.splinecode"
          />
        </main>

        {/* Color Picker
        <div className="absolute bottom-32 z-30 flex gap-4">
          <button
            className="w-12 h-12 rounded-full bg-red-500"
            onClick={() => setColor("#ff0000")}
          ></button>
          <button
            className="w-12 h-12 rounded-full bg-blue-500"
            onClick={() => setColor("#0000ff")}
          ></button>
          <button
            className="w-12 h-12 rounded-full bg-green-500"
            onClick={() => setColor("#00ff00")}
          ></button>
          <button
            className="w-12 h-12 rounded-full bg-black"
            onClick={() => setColor("#000000")}
          ></button>
          <button
            className="w-12 h-12 rounded-full bg-white border border-gray-400"
            onClick={() => setColor("#ffffff")}
          ></button>
        </div> */}

        {/* CTA Button */}
        <div className="absolute bottom-20 z-30">
          <button className="bg-purple-700 text-white px-12 py-4 rounded-button text-xl font-bold hover:bg-primary transition-all duration-300 transform hover:scale-105">
            EXPLORE NOW
          </button>
        </div>
      </div>

      {/* Video Section */}
      
    </div>
  );
};

export default Hero;
