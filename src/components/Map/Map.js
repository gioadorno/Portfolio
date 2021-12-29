import { MapDiv, LeftMapDiv, PageBody } from "./styles"
import { GoogleMap, useLoadScript } from '@react-google-maps/api';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { GoogleAPI } from "../keys";
import Markers from "./Markers";
import LeftPanel from "./LeftPanel";

const libraries = ["places"];

const center = {
    lat: 33.257,
    lng: -111.884
};


const Map = ({ style }) => {
    const {isLoaded, loadError} = useLoadScript({
        googleMapsApiKey: GoogleAPI,
        libraries,
    });
    
    if (loadError) return "Error loading maps";
    if (!isLoaded) return "Loading Maps";

    return (
        <MapDiv>
            <LeftMapDiv>
                <LeftPanel />
            </LeftMapDiv>
            <GoogleMap mapContainerStyle={style.map} zoom={8} center={center} >
                <Markers />
            </GoogleMap>
        </MapDiv>
    )
}

Map.defaultProps = {
    style: {
        loadscript: {
            display: 'none',
        },
        map: {
            width: '100%',
            height: '92vh',
        },
        body: {
            backgroundColor: 'blue',
            width: '100%',
            height: '80em',
            position: 'fixed',
            top: '.1em'
        }
    },
}

export default Map
