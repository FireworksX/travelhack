import React, { useState } from 'react';
import cn from 'classnames';
import styles from './Favorites.module.scss';
import { View, PanelHeader, Panel, PanelHeaderButton } from '@vkontakte/vkui';
import 'react-nice-dates/build/style.css';
import { PlaceCard } from '../../components/PlaceCard/PlaceCard';
import { Div } from '@vkontakte/vkui';

const list = [
  {
    name: 'Выставка Достижений Народного Хозяйства',
    address: 'Достопримечательность, Выставочный центр',
    cover:
      'https://goru.travel/storage/app/uploads/public/5cf/a2d/2cd/thumb_115991_440_200_0_0_crop.webp',
  },
  {
    name: 'Смотровая площадка «Выше только любовь»',
    address: 'Смотровая площадка, Место событий',
    cover:
      'https://goru.travel/storage/app/uploads/public/5e4/533/6c0/thumb_135356_440_200_0_0_crop.webp',
  },
  {
    name: 'Смотровая площадка «Выше только любовь»',
    address: 'Смотровая площадка, Место событий',
    cover:
      'https://goru.travel/storage/app/uploads/public/5e4/533/6c0/thumb_135356_440_200_0_0_crop.webp',
  },
  {
    name: 'Выставка Достижений Народного Хозяйства',
    address: 'Достопримечательность, Выставочный центр',
    cover:
      'https://goru.travel/storage/app/uploads/public/5cf/a2d/2cd/thumb_115991_440_200_0_0_crop.webp',
  },
  {
    name: 'Смотровая площадка «Выше только любовь»',
    address: 'Смотровая площадка, Место событий',
    cover:
      'https://goru.travel/storage/app/uploads/public/5e4/533/6c0/thumb_135356_440_200_0_0_crop.webp',
  },
  {
    name: 'Смотровая площадка «Выше только любовь»',
    address: 'Смотровая площадка, Место событий',
    cover:
      'https://goru.travel/storage/app/uploads/public/5e4/533/6c0/thumb_135356_440_200_0_0_crop.webp',
  },
  {
    name: 'Выставка Достижений Народного Хозяйства',
    address: 'Достопримечательность, Выставочный центр',
    cover:
      'https://goru.travel/storage/app/uploads/public/5cf/a2d/2cd/thumb_115991_440_200_0_0_crop.webp',
  },
  {
    name: 'Смотровая площадка «Выше только любовь»',
    address: 'Смотровая площадка, Место событий',
    cover:
      'https://goru.travel/storage/app/uploads/public/5e4/533/6c0/thumb_135356_440_200_0_0_crop.webp',
  },
  {
    name: 'Смотровая площадка «Выше только любовь»',
    address: 'Смотровая площадка, Место событий',
    cover:
      'https://goru.travel/storage/app/uploads/public/5e4/533/6c0/thumb_135356_440_200_0_0_crop.webp',
  },
  {
    name: 'Выставка Достижений Народного Хозяйства',
    address: 'Достопримечательность, Выставочный центр',
    cover:
      'https://goru.travel/storage/app/uploads/public/5cf/a2d/2cd/thumb_115991_440_200_0_0_crop.webp',
  },
  {
    name: 'Смотровая площадка «Выше только любовь»',
    address: 'Смотровая площадка, Место событий',
    cover:
      'https://goru.travel/storage/app/uploads/public/5e4/533/6c0/thumb_135356_440_200_0_0_crop.webp',
  },
  {
    name: 'Смотровая площадка «Выше только любовь»',
    address: 'Смотровая площадка, Место событий',
    cover:
      'https://goru.travel/storage/app/uploads/public/5e4/533/6c0/thumb_135356_440_200_0_0_crop.webp',
  },
];

export const Favorites = () => {
  const [activePanel, setActivePanel] = useState('main');

  return (
    <View activePanel={activePanel}>
      <Panel id="main">
        <PanelHeader>Избранное</PanelHeader>
        <Div className={styles.head}>
          <button className={cn(styles.category, styles.categoryActive)}>
            Места
          </button>
          <button className={styles.category}>Маршруты</button>
          <button className={styles.category}>Новости</button>
        </Div>
        <Div className={styles.grid}>
          {list.map((el) => (
            <PlaceCard name={el.name} address={el.address} cover={el.cover} />
          ))}
        </Div>
      </Panel>
    </View>
  );
};
