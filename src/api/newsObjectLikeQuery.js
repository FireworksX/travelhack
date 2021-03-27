export const newsObjectLikeQuery = ({ id }) =>
  new Promise((resolve) =>
    setTimeout(() => resolve({ likesCount: Math.round(Math.random() * 10000) }))
  );
