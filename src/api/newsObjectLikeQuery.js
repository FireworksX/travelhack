export const newsObjectLikeQuery = ({ id }) =>
  new Promise((resolve) =>
    setTimeout(() =>
      resolve({ likes_count: Math.round(Math.random() * 10000) })
    )
  );
