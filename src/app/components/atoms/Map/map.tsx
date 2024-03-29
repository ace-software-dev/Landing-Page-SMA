'use client'
import React from 'react'
import { GoogleMap, MarkerF, useJsApiLoader , InfoWindowF} from '@react-google-maps/api';

interface Place {
  lat: number,
  lng: number,
  name: string,
}

interface MapProps {
  center: Place,
  places: Place[],
}

export default function MapAtom({ center, places }: MapProps) {
  const [map, setMap] = React.useState(null)
  const [place, setPlace] = React.useState<Place | null>(center);

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || '',
  })

  const onLoad = React.useCallback(function callback(map: any) {
    setMap(map)
  }, [])
  
  const onUnmount = React.useCallback(function callback(map: any) {
    setMap(null)
  }, [])
  
  const containerStyle = {
    width: '100%',
    height: '500px',
    borderRadius: '0.5rem',
  
  };

  return isLoaded ? (
      <div>
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={13}
          onLoad={onLoad}
          onUnmount={onUnmount}
        >
          { /* Center marker */ }
          <MarkerF
            icon={'/images/redmarker.svg'}
            title={center.name}
            position={center}
            onClick={() => 
              setPlace({ lat: center.lat, lng: center.lng , name: center.name})
            }
          />
          { /* Other markers */}
          {places.map((place,i) => (
            <div key={`marker-${i}`}> 
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
                  equals(other: any) {
                    return true
                  }
                },
              }}
            >
              <div className='rounded-lg'>
                <p>{ place.name}</p>
              </div>
            </InfoWindowF>
            </div>
          
          ))}
          
          { /* Info window of selected place */}
          { place && <InfoWindowF
            position={{ lat: place.lat, lng: place.lng }}
            options={{
              pixelOffset: {
                width: 0,
                height: -40,
                equals(other: any) {
                    return true
                  }
              },
            }}
            onCloseClick={() => setPlace(null)}
            
          >
            <div className='rounded-lg'>
              <p>{place.name}</p>
            </div>
          </InfoWindowF>
          }
        </GoogleMap>
      </div>
  ) : <></>
}