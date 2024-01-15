import { CameraView } from "../enums/cameraView";

export const isNotNullOrUndefined = (value: any): boolean =>
  value !== null && typeof value !== "undefined";

export const isNotUndefined = (value: any): boolean =>
  typeof value !== "undefined";

export const setCameraPosition = (
  cameraView: `${CameraView}`,
  position: THREE.Vector3,
) => {
  switch (cameraView) {
    case CameraView.HUB:
      position.set(-10, 50, 0);
      break;
    case CameraView.ROTOR:
      position.set(-5, 50, 5);
      break;
    case CameraView.BLADE:
      position.set(-5, 64, 20);
      break;
    default:
      position.set(-25, 75, 25);
  }
  return position;
};

export const setTargetPosition = (
  cameraView: `${CameraView}`,
  target: THREE.Vector3,
) => {
  switch (cameraView) {
    case CameraView.BLADE:
      target.set(-5, 64, 0);
      break;
    default:
      target.set(0, 50, 0);
  }
  return target;
};
