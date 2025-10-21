import { useState, useRef, Suspense, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";
import { random } from "maath";
import { TypedArray } from "three";

const SpaceBackground = (props: any) => {
  const ref = useRef<THREE.Points>();
  const [sphere] = useState<TypedArray>(() =>
    random.inSphere(new Float32Array(5000000), { radius: 100.0 })
  );

  // Create varying star sizes and colors
  const [starSizes] = useState(() => {
    const sizes = new Float32Array(5000000);
    for (let i = 0; i < 5000000; i++) {
      // Create varied star sizes - more dot-sized stars
      sizes[i] = Math.random() < 0.3 ? 0.01 : Math.random() < 0.5 ? 0.005 : Math.random() < 0.7 ? 0.002 : 0.0005;
    }
    return sizes;
  });

  const [starColors] = useState(() => {
    const colors = new Float32Array(5000000 * 3);
    for (let i = 0; i < 5000000; i++) {
      const baseColor = Math.random();
      if (baseColor < 0.005) {
        // Very bright blue-white stars (0.5%)
        colors[i * 3] = 0.9;     // R
        colors[i * 3 + 1] = 0.95; // G
        colors[i * 3 + 2] = 1.0; // B
      } else if (baseColor < 0.02) {
        // Bright blue stars (1.5%)
        colors[i * 3] = 0.4;     // R
        colors[i * 3 + 1] = 0.6; // G
        colors[i * 3 + 2] = 1.0; // B
      } else if (baseColor < 0.08) {
        // Medium blue stars (6%)
        colors[i * 3] = 0.2;     // R
        colors[i * 3 + 1] = 0.4; // G
        colors[i * 3 + 2] = 0.8; // B
      } else {
        // Dim white/blue stars (92.5%) - mostly tiny background stars
        const intensity = 0.1 + Math.random() * 0.2;
        colors[i * 3] = intensity;     // R
        colors[i * 3 + 1] = intensity; // G
        colors[i * 3 + 2] = intensity; // B
      }
    }
    return colors;
  });

  useFrame((_state, delta) => {
    if (ref.current) {
      // All stars move from right to left (negative rotation on Y axis only)
      ref.current.rotation.y -= delta / 15;
      // Keep X rotation at 0 for pure horizontal movement
      ref.current.rotation.x = 0;
    }
  });

  return (
    <group rotation={[0, 0, 0]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          size={starSizes}
          sizeAttenuation={true}
          depthWrite={false}
          vertexColors={true}
        />
      </Points>
    </group>
  );
};

const SpaceBackgroundCanvas = () => {
  return (
    <div className="absolute inset-0 z-[-1] h-auto w-full">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Suspense fallback={null}>
          <SpaceBackground />
        </Suspense>

        <Preload all />
      </Canvas>
    </div>
  );
};

export default SpaceBackgroundCanvas;
