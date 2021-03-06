import React from 'react';
import cn from 'classnames';
import styles from './NewsCard.module.scss';
import { Icon24MoreHorizontal } from '@vkontakte/icons';
import { UiDiv } from '../UiDiv/UiDiv';
import { Icon28FireOutline, Icon28ShareOutline } from '@vkontakte/icons';

export const NewsCard = ({
  className,
  onClick,
  id,
  title,
  preview: { description },
  image,
  category: { name: categoryName, categoryId, color },
  sourceName,
  socialInfo: { visitedCount, likesCount, isLiked },
}) => {
  return (
    <div className={cn(className, styles.root)} onClick={onClick}>
      <UiDiv>
        <div className={styles.header}>
          <div className={styles.icon} style={{ backgroundColor: color }} />
          <div className={styles.category}>{categoryName}</div>
          <div className={styles.source}>— {sourceName}</div>
          <button className={styles.other}>
            <Icon24MoreHorizontal />
          </button>
        </div>
        <div className={styles.title}>{title}</div>
        <div className={styles.description}>{description}</div>
        <div className={styles.more}>Читать полностью...</div>
      </UiDiv>
      <div className={styles.cover} style={{ overflow: 'hidden' }}>
        <img alt="" style={{ backgroundSize: 'cover' }} src={image} />
      </div>
      <UiDiv className={styles.footer}>
        <button className={styles.footerButton}>
          <Icon28FireOutline />
          <span>{likesCount}</span>
        </button>
        <button className={styles.footerButton}>
          <Icon28ShareOutline />
        </button>
        <div className={styles.views}>{visitedCount} просмотров</div>
      </UiDiv>
    </div>
  );
};
