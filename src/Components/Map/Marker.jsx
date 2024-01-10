import L from 'leaflet'
import Icon from "../../assets/location-icon.png"

export default L.icon({
    iconSize: [32, 40],
    iconAnchor: [10, 41],
    popupAnchor: [2, -40],
    iconUrl: Icon,
})