import React from 'react';
import styles from './NewsCard.module.scss'
import { Icon24MoreHorizontal } from '@vkontakte/icons';
import {UiDiv} from "../UiDiv/UiDiv";
import { Icon28FireOutline, Icon28ShareOutline } from '@vkontakte/icons';

export const NewsCard = () => {
    return <div>
        <UiDiv>
            <div className={styles.header}>
                <div className={styles.icon}/>
                <div className={styles.category}>Музеи</div>
                <div className={styles.source}>— Название СМИ</div>
                <button className={styles.other}>
                    <Icon24MoreHorizontal/>
                </button>
            </div>
            <div className={styles.title}>Большой заголовок в 3 строки,
                осталось заполнить 2 строки,
                еще чуть-чуть... готово!</div>
            <div className={styles.description}>
                Тут просто много бесполезного текста, тут тоже много бесполезного текста, тут тоже много бесполезного текста, тут тоже много бесполезного текста, тут тоже много бесполезного текста, тут тоже много бесполезного текста, тут тоже много...
            </div>
            <div className={styles.more}>Читать полностью...</div>
        </UiDiv>
        <div className={styles.cover}></div>
        <UiDiv className={styles.footer}>
            <button className={styles.footerButton}>
                <Icon28FireOutline/>
                <span>120</span>
            </button>
            <button className={styles.footerButton}>
                <Icon28ShareOutline/>
            </button>
        </UiDiv>
    </div>
}
