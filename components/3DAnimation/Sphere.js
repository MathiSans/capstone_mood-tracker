import { useFrame } from "@react-three/fiber";
import { useMemo, useRef, useEffect } from "react";
import vertexShader from "!!raw-loader!./shaders/sphere/vertexShader.glsl";
import fragmentShader from "!!raw-loader!./shaders/sphere/fragmentShader.glsl";

export default function Sphere() {
  const mesh = useRef();
  const time = useRef(0);
  const uniforms = useMemo(
    () => ({
      uDistortionFrequency: { value: 2.0 },
      uDistortionStrength: { value: 1.0 },
      uDisplacementFrequency: { value: 2.0 },
      uDisplacementStrength: { value: 0.2 },
      uTime: {
        value: 0.0,
      },
    }),
    []
  );
  useFrame(({ clock }) => {
    const timeFrequency = 30;
    time.current += clock.getDelta();
    mesh.current.material.uniforms.uTime.value = time.current * timeFrequency;
  });

  return (
    <mesh ref={mesh}>
      <sphereGeometry args={[1, 512, 512]} />
      <shaderMaterial
        fragmentShader={fragmentShader}
        vertexShader={vertexShader}
        uniforms={uniforms}
        wireframe={true}
      />
    </mesh>
  );
}

// export default function Sphere({ color, opacity }) {
//   const mesh = useRef();
//   const hover = useRef(false);

//   const uniforms = useMemo(
//     () => ({
//       u_intensity: {
//         value: 0.3,
//       },
//       u_time: {
//         value: 0.0,
//       },
//       u_red: { value: 1.0 },
//       u_blue: { value: 1.0 },
//       u_green: { value: 0 },
//     }),
//     []
//   );

//   useFrame((state) => {
//     const { clock } = state;
//     mesh.current.material.uniforms.u_time.value = 0.4 * clock.getElapsedTime();
//     mesh.current.material.uniforms.u_intensity.value = opacity;
//   });

//   return (
//     <mesh ref={mesh}>
//       <icosahedronGeometry args={[1.2, 20]} />
//       <shaderMaterial
//         fragmentShader={fragmentShader}
//         vertexShader={vertexShader}
//         uniforms={uniforms}
//         wireframe={true}
//       />
//     </mesh>
//   );
// }
