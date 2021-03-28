import { useQuery } from 'react-query';
import { plannerQiuery } from '../api/plannerQuery';

export const usePlannerList = ({ city, categories, dateTo, dateFrom }) => {
  const { data, error, isLoading } = useQuery('plannerQuery', () =>
    plannerQiuery({ city, categories, dateTo, dateFrom })
  );
  return { data, error, isLoading };
};
