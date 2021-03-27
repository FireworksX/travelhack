export const newsObjectInfoQuery = ({ id }) =>
  new Promise((resolve) =>
    setTimeout(() => {
      resolve({
        id: Math.floor(Math.random(1000)) + 1,
        preview: {
          title: `Большой заголовок в 3 строки,
      осталось заполнить 2 строки,
      еще чуть-чуть... готово!`,
          description: `Тут просто много бесполезного текста, тут тоже много бесполезного текста, тут тоже много бесполезного текста, тут тоже много бесполезного текста, тут тоже много бесполезного текста, тут тоже много бесполезного текста, тут тоже много...`,
          image:
            'https://www.fieldmuseum.org/sites/default/files/styles/3x2_1400w/public/2018_03_06_fieldmuseum_lhewett-01.jpg',
          category: {
            name: 'музеи',
            categoryId: 1,
          },
          sourceName: 'tripadvisor',
        },
        socialInfo: {
          visitedCount: 1092,
          likesCount: 90,
          isLiked: false,
        },
        content: [
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
        ],
      });
    }, 500)
  );
