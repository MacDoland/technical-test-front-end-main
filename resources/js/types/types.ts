import type { LatLngExpression } from "leaflet";
import type { ReactNode } from "react";

export interface DataItem {
  id: number;
  name: string | undefined;
}

export interface TableItem {
  id: number;
  display: string | undefined | ReactNode;
}

export interface MapMarker {
  id: number;
  position: LatLngExpression;
  title: string;
}
