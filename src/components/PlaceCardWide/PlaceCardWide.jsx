import React from 'react';
import cn from 'classnames';
import styles from './PlaceCardWide.module.scss';
import { Icon28LikeOutline } from '@vkontakte/icons';

export const PlaceCardWide = ({ onClick, className }) => {
  return (
    <div className={cn(className, styles.root)} onClick={onClick}>
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
