import React from 'react';
import cn from 'classnames';
import styles from './PlaceCard.module.scss';

export const PlaceCard = ({ address, cover, name, onClick, className }) => {
  return (
    <div className={cn(className, styles.root)} onClick={onClick}>
      <div className={styles.cover}>
        <img src={cover} alt="" />
      </div>
      <div className={styles.body}>
        <div className={styles.name}>{name}</div>
        <div className={styles.address}>{address}</div>
      </div>
    </div>
  );
};
