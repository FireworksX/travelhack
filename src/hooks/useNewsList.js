import { useQuery } from 'react-query';
import { newsListQuery } from '../api/newsListQuery';
export const useNewsList = () => {
  const { isLoading, error, data } = useQuery('newsList', newsListQuery);

  return { isLoading, error, data };
};
