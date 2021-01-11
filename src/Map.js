import React, { useState, useEffect, useRef, useCallback } from 'react';
import ReactMapGL, { Marker, Popup, NavigationControl } from 'react-map-gl';
import Geocoder from 'react-map-gl-geocoder';
import useSwr from 'swr';
import busImage from './bus.png'
import 'mapbox-gl/dist/mapbox-gl.css'
import 'react-map-gl-geocoder/dist/mapbox-gl-geocoder.css';
import './App.css'

function Map() {

    /** initialize map */
    const [viewport, setViewport] = useState({
        width: '100vw',
        height: '100vh',
        latitude: 25.599349,
        longitude: -80.34819,
        zoom: 13,
    });

    /** set state */
    const [busData, setBusData] = useState([]);
    const [selectedBus, setSelectedBus] = useState(null);

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

    /** initialize geocoder */
    const handleGeocoderViewportChange = useCallback(
        (newViewport) => {
            const geocoderDefaultOverrides = { transitionDuration: 800 };
            return handleViewportChange({
                ...newViewport,
                ...geocoderDefaultOverrides
            });
        },
        []
    );

    return (
        <div>
            <ReactMapGL
                ref={mapRef}
                {...viewport}
                mapboxApiAccessToken="pk.eyJ1IjoibHlkaWVjaGVyaWx1cyIsImEiOiJja2gxMnEyOTcwYmVsMnJscXc4bnk0bXh3In0.YY_RlS5y_fAxP0ir_MPuzg"
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
                            <button onClick={e => {
                                e.preventDefault();
                                setSelectedBus(bus);
                            }}>
                                <img src={busImage} alt='bus' />
                            </button>
                        </Marker>
                    );
                })}

                {/* display popups */}
                {selectedBus ? (
                    <Popup className='popup'
                        latitude={parseFloat(selectedBus.Latitude)}
                        longitude={parseFloat(selectedBus.Longitude)}
                        onClose={() => {
                            setSelectedBus(null);
                        }}>
                        <div>
                            <h5>{selectedBus.TripHeadsign}</h5>
                            <p><strong>{selectedBus.ServiceDirection}</strong></p>
                        </div>
                    </Popup>
                ) : null}

                {/* add geocoder */}
                <Geocoder
                    mapRef={mapRef}
                    mapboxApiAccessToken="pk.eyJ1IjoibHlkaWVjaGVyaWx1cyIsImEiOiJja2gxMnEyOTcwYmVsMnJscXc4bnk0bXh3In0.YY_RlS5y_fAxP0ir_MPuzg"
                    onViewportChange={handleGeocoderViewportChange}
                    zoom={12}
                    trackProximity='true'
                    placeholder='enter your address'
                    position='top-right'
                />

                {/* add navigation control */}
                <div className='navigation-control'>
                    <NavigationControl />
                </div>

            </ReactMapGL>
        </div>
    );
}
export default Map;
