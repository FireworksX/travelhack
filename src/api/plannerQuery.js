export const plannerQiuery = async ({ city, categories, dateTo, dateFrom }) => {
  const dataList = fetch('http://drop-table.tech/api/plan', {
    method: 'POST',
    body: JSON.stringify({
      city,
      categories: categories.map(({ id, chosen }) => ({ id, weight: +chosen })),
      date_to: dateTo,
      date_from: dateFrom,
    }),
  }).then((resp) => resp.json());
  return dataList.map((data) => ({
    date: data?.date,
    blocks: data?.blocks?.map((_block) => ({
      time: _block?.time,
      type: _block?.type,
      block: {
        name: _block?.name,
        description: _block?.description,
        image: _block?.image,
        coords: {
          lat: _block?.coords?.lat,
          lon: _block?.coords?.lon,
        },
        imagesGallery: _block?.images_gallery,
        likesCount: _block?.likes_count,
        isLiked: _block?.isLiked,
        price: _block?.price,
        guide: {
          name: _block?.guide?.name,
          avatar: _block?.guide?.avatar,
        },
      },
    })),
  }));
};
