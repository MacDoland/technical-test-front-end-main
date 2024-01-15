import * as THREE from "three";
import { useEffect, useRef, useState } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { type Group } from "three";
import { useAnimations, useGLTF } from "@react-three/drei";
import CameraView from "../../enums/cameraView";
import {
  updateCameraPosition,
  updateTargetPosition,
} from "../../helpers/helpers";

interface WindTurbineProps {
  cameraView?: `${CameraView}`;
}

const WindTurbine: React.FC<WindTurbineProps> = ({
  cameraView,
}: WindTurbineProps) => {
  const { camera } = useThree();
  const { scene, animations } = useGLTF("/3d/windfarm.glb");
  const { actions } = useAnimations(animations);
  const mixer = useRef<THREE.AnimationMixer | undefined>(undefined);

  const [cameraPosition] = useState<THREE.Vector3>(new THREE.Vector3(0, 50, 0));
  const [cameraLookAt] = useState<THREE.Vector3>(new THREE.Vector3(0, 50, 0));

  useEffect(() => {
    camera.position.z = 64;
    camera.position.y = 40;
  });

  useEffect(() => {
    if (typeof mixer.current !== "undefined") {
      mixer.current = new THREE.AnimationMixer(scene);
      const action = mixer.current.clipAction(animations[1]);
      action.play();

      if (cameraView === CameraView.BLADE) {
        action.reset();
        action.stop();
        action.time = 0;
      }
    }
  }, [actions, cameraView, animations, scene]);

  // Create a group to wrap the model to make it easier to set transforms on all
  const groupRef = useRef<Group | null>(null);

  useEffect(() => {
    if (groupRef.current !== null) {
      groupRef.current.scale.set(0.5, 0.5, 0.5);
    }
  }, [groupRef]);

  // main loop
  useFrame((state, delta) => {
    state.camera.lookAt(cameraLookAt);
    if (typeof cameraView !== "undefined") {
      cameraLookAt.lerp(
        updateTargetPosition(cameraView, cameraLookAt.clone()),
        0.01,
      );
      state.camera.position.lerp(
        updateCameraPosition(cameraView, cameraPosition.clone()),
        0.01,
      );
    }

    if (typeof mixer.current !== "undefined") {
      mixer.current.update(delta);
    }
  });

  return (
    <group ref={groupRef}>
      {scene != null ? <primitive object={scene} /> : null}
    </group>
  );
};

WindTurbine.defaultProps = {
  cameraView: CameraView.FULL,
};

export default WindTurbine;
