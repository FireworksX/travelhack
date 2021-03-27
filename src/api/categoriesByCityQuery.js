export const categoriesByCityQuery = ({ cytName }) =>
  new Promise((resolve) =>
    setTimeout(
      () =>
        resolve([
          {
            id: 1,
            name: 'Архитектура',
          },
          {
            id: 2,
            name: 'Природа',
          },
          {
            id: 3,
            name: 'Бары',
          },
          {
            id: 4,
            name: 'Экстрим',
          },
          {
            id: 5,
            name: 'Спектакли',
          },
          {
            id: 6,
            name: 'квесты',
          },
          {
            id: 7,
            name: 'Реки',
          },
          {
            id: 8,
            name: 'Мосты',
          },
          {
            id: 9,
            name: 'Море',
          },
          {
            id: 10,
            name: 'Музеи',
          },
        ]),
      500
    )
  );
