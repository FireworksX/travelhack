import { useQuery } from 'react-query';
import { planTourQuery } from '../api/planTourQuery';

export const usePlanTour = ({ cityName, dateTo, dateFrom, categories }) => {
  const { isLoading, error, data } = useQuery('planTour', () =>
    planTourQuery({ cityName, dateTo, dateFrom, categories })
  );
  return { isLoading, error, data };
};
