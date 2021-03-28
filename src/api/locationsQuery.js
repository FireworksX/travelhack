export const locationsQuery = async ({ city }) => {
  const dataList = await fetch(
    `http://drop-table.tech/api/region/locations?city=${encodeURI(city)}`
  ).then((resp) => resp.json());
  return (dataList || []).map((data) => {
    return {
      id: data?.id,
      typeId: data?.type_id,
      adress: data?.address,
      image:
        'https://stroi.mos.ru/uploads/media/main_image/0001/98/d9265fe269b6119a07e3c51051b07f396575efa3.jpeg',
      name: data?.object_title,
    };
  });
};
