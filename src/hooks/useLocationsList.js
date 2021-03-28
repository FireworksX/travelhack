import { useQuery } from 'react-query';
import { locationsQuery } from '../api/locationsQuery';

export const useLocatonsList = ({ city }) => {
  const { isLoading, data } = useQuery(['locationsList', city], () =>
    locationsQuery({ city })
  );
  return { isLoading, data };
};
