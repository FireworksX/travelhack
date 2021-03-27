import { useQuery } from 'react-query';
import { categoriesByCityQuery } from '../api/categoriesByCityQuery';

export const useCategoriesByCityName = ({ cityName }) => {
  const { data, error, isLoading } = useQuery('categories', () =>
    categoriesByCityQuery({ cityName })
  );
  return { isLoading, error, data };
};
