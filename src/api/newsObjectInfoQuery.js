// export const newsObjectInfoQuery = ({ id }) =>
//   new Promise((resolve) =>
//     setTimeout(() => {
//       resolve({
//         id: Math.floor(Math.random(1000)) + 1,
//         preview: {
//           title: `Большой заголовок в 3 строки,
//       осталось заполнить 2 строки,
//       еще чуть-чуть... готово!`,
//           description: `Тут просто много бесполезного текста, тут тоже много бесполезного текста, тут тоже много бесполезного текста, тут тоже много бесполезного текста, тут тоже много бесполезного текста, тут тоже много бесполезного текста, тут тоже много...`,
//           image:
//             'https://www.fieldmuseum.org/sites/default/files/styles/3x2_1400w/public/2018_03_06_fieldmuseum_lhewett-01.jpg',
//           category: {
//             name: 'музеи',
//             categoryId: 1,
//           },
//           sourceName: 'tripadvisor',
//         },
//         socialInfo: {
//           visitedCount: 1092,
//           likesCount: 90,
//           isLiked: false,
//         },
//         content: [
//           {
//             type: 'text',
//             payload:
//               'Тут просто много бесполезного текста, тут тоже много бесполезного текста, тут тоже много бесполезного текста, тут тоже много бесполезного текста, тут тоже много бесполезного текста, тут тоже много бесполезного текста, тут тоже много и еще немного больше!',
//           },
//           {
//             type: 'image',
//             payload:
//               'https://www.fieldmuseum.org/sites/default/files/styles/3x2_1400w/public/2018_03_06_fieldmuseum_lhewett-01.jpg',
//           },
//           {
//             type: 'text',
//             payload:
//               'а вот тут дополнительный текст, которого не было в превьюшке',
//           },
//         ],
//       });
//     }, 500)
//   );

export const newsObjectInfoQuery = async ({ id }) => {
  const data = await fetch(`http://drop-table.tech/news/${id}`)
    .then((resp) => resp.json())
    .then(({ data }) => data);
  return {
    preview: {
      title: data?.preview?.title,
      description: data?.preview?.description,
      category: {
        categoryId: data?.preview?.category?.category_id,
        name: data?.preview?.category?.category_name,
      },
    },
    sourceName: data?.source_name,
    socialInfo: {
      likesCount: data?.social_info?.likes,
      isLiked: data?.social_info?.is_liked,
      visitedCount: data?.social_info?.views,
    },
    content: (data?.content || []).map(({ result }) => ({
      type: result?.type,
      payload:
        result?.type === 'location'
          ? {
              name: JSON.parse(result?.payload)?.name,
              image: JSON.parse(result?.payload)?.images?.[0],
              isFavorite: JSON.parse(result?.payload)?.is_faivorite,
            }
          : result?.payload,
    })),
  };
};
