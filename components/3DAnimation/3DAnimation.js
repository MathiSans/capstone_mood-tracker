import * as Styled from "./3DAnimation.styled";
import React, { useMemo } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Center,
  OrbitControls,
  Environment,
  AccumulativeShadows,
  RandomizedLight,
} from "@react-three/drei";
import { animated } from "@react-spring/three";
import { MeshDistortMaterial } from "@react-three/drei";

export default function Animation({ color, opacity }) {
  const AnimatedMeshDistortMaterial = animated(MeshDistortMaterial);
  const material = useMemo(() => {
    return (
      <AnimatedMeshDistortMaterial
        distort={0.6 * opacity + 0.25}
        color={color}
        speed={6 * opacity + 4}
      />
    );
  }, [color, opacity]);

  return (
    <Styled.Container>
      <Styled.CustomCanvas shadows camera={{ position: [0, 0, 4.5], fov: 50 }}>
        <directionalLight intensity={2} position={[0, 3, 2]} />
        <AccumulativeShadows
          temporal
          frames={20}
          color="red"
          colorBlend={0.5}
          opacity={1}
          scale={10}
          alphaTest={0.85}
        >
          <RandomizedLight
            amount={8}
            radius={5}
            ambient={0.5}
            position={[5, 3, 2]}
            bias={0.001}
          />
        </AccumulativeShadows>

        <Center>
          <mesh>
            <sphereGeometry args={[1.2, 16, 16]} />
            {material}
          </mesh>
        </Center>
        <OrbitControls
          autoRotate
          autoRotateSpeed={opacity * 5 + 0.5}
          enablePan={false}
          enableZoom={false}
          minPolarAngle={Math.PI / 2.1}
          maxPolarAngle={Math.PI / 2.1}
        />
      </Styled.CustomCanvas>
    </Styled.Container>
  );
}
