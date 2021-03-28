import {
  withGoogleMap,
  withScriptjs,
  GoogleMap,
  Marker,
} from 'react-google-maps';
import { DirectionsRenderer } from '../DirectionRenderer';
export const MapComponent = withScriptjs(() => {
  const GoogleMapExample = withGoogleMap(({ data }) => (
    <GoogleMap
    // defaultCenter={props.defaultCenter}
    // defaultZoom={props.defaultZoom}
    >
      {data.places.map(({ lat, long }, index) => {
        const position = { lat, lng };
        return <Marker key={index} position={position} />;
      })}
      <DirectionsRenderer
        places={data.places}
        travelMode={window.google.maps.TravelMode.DRIVING}
      />
    </GoogleMap>
  ));

  return (
    <div>
      <GoogleMapExample
        containerElement={<div style={{ height: `500px`, width: '500px' }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    </div>
  );
});
