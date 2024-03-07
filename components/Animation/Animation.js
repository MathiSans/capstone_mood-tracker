import * as Styled from "./Animation.styled";
import React, { useMemo } from "react";
import { Canvas } from "@react-three/fiber";
import { Center, OrbitControls } from "@react-three/drei";
import { animated } from "@react-spring/three";
import { MeshDistortMaterial } from "@react-three/drei";

export default function Animation({ color, opacity, blur }) {
  const AnimatedMeshDistortMaterial = animated(MeshDistortMaterial);
  const material = useMemo(() => {
    return (
      <AnimatedMeshDistortMaterial
        distort={0.2}
        color={color}
        speed={10 * opacity + 3}
      />
    );
  }, [color, opacity]);

  return (
    <Styled.Container style={{ filter: `blur(${blur}px)` }}>
      <Canvas shadows camera={{ position: [0, 0, 4.5], fov: 50 }}>
        <color attach="background" args={["#2a2c2e"]} />
        <ambientLight intensity={0.5} />
        <Center>
          <mesh castShadow>
            <sphereGeometry args={[1.3, 64, 64]} />
            {material}
          </mesh>
        </Center>
        <OrbitControls
          autoRotate
          autoRotateSpeed={1}
          enablePan={false}
          enableZoom={false}
          minPolarAngle={Math.PI / 2.1}
          maxPolarAngle={Math.PI / 2.1}
        />
      </Canvas>
    </Styled.Container>
  );
}
