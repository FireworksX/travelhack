import { format } from 'date-fns';
const formatDate = (d) => format(d, 'yyyy-MM-dd');
export const plannerQuery = async ({ city, categories, dateTo, dateFrom }) => {
  const dataList = await fetch('http://drop-table.tech/api/plan', {
    method: 'POST',
    body: JSON.stringify({
      city,
      categories: categories.map(({ id, chosen }) => ({ id, weight: +chosen })),
      date_to: formatDate(dateTo),
      date_from: formatDate(dateFrom),
    }),
  }).then((resp) => resp.json());
  return dataList?.map((data) => ({
    date: data?.date,
    blocks: data?.blocks?.map((_block) => ({
      time: _block?.time,
      type: _block?.type,
      block: {
        name: _block?.block?.name,
        description: _block?.block?.description,
        image: _block?.block?.image,
        coords: {
          lat: +_block?.block?.coords?.lat,
          lng: +_block?.block?.coords?.lon,
        },
        imagesGallery: _block?.block?.images_gallery,
        likesCount: _block?.block?.likes_count,
        isLiked: _block?.block?.isLiked,
        price: _block?.block?.price,
        guide: {
          name: _block?.block?.guide?.name,
          avatar: _block?.block?.guide?.avatar,
        },
      },
    })),
  }));
};
