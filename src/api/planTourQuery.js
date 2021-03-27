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
                block: {
                  type: 'tour',
                  payload: {
                    name: 'экскурсия по неве',
                    description: 'экскурсия по неве',
                    image: '',
                    coords: {
                      lat: 1,
                      long: 1,
                    },
                    likes_count: 1232,
                    is_liked: true,
                    price: 1000,
                    guide: {
                      name: 'Оксана',
                      avatar: '',
                    },
                    places: [],
                    images_gallery: [],
                  },
                },
              },
              {
                time: '14:00',
                block: {
                  type: 'place',
                  payload: {
                    name: 'тюз',
                    description: 'тюз',
                    image: '',
                    coords: {
                      lat: 1,
                      long: 1,
                    },
                    likes_count: 1232,
                    is_liked: true,
                  },
                },
              },
              {
                time: '14:00',
                block: {
                  type: 'place',
                  payload: {
                    name: 'крейсе Аврора',
                    description: 'крейсе Аврора',
                    image: '',
                    coords: {
                      lat: 1,
                      long: 1,
                    },
                    likes_count: 1232,
                    is_liked: true,
                  },
                },
              },
            ],
          },
          {
            date: '2021-04-02',
            blocks: [
              {
                time: '10:00',
                block: {
                  type: 'tour',
                  payload: {
                    name: 'экскурсия по неве',
                    description: 'экскурсия по неве',
                    image: '',
                    coords: {
                      lat: 1,
                      long: 1,
                    },
                    likes_count: 1232,
                    is_liked: true,
                    price: 1000,
                    guide: {
                      name: 'Оксана',
                      avatar: '',
                    },
                    places: [],
                    images_gallery: [],
                  },
                },
              },
              {
                time: '14:00',
                block: {
                  type: 'place',
                  payload: {
                    name: 'тюз',
                    description: 'тюз',
                    image: '',
                    coords: {
                      lat: 1,
                      long: 1,
                    },
                    likes_count: 1232,
                    is_liked: true,
                  },
                },
              },
              {
                time: '14:00',
                block: {
                  type: 'place',
                  payload: {
                    name: 'крейсе Аврора',
                    description: 'крейсе Аврора',
                    image: '',
                    coords: {
                      lat: 1,
                      long: 1,
                    },
                    likes_count: 1232,
                    is_liked: true,
                  },
                },
              },
            ],
          },
        ]),
      500
    )
  );
