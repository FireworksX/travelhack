import React from 'react';
import cn from 'classnames';
import styles from './PlaceCardWide.module.scss';

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
        <button className={styles.button}>Подробнее</button>
      </div>
    </div>
  );
};
