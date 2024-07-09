"use client";

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

import L from 'leaflet';

const position = [50.476640, 30.670757]; // Координаты точки

const customIcon = new L.Icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/128/684/684908.png",
  iconSize: [38, 38],
});

const MapWithMarker = () => {
  return (
    <MapContainer center={position} zoom={13} scrollWheelZoom={false} style={{ height: '100%', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={position} icon={customIcon}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapWithMarker;

// import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
// import 'leaflet/dist/leaflet.css';
// import L from 'leaflet';

// import iconUrl from 'leaflet/dist/images/marker-icon.png';
// import iconRetinaUrl from 'leaflet/dist/images/marker-icon-2x.png';
// import shadowUrl from 'leaflet/dist/images/marker-shadow.png';

// const position = [50.476640, 30.670757]; // Координаты точки

// delete L.Icon.Default.prototype._getIconUrl;

// L.Icon.Default.mergeOptions({
//   iconUrl,
//   iconRetinaUrl,
//   shadowUrl,
// });

// const MapWithMarker = () => {
//   return (
//     <MapContainer center={position} zoom={13} scrollWheelZoom={false} style={{ height: '100%', width: '100%' }}>
//       <TileLayer
//         url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//         attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//       />
//       <Marker position={position}>
//         <Popup>
//           A pretty CSS3 popup. <br /> Easily customizable.
//         </Popup>
//       </Marker>
//     </MapContainer>
//   );
// };

// export default MapWithMarker;