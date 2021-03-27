import React from 'react';
import cn from 'classnames';
import styles from './PlaceCard.module.scss';
import { Icon28LikeOutline } from '@vkontakte/icons';

export const PlaceCard = ({ className }) => {
  return (
    <div className={cn(className, styles.root)}>
      <button className={styles.like}>
        <Icon28LikeOutline />
      </button>
      <div className={styles.cover}></div>
      <div className={styles.body}>
        <div className={styles.name}>
          Выставка Достижений Народного Хозяйства
        </div>
        <div className={styles.address}>
          Достопримечательность, Выставочный центр
        </div>
      </div>
    </div>
  );
};
