import { Canvas } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import WindTurbine from "./WindTurbine";
import { CameraView } from "../../enums/cameraView";

interface Canvas3DProps {
  cameraView?: `${CameraView}`;
}

const Canvas3D = ({ cameraView }: Canvas3DProps) => {
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
          <WindTurbine cameraView={cameraView} />
        </group>
      </>
    </Canvas>
  );
};

Canvas3D.defaultProps = {
  cameraView: CameraView.FULL,
};

export default Canvas3D;
