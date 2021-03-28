import { useState, useEffect } from 'react';
import { DirectionsRenderer } from 'react-google-maps';
export function MapDirectionsRenderer(props) {
  const [directions, setDirections] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    // eslint-disable-next-line no-undef
    const { places, travelMode = google.maps.TravelMode.DRIVING } = props;

    const waypoints = places.map((p) => ({
      location: { lat: p.lat, lng: p.lng },
      stopover: true,
    }));
    if (waypoints.length === 0) return;
    const origin = waypoints.shift().location;
    const destination = waypoints.pop().location;

    // eslint-disable-next-line no-undef
    const directionsService = new google.maps.DirectionsService();
    directionsService.route(
      {
        origin: origin,
        destination: destination,
        travelMode: travelMode,
        waypoints: waypoints,
      },
      (result, status) => {
        console.log(result);
        // eslint-disable-next-line no-undef
        if (status === google.maps.DirectionsStatus.OK) {
          setDirections(result);
        } else {
          setError(result);
        }
      }
    );
  });

  if (error) {
    return <h1>{error.toString()}</h1>;
  }
  return directions && <DirectionsRenderer directions={directions} />;
}
