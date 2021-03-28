import { useQuery } from 'react-query';
import { plannerQuery } from '../api/plannerQuery';

export const usePlannerList = ({ city, categories, dateTo, dateFrom }) => {
  const { data, error, isLoading } = useQuery('plannerQuery', () =>
    plannerQuery({ city, categories, dateTo, dateFrom })
  );
  return { data, error, isLoading };
};
