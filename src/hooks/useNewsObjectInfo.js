import { useQuery } from 'react-query';
import { newsObjectInfoQuery } from '../api/newsObjectInfoQuery';
export const useNewsObjectInfo = ({ id, pause }) => {
  const { isLoading, error, data } = useQuery(
    ['newsObjectInfo', id],
    () => newsObjectInfoQuery({ id }),
    {
      enabled: !pause,
    }
  );

  return { isLoading, error, data };
};
