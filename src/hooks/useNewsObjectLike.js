import { useMutation, useQueryClient } from 'react-query';
import { newsObjectLikeQuery } from '../api/newsObjectLikeQuery';
export const useNewsObjectLike = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation(({ id }) => newsObjectLikeQuery({ id }), {
    // Notice the second argument is the variables object that the `mutate` function receives
    onSuccess: (data, { id }) => {
      queryClient.setQueryData(
        [
          'newsList',
          queryClient
            .getQueryData('newsList')
            .map((newsObj) =>
              newsObj.id === id
                ? { ...newsObj, likes_count: data.likes_count, is_liked: true }
                : newsObj
            ),
        ],
        data
      );
    },
  });
  return (id) => mutation.mutate({ id });
};
