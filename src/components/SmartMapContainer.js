import { usePlannerList } from '../hooks/usePlannerList';
import { MapComponent } from './MapComponent';
export const SmartMapContainer = ({
  city,
  categories,
  dateTo,
  dateFrom,
  height = 400,
}) => {
  const { data, isLoading } = usePlannerList({
    city,
    categories,
    dateTo,
    dateFrom,
  });
  if (!isLoading && !data) return;
  const structured = data
    ?.reduce((prev, { blocks }) => {
      return [...prev, ...blocks?.map(({ block }) => block?.coords)];
    }, [])
    .filter(Boolean);

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
