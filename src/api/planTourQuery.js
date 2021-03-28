export const planTourQuery = ({ dateTo, dateFrom, cityName, categories }) =>
  new Promise((resolve) =>
    setTimeout(
      () =>
        resolve([
          {
            date: '2021-04-01',
            blocks: [
              {
                time: '10:00',
                type: 'tour',
                block: {
                  name: 'экскурсия по неве',
                  description: 'экскурсия по неве',
                  image: '',
                  coords: {
                    lat: 59.9414315,
                    long: 30.3890513,
                  },
                  likesCount: 1232,
                  isLiked: true,
                  price: 1000,
                  guide: {
                    name: 'Оксана',
                    avatar: '',
                  },
                  places: [],
                  imagesGallery: [],
                },
              },
              {
                time: '14:00',
                type: 'place',
                block: {
                  name: 'тюз',
                  description: 'тюз',
                  image: '',
                  coords: {
                    lat: 59.9024076,
                    long: 30.2937502,
                  },
                  likesCount: 1232,
                  isLiked: true,
                },
              },
              {
                time: '14:00',
                type: 'place',
                block: {
                  name: 'крейсер Аврора',
                  description: 'крейсер Аврора',
                  image: '',
                  coords: {
                    lat: 59.9544502,
                    long: 30.3370089,
                  },
                  likesCount: 1232,
                  isLiked: true,
                },
              },
            ],
          },
          {
            date: '2021-04-02',
            blocks: [
              {
                time: '10:00',
                type: 'tour',
                block: {
                  name: 'экскурсия по неве',
                  description: 'экскурсия по неве',
                  image: '',
                  coords: {
                    lat: 59.9414315,
                    long: 30.3890513,
                  },
                  likesCount: 1232,
                  isLiked: true,
                  price: 1000,
                  guide: {
                    name: 'Оксана',
                    avatar: '',
                  },
                  places: [],
                  imagesGallery: [],
                },
              },
              {
                time: '14:00',
                type: 'place',
                block: {
                  name: 'тюз',
                  description: 'тюз',
                  image: '',
                  coords: {
                    lat: 59.9024076,
                    long: 30.2937502,
                  },
                  likesCount: 1232,
                  isLiked: true,
                },
              },
              {
                time: '14:00',
                type: 'place',
                block: {
                  name: 'крейсер Аврора',
                  description: 'крейсер Аврора',
                  image: '',
                  coords: {
                    lat: 59.9544502,
                    long: 30.3370089,
                  },
                  likesCount: 1232,
                  isLiked: true,
                },
              },
            ],
          },
        ]),
      500
    )
  );
