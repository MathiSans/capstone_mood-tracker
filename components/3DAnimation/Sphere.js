import { useFrame } from "@react-three/fiber";
import { useMemo, useRef, useEffect, useState } from "react";
import vertexShader from "!!raw-loader!./shaders/sphere/vertexShader.glsl";
import fragmentShader from "!!raw-loader!./shaders/sphere/fragmentShader.glsl";
import * as THREE from "three";

export default function Sphere({ color, opacity }) {
  const mesh = useRef();
  const [tangentsComputed, setTangentsComputed] = useState(false);

  // Light A
  const lightA = {};

  lightA.intensity = 1.85;

  lightA.color = {};
  lightA.color.value = "#ff2900";
  lightA.color.instance = new THREE.Color(lightA.color.value);

  lightA.spherical = new THREE.Spherical(1, 0.615, 2.049);

  // Light B
  const lightB = {};

  lightB.intensity = 1.4;

  lightB.color = {};
  lightB.color.value = "#ff2900";
  lightB.color.instance = new THREE.Color(lightB.color.value);

  lightB.spherical = new THREE.Spherical(1, 2.561, -1.844);

  const defaultDisplacementFrequency = 10;
  const timeFrequency = 0.4;

  const uniforms = useMemo(
    () => ({
      uLightAColor: { value: lightA.color.instance },
      uLightAPosition: { value: new THREE.Vector3(1, 1, 0) },
      uLightAIntensity: { value: lightA.intensity },

      uLightBColor: { value: lightB.color.instance },
      uLightBPosition: { value: new THREE.Vector3(-1, -1, 0) },
      uLightBIntensity: { value: lightB.intensity },

      uDistortionFrequency: { value: 1.5 },
      uDistortionStrength: { value: 0.65 },
      uDisplacementFrequency: { value: defaultDisplacementFrequency },
      uDisplacementStrength: { value: 0.152 },

      uFresnelOffset: { value: 0.01 },
      uFresnelMultiplier: { value: 1.5 },
      uFresnelPower: { value: 0.5 },

      uTime: {
        value: 0.0,
      },
    }),
    []
  );

  useEffect(() => {
    if (!tangentsComputed) {
      mesh.current.geometry.computeTangents();
      setTangentsComputed(true);
    }
  }, []);

  useEffect(() => {
    const newDisplacementFrequency = opacity * defaultDisplacementFrequency + 2;
    mesh.current.material.uniforms.uDisplacementFrequency.value =
      newDisplacementFrequency;
  }, [opacity]);

  useFrame((state) => {
    const { clock } = state;
    mesh.current.material.uniforms.uTime.value =
      timeFrequency * clock.getElapsedTime();
    mesh.current.material.uniforms.uLightAPosition.value.setFromSpherical(
      lightA.spherical
    );
    mesh.current.material.uniforms.uLightBPosition.value.setFromSpherical(
      lightB.spherical
    );
    mesh.current.material.uniforms.uLightAColor.value = new THREE.Color(color);
    mesh.current.material.uniforms.uLightBColor.value = new THREE.Color(color);
  });
  return (
    <>
      <mesh ref={mesh}>
        <sphereGeometry args={[1.4, 512, 512]} />
        <shaderMaterial
          fragmentShader={fragmentShader}
          vertexShader={vertexShader}
          uniforms={uniforms}
        />
      </mesh>
    </>
  );
}
