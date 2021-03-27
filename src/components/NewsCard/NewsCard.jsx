import React from 'react';
import styles from './NewsCard.module.scss'
import {Div} from "@vkontakte/vkui";
import { Icon24MoreHorizontal } from '@vkontakte/icons';

export const NewsCard = () => {
    return <div>
        <Div>
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
        </Div>
    </div>
}
