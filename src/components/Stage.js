import { BakeShadows } from '@react-three/drei'

export default function Stage() {
    return (
      <>
        {/* Fill */}
        <ambientLight intensity={0.5} />
        {/* Main */}
        <directionalLight
          position={[1, 10, -2]}
          intensity={1}
          shadow-camera-far={70}
          shadow-camera-left={-10}
          shadow-camera-right={10}
          shadow-camera-top={10}
          shadow-camera-bottom={-10}
          shadow-mapSize={[512, 512]}
          castShadow
        />
        {/* Strip */}
        <directionalLight position={[-10, -10, 2]} intensity={3} />
        {/* Ground */}
        <mesh receiveShadow rotation-x={-Math.PI / 2} position={[0, -0.75, 0]}>
          <planeGeometry args={[20, 20]} />
          <shadowMaterial opacity={0.2} />
        </mesh>
        {/* This freezes the shadow map, which is fast, but the model has to be static  */}
        <BakeShadows />
      </>
    );
  }