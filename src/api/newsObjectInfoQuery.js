export const newsObjectInfoQuery = ({ id }) =>
  new Promise((resolve) =>
    setTimeout(
      () =>
        resolve([
          {
            type: 'text',
            payload:
              'Тут просто много бесполезного текста, тут тоже много бесполезного текста, тут тоже много бесполезного текста, тут тоже много бесполезного текста, тут тоже много бесполезного текста, тут тоже много бесполезного текста, тут тоже много и еще немного больше!',
          },
          {
            type: 'image',
            payload:
              'https://www.fieldmuseum.org/sites/default/files/styles/3x2_1400w/public/2018_03_06_fieldmuseum_lhewett-01.jpg',
          },
          {
            type: 'text',
            payload:
              'а вот тут дополнительный текст, которого не было в превьюшке',
          },
        ]),
      3000
    )
  );
