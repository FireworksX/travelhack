import { usePlannerList } from '../hooks/usePlannerList';
import { MapComponent } from './MapComponent';
export const MapContainer = ({
  city,
  categories,
  dateTo,
  dateFrom,
  height = 400,
  data,
}) => {
  if (!data) return null;
  const structured = data
    ?.reduce((prev, { blocks }) => {
      return [...prev, ...blocks?.map(({ block }) => block?.coords)];
    }, [])
    .filter(Boolean)
    .map(({ lat, lng }) => ({ lat, lng }));

  return structured ? (
    <MapComponent
      data={{ places: structured, data }}
      googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyDUlXMyVyOwaRkFHUKjcBN8t84xZ7jhP38"
      loadingElement={<div style={{ height: `100px` }} />}
      containerElement={<div style={{ height }} />}
      mapElement={<div style={{ height: `100px` }} />}
    />
  ) : null;
};
