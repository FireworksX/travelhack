import React from 'react';
import styles from './NewsCard.module.scss'
import { Icon24MoreHorizontal } from '@vkontakte/icons';
import {UiDiv} from "../UiDiv/UiDiv";
import { Icon28FireOutline, Icon28ShareOutline } from '@vkontakte/icons';

export const NewsCard = ({
    id,
    title,
    description,
    image,
    category: {
      name: categoryName,
      category_id
   },
   source_name: sourceName,
   social_info: {
    visited_count,
    likes_count: likesCount,
    is_liked: isLike
    }
  }) => {
    return <div>
        <UiDiv>
            <div className={styles.header}>
                <div className={styles.icon}/>
                <div className={styles.category}>{categoryName}</div>
                <div className={styles.source}>— {sourceName}</div>
                <button className={styles.other}>
                    <Icon24MoreHorizontal/>
                </button>
            </div>
            <div className={styles.title}>{title}</div>
            <div className={styles.description}>
                {description}
            </div>
            <div className={styles.more}>Читать полностью...</div>
        </UiDiv>
        <div className={styles.cover}></div>
        <UiDiv className={styles.footer}>
            <button className={styles.footerButton}>
                <Icon28FireOutline/>
                <span>{likesCount}</span>
            </button>
            <button className={styles.footerButton}>
                <Icon28ShareOutline/>
            </button>
        </UiDiv>
    </div>
}
