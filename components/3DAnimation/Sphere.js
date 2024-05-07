import { useFrame, useThree } from "@react-three/fiber";
import { useMemo, useRef, useEffect, useState } from "react";
import vertexShader from "!!raw-loader!./shaders/sphere/vertexshader.glsl";
import fragmentShader from "!!raw-loader!./shaders/sphere/fragmentshader.glsl";
import * as THREE from "three";
import { MathUtils } from "three";

export default function Sphere({ color, opacity }) {
  const mesh = useRef();
  const hover = useRef(false);
  const [tangentsComputed, setTangentsComputed] = useState(false);

  // Light A
  const lightA = {};

  lightA.intensity = 1.85;

  lightA.color = {};
  lightA.color.value = "#3d3b3b";
  lightA.color.instance = new THREE.Color(lightA.color.value);

  lightA.spherical = new THREE.Spherical(1, 0.615, 2.049);

  // Light B
  const lightB = {};

  lightB.intensity = 1.4;

  lightB.color = {};
  lightB.color.value = "#3d3b3b";
  lightB.color.instance = new THREE.Color(lightB.color.value);

  lightB.spherical = new THREE.Spherical(1, 2.561, -1.844);

  const defaultDisplacementFrequency = 2.12;
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
    const newDisplacementFrequency = opacity * defaultDisplacementFrequency + 1;
    mesh.current.material.uniforms.uDisplacementFrequency.value =
      newDisplacementFrequency;
  }, [opacity]);

  useFrame((state) => {
    const { clock } = state;
    mesh.current.material.uniforms.uTime.value =
      timeFrequency * clock.getElapsedTime();

    mesh.current.material.uniforms.uDistortionFrequency.value = MathUtils.lerp(
      mesh.current.material.uniforms.uDistortionFrequency.value,
      hover.current ? 4 : 1.5,
      0.02
    );

    mesh.current.material.uniforms.uLightAPosition.value.setFromSpherical(
      lightA.spherical
    );
    mesh.current.material.uniforms.uLightBPosition.value.setFromSpherical(
      lightB.spherical
    );
    mesh.current.material.uniforms.uLightAColor.value.lerp(
      new THREE.Color(color),
      0.03
    );
    mesh.current.material.uniforms.uLightBColor.value.lerp(
      new THREE.Color(color),
      0.03
    );
  });
  return (
    <mesh
      ref={mesh}
      onPointerOver={() => (hover.current = true)}
      onPointerOut={() => (hover.current = false)}
    >
      <sphereGeometry args={[1.4, 512, 512]} />
      <shaderMaterial
        fragmentShader={fragmentShader}
        vertexShader={vertexShader}
        uniforms={uniforms}
      />
    </mesh>
  );
}
