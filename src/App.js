import { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { CycleRaycast, softShadows } from '@react-three/drei';

import Hero from './components/Hero';
import Stage from './components/Stage';
import Stair from './components/Stair';

export default function App() {
  const [{ objects, cycle }, set] = useState({ objects: [], cycle: 0 });
  console.log(objects, cycle);

  return (
    <>
      <Hero />
      <Canvas shadows dpr={1.5} camera={{ position: [-10, 10, 5], fov: 50 }}>
        <Stage />
        {Array.from({ length: 12 }, (_, i) => (
          <Stair
            key={i}
            name={'stair-' + (i + 1)}
            rotation={[-Math.PI / 2, 0, i / Math.PI / 2]}
            position={[2 - Math.sin(i / 5) * 5, i * 0.5, 2 - Math.cos(i / 5) * 5]}
          />
        ))}
        {/* This component cycles through the raycast intersections, combine it with event.stopPropagation! */}
        <CycleRaycast onChanged={(objects, cycle) => set({ objects, cycle })} />
      </Canvas>
    </>
  );
}

// Percentage closer soft shadows, normally *very* expensive
softShadows();
