'use client'
import React from 'react'
import { GoogleMap, MarkerF, useJsApiLoader } from '@react-google-maps/api';


const containerStyle = {
  width: '600px',
  height: '600px'
};

const center = {
  lat: 20.927441183582008,
  lng: -100.7104233679535
};

function MapAtom() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyA2oBnN5Vzw8NDlZO7O6PlKrdY_OPXNLbY"
  })

  const [map, setMap] = React.useState(null)

  const onLoad = React.useCallback(function callback(map) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);

    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  return isLoaded ? (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={13}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        <MarkerF
          title='Glamping Sanmiguel'
          position={center}
        />
        { /* Child components, such as markers, info windows, etc. */ }
        <></>
      </GoogleMap>
  ) : <></>
}

export default (MapAtom)