import React, { Component } from 'react';
import { MapContainer, TileLayer, Marker } from 'react-leaflet'
import "leaflet/dist/leaflet.css";
import icon from './Marker'
import "./Map.scss"
class Map extends Component {
    render() {
        return (
            <div className='map'>
                <MapContainer 
                    center={[51.505, -0.09]} 
                    zoom={13} 
                    scrollWheelZoom={true}
                    style={{ width: "100vw", height: "100vh" }}
                >
                    <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker icon={icon} position={[51.505, -0.09]}>
                    </Marker>
                </MapContainer>
            </div>
        );
    }
}

export default Map;