"use client";

import { MapContainer, TileLayer, Marker } from "react-leaflet";
import 'leaflet/dist/leaflet.css'
import { icon } from "leaflet";

const ICON = icon(
    {
        iconUrl:'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pngwing.com%2Fen%2Fsearch%3Fq%3Dmap%2Bmarker&psig=AOvVaw3BGucY5TxmWIB7oSNMs04X&ust=1724651763318000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCLivtNe6j4gDFQAAAAAdAAAAABAE',
        iconSize:[50,50]
    }
)

export default function Map({locationValue} : {locationValue:string}) {
    const {getCountryByValue} = useCountries()
    const latLang = getCountryByValue(locationValue)?.latLang
  return (
    <MapContainer
      scrollWheelZoom={false}
      className="h-[50vh] rounded-lg relative z-0"
      center={latLang ?? [52.585, -0.09]}
      zoom={8}
    >
        <TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>

    <Marker position={latLang ?? [52.585, -0.09]} icon={ICON}/>
    </MapContainer>
  );
}
function useCountries(): { getCountryByValue: any; } {
    throw new Error("Function not implemented.");
}

