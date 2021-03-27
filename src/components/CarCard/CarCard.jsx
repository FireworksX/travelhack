import React from 'react';
import cn from 'classnames';
import styles from './CarCard.module.scss';

export const CarCard = ({ cover, className }) => {
  return (
    <div className={cn(className, styles.root)}>
      <div className={styles.name}>KIA K5</div>
      <div className={styles.description}>от 3000 рублей в день</div>
      <img src={cover} className={styles.cover} />
      <button className={styles.button}>Арендовать</button>
    </div>
  );
};
