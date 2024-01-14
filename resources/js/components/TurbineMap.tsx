import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L, { type LatLngBounds, type LatLngExpression } from "leaflet";
import "leaflet/dist/leaflet.css";
import type { MapMarker } from "../types/types";

interface MapProps {
  markers?: MapMarker[];
  bounds?: LatLngBounds | undefined;
  initialPosition?: LatLngExpression | undefined;
  zoom?: number;
}

const TurbineMap: React.FC<MapProps> = ({
  markers,
  initialPosition,
  bounds,
  zoom,
}: MapProps) => {
  const customIcon = new L.Icon({
    iconUrl: "/img/Map_marker.png",
    iconSize: [64, 64],
    iconAnchor: [32, 64],
    popupAnchor: [0, -64],
  });

  return (
    <MapContainer
      bounds={bounds}
      center={initialPosition}
      zoom={zoom}
      style={{ height: "500px", width: "100%" }}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

      {typeof markers !== "undefined"
        ? markers.map(marker => (
            <Marker
              key={marker.id}
              position={marker.position}
              icon={customIcon}>
              <Popup>{marker.title}</Popup>
            </Marker>
          ))
        : null}
    </MapContainer>
  );
};

TurbineMap.defaultProps = {
  markers: [],
  initialPosition: undefined,
  bounds: undefined,
  zoom: 4,
};

export default TurbineMap;
