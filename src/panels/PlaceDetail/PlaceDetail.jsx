import React from 'react';
import styles from './PlaceDetail.module.scss';
import { Cell, Panel } from '@vkontakte/vkui';
import { UiDiv } from '../../components/UiDiv/UiDiv';
import {
  Icon24DismissDark,
  Icon28CheckShieldOutline,
  Icon28CancelShieldOutline,
  Icon28TextLiveOutline,
} from '@vkontakte/icons';

export const PlaceDetail = () => {
  return (
    <Panel>
      <div className={styles.gallery}></div>
      <div className={styles.content}>
        <button className={styles.close}>
          <Icon24DismissDark />
        </button>
        <UiDiv>
          <div className={styles.title}>
            Выставка Достижений Народного Хозяйства
          </div>
          <div className={styles.description}>
            Достопримечательность, Выставочный центр
          </div>
        </UiDiv>
        <Cell indicator="10" expandable before={<Icon28CheckShieldOutline />}>
          Включено
        </Cell>
        <Cell indicator="3" expandable before={<Icon28CancelShieldOutline />}>
          Не включено
        </Cell>
        <Cell indicator="Русский" before={<Icon28TextLiveOutline />}>
          Язык
        </Cell>
      </div>
    </Panel>
  );
};
