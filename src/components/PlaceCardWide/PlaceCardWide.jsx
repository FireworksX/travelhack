import React from 'react';
import cn from 'classnames';
import styles from './PlaceCardWide.module.scss';

export const PlaceCardWide = ({ name, address, cover, onClick, className }) => {
  return (
    <div className={cn(className, styles.root)} onClick={onClick}>
      <div className={styles.cover}>
        <img src={cover} alt="" />
      </div>
      <div className={styles.body}>
        <div className={styles.name}>{name}</div>
        {address && <div className={styles.address}>{address}</div>}
        <button className={styles.button}>Подробнее</button>
      </div>
    </div>
  );
};
