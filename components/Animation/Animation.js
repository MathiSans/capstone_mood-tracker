import * as Styled from "./Animation.styled";
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

export default function Animation({ color, opacity, blur }) {
  const AnimatedMeshDistortMaterial = animated(MeshDistortMaterial);
  const material = useMemo(() => {
    return (
      <AnimatedMeshDistortMaterial
        distort={0.3 * opacity + 0.2}
        color={color}
        speed={3 * opacity + 3}
      />
    );
  }, [color, opacity]);

  return (
    <Styled.Container style={{ filter: `blur(${blur}px)` }}>
      <Canvas shadows camera={{ position: [0, 0, 4.5], fov: 50 }}>
        <AccumulativeShadows
          temporal
          frames={200}
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

        <Center top>
          <mesh castShadow>
            <sphereGeometry args={[0.9, 64, 64]} />
            {material}
          </mesh>
        </Center>
        <Env />
        <OrbitControls
          autoRotate
          autoRotateSpeed={opacity * 10}
          enablePan={false}
          enableZoom={false}
          minPolarAngle={Math.PI / 2.1}
          maxPolarAngle={Math.PI / 2.1}
        />
      </Canvas>
    </Styled.Container>
  );
}
function Env() {
  return <Environment preset={"night"} background blur={1} />;
}
