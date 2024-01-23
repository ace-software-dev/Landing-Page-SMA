'use client'
import React from 'react'
import { GoogleMap, MarkerF, useJsApiLoader , InfoWindowF} from '@react-google-maps/api';


const containerStyle = {
  width: '600px',
  height: '600px'
};

const places = [
  {
    lat: 20.913533166035844,
    lng: -100.74378055060164,
    name: 'Parroquia Centro'
  },
  {
    lat: 20.898342336684696,
    lng: -100.72659947263716,
    name: 'Plaza la Luciérnaga'
  },
  {
    lat: 20.93124265594304, 
    lng: -100.6881409531946,
    name: 'Splash Inn San Miguel'
  },

]

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
    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])
  
   const [place, setPlace] = React.useState(null)

  return isLoaded ? (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={13}
        onLoad={onLoad}
        onUnmount={onUnmount}
        
      >
        <MarkerF
          icon={'/images/redmarker.svg'}
          title='Glamping San Miguel'
          position={center}
          onClick={() => 
            setPlace({ lat: 20.927441183582008, lng: -100.7104233679535 , name: 'Glamping San Miguel'})
          }
        />
        <InfoWindowF
          position={center}
          options={{
            pixelOffset: {
              width: 0,
              height: -40,
            },
          }}
  
        >
          <div className='rounded-lg'>
            <p>Glamping San Miguel</p>
          </div>
        </InfoWindowF>

        {places.map((place,i) => (
          <div>
          <MarkerF
            icon={'/images/marker.svg'}
            key={place.name + i.toString()}
            title={place.name}
            position={{ lat: place.lat, lng: place.lng }}
            onClick={() => 
              setPlace({ lat: place.lat, lng: place.lng , name: place.name})
            }
          />
          <InfoWindowF 
            position={{ lat: place.lat, lng: place.lng }} 
            options={{
              pixelOffset: {
                width: 0,
                height: -40,
              },
            }}
          >
            <div className='rounded-lg'>
              <p>{ place.name}</p>
            </div>
          </InfoWindowF>
          </div>
        
        ))}
        
        { place && <InfoWindowF
          position={{ lat: place.lat, lng: place.lng }}
          options={{
            pixelOffset: {
              width: 0,
              height: -40,
            },
          }}
          onCloseClick={() => setPlace(null)}
          
        >
          <div className='rounded-lg'>
            <p>{ place.name}</p>
          </div>
        </InfoWindowF>
        }
      
        { /* Child components, such as markers, info windows, etc. */ }
        <></>
      </GoogleMap>
  ) : <></>
}

export default (MapAtom)