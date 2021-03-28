import { useQuery } from 'react-query';
import { plannerQuery } from '../api/plannerQuery';

export const usePlanTour = ({ cityName, dateTo, dateFrom, categories }) => {
  const { isLoading, error, data } = useQuery('planTour', () =>
    plannerQuery({ cityName, dateTo, dateFrom, categories })
  );
  return { isLoading, error, data };
};
