import { Canvas } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import type { ReactNode } from "react";

interface Canvas3DProps {
  children: ReactNode;
}

const Canvas3D: React.FC<Canvas3DProps> = ({ children }: Canvas3DProps) => {
  return (
    <Canvas resize={{ scroll: false }}>
      <>
        <Environment files="/img/meadow_2_1k.exr" />
        <group>
          <ambientLight intensity={Math.PI / 2} />
          <spotLight
            position={[10, 10, 10]}
            angle={0.15}
            penumbra={1}
            decay={0}
            intensity={Math.PI}
          />
          <pointLight
            position={[-10, -10, -10]}
            decay={0}
            intensity={Math.PI}
          />
          {children}
        </group>
      </>
    </Canvas>
  );
};

export default Canvas3D;
