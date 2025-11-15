"use client";

import React, { Suspense, useRef, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Environment, OrbitControls, useGLTF } from "@react-three/drei";
import * as THREE from "three";
import { Button } from "./ui/button";
import { Space_Grotesk, Exo_2 } from 'next/font/google';

const space = Space_Grotesk({
  subsets: ['latin'],
  weight: ['400','600','700'],
  variable: '--font-space',
  display: 'swap'
});

const exo = Exo_2({
  subsets: ['latin'],
  weight: ['400','600','700'],
  variable: '--font-exo',
  display: 'swap'
});

const Robot = ({ mouse }: { mouse: THREE.Vector2 }) => {
  const { scene } = useGLTF("/model/robot_dummy.glb");
  const headRef = useRef<THREE.Object3D>(null);


  scene.traverse((child) => {
    console.log(child.name);
    
    if (child.name.toLocaleLowerCase().includes("spine005_08"))
      headRef.current = child;
  });

  

  useFrame(() => {
    if (!headRef.current) return;

    const head = headRef.current;
    const targetY = THREE.MathUtils.lerp(head.rotation.y, mouse.x * 0.8, 0.05);
    const targetX = THREE.MathUtils.lerp(head.rotation.x, -mouse.y * 0.5, 0.05);

    head.rotation.y = targetY;
    head.rotation.x = targetX;
  });

  return <primitive object={scene} scale={3.5} position={[0, -4.5, 0]} />;
};

export default function RobotScreen() {
  const mouse = useRef(new THREE.Vector2());

  function handleMouseMove(event: React.MouseEvent) {
    const x = (event.clientX / window.innerWidth) * 2 - 1;
    const y = (event.clientY / window.innerHeight) * 2 - 1;
    mouse.current.set(x, y);
  }

  return (
    <div
      onMouseMove={handleMouseMove}
      className="w-full h-screen  relative overflow-hidden"
      style={{ background: "radial-gradient(circle at center, #020617, #000)" }}
    >
      <Canvas camera={{ position: [0, 1, 5], fov: 45 }}>
        <ambientLight intensity={0.7} />
        <directionalLight position={[5, 5, 5]} intensity={1.5} />
        <Suspense fallback={null}>
          <Robot mouse={mouse.current} />
          <Environment preset="city" />
        </Suspense>
        {/* <OrbitControls enableZoom={false} enablePan={false} /> */}
      </Canvas>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[55%] text-center z-20">
        <h1 className={`text-white text-6xl font-bold drop-shadow-[0_0_10px_rgba(255,255,255,0.35)] ${space.variable} ${exo.variable}`}>We Build Digital Dreams</h1>
        <Button className="mt-6 px-8 py-3 rounded-xl bg-pink-600 text-white font-semibold text-lg
           transition-all duration-300 hover:bg-pink-500 hover:-translate-y-0.5
           shadow-[0_8px_20px_rgba(255,47,185,0.35)]">
          Get Started
        </Button>
      </div>
    </div>
  );
}
