"use client"

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { icon, LatLngExpression, LatLngTuple } from 'leaflet';

import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";

interface MapProps {
    posix: LatLngExpression | LatLngTuple,
    zoom?: number,
}

const defaults = {
    zoom: 19,
}

const greenIcon = icon({
    iconUrl: '/icons/mapLocationIcon.png',
    shadowUrl: '/icons/mapLocationIcon.png',

    iconSize: [58, 95], // size of the icon
    shadowSize: [0, 60], // size of the shadow
    iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
    shadowAnchor: [4, 62],  // the same for the shadow
    popupAnchor: [3, -76] // point from which the popup should open relative to the iconAnchor
});

const Map = (Map: MapProps) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const { zoom = defaults.zoom, posix } = Map
    const mapboxApi = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN!
    const mapboxTileUrl = `https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/512/{z}/{x}/{y}@2x?access_token=${mapboxApi}`;



    return (

        <MapContainer
            center={posix}
            zoom={zoom}
            scrollWheelZoom={false}
            style={{ height: "100%", width: "100%", borderRadius: "10px" }}
            zoomControl={false}
            doubleClickZoom={true}
            attributionControl={false}
            touchZoom={true}
        >
            <TileLayer
                attribution='&copy; <a href="https://www.mapbox.com/about/maps/">Mapbox</a>'
                url={mapboxTileUrl}
                maxZoom={19}
                tileSize={512}
                zoomOffset={-1}

            />
            <Marker position={posix} draggable={false}
                icon={greenIcon}

            >
                <Popup

                >
                    <span className="text-foreground font-park">
                        Hey! I live here
                    </span>
                </Popup>
            </Marker>
        </MapContainer>

    )
}

export default Map