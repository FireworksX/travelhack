import { useQuery } from 'react-query';
import { newsObjectInfoQuery } from '../api/newsObjectInfoQuery';
export const useNewsObjectInfo = ({ id }) => {
  const { isLoading, error, data } = useQuery('newsObjectInfo', () =>
    newsObjectInfoQuery({ id })
  );

  return { isLoading, error, data };
};
