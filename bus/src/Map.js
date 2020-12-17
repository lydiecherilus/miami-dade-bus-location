import React, { useState, useRef, useCallback } from 'react';
import ReactMapGL from 'react-map-gl';
import './App.css'


ReactMapGL.accessToken = process.env.REACT_APP_MAPBOX_TOKEN

function Map() {
    const [viewport, setViewport] = useState({
        width: '100vw',
        height: '100vh',
        latitude: 25.599349,
        longitude: -80.34819,
        zoom: 11,
    });

    /** initialize map */
    const mapRef = useRef();
    const handleViewportChange = useCallback(
        (newViewport) => setViewport(newViewport),
        []
    );

    return (
        <div>
            <ReactMapGL
                ref={mapRef}
                {...viewport}
                mapboxApiAccessToken={ReactMapGL.accessToken}
                onViewportChange={handleViewportChange}
                mapStyle='mapbox://styles/mapbox/streets-v11'
            ></ReactMapGL>
        </div>
    );
}
export default Map;
