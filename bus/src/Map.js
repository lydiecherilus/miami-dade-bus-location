import React, { useState, useEffect, useRef, useCallback } from 'react';
import ReactMapGL, { Marker } from 'react-map-gl';
import useSwr from 'swr';
import './App.css'


ReactMapGL.accessToken = process.env.REACT_APP_MAPBOX_TOKEN

function Map() {

    /** initialize map */
    const [viewport, setViewport] = useState({
        width: '100vw',
        height: '100vh',
        latitude: 25.599349,
        longitude: -80.34819,
        zoom: 11,
    });

     /** set state */
    const [busData, setBusData] = useState([]);

     /** fetch data from Miami Transit API and update state */
    const { data, error } = useSwr(`http://miami-transit-api.herokuapp.com/api/Buses.json`,
        (...args) => fetch(...args)
            .then(res => res.json()));
            
    useEffect(() => {
        if (data) setBusData(data.RecordSet.Record);
    }, [data]);


    /** add zoom and movement functionality to map */
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
            >
                {/* add a marker for each bus on the map */}
                {busData.map((bus, idx) => {
                    return (
                        <Marker
                            latitude={parseFloat(bus.Latitude)}
                            longitude={parseFloat(bus.Longitude)}
                            key={idx}
                        >
                            <button>
                                <img src='/bus-svg.html' alt='bus' />
                            </button>
                        </Marker>
                    );
                })}
            </ReactMapGL>
        </div>
    );
}
export default Map;
