import * as THREE from "three";
import { useEffect, useRef, useState } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { type Group } from "three";
import { useAnimations, useGLTF } from "@react-three/drei";
import { CameraView } from "../../enums/cameraView";
import { setCameraPosition, setTargetPosition } from "../../helpers/helpers";

interface WindTurbineProps {
  cameraView?: `${CameraView}`;
}

const WindTurbine = ({ cameraView }: WindTurbineProps) => {
  const { camera } = useThree();
  const { scene, animations } = useGLTF("/3d/windfarm.glb");
  const { actions } = useAnimations(animations);
  const mixer = useRef<THREE.AnimationMixer | undefined>(undefined);
  const position = new THREE.Vector3(0, 50, 0);
  position.y = 50;

  const target = new THREE.Vector3();
  target.y = 50;

  useEffect(() => {
    camera.position.z = 64;
    camera.position.y = 40;
  }, []);

  useEffect(() => {
    mixer.current = new THREE.AnimationMixer(scene);
    const action = mixer.current!.clipAction(animations[1]);
    action.play();

    if (cameraView === CameraView.BLADE) {
      action.reset();
      action.stop();
      action.time = 0;
    }
  }, [actions, cameraView]);

  // Create a group to wrap the model to make it easier to set transforms on all
  const groupRef = useRef<Group | null>(null);

  useEffect(() => {
    if (groupRef.current) {
      groupRef.current.scale.set(0.5, 0.5, 0.5);
    }
  }, [groupRef]);

  // main loop
  useFrame((state, delta) => {
    state.camera.lookAt(target);
    target.lerp(setTargetPosition(cameraView!, target), 0.01);
    state.camera.position.lerp(setCameraPosition(cameraView!, position), 0.01);

    if (mixer.current) {
      mixer.current.update(delta);
    }
  });

  return (
    <group ref={groupRef as React.MutableRefObject<Group | null>}>
      {scene ? <primitive object={scene} /> : null}
    </group>
  );
};

WindTurbine.defaultProps = {
  cameraView: CameraView.FULL,
};

export default WindTurbine;
