import React, { useState } from 'react';
import styles from './NewsDetail.module.scss';
import {
  View,
  PanelHeader,
  Panel,
  PanelHeaderButton,
  FixedLayout,
} from '@vkontakte/vkui';
import { UiDiv } from '../../../../components/UiDiv/UiDiv';
import {
  Icon24MoreHorizontal,
  Icon28FireOutline,
  Icon28ShareOutline,
  Icon36ChevronLeftOutline,
} from '@vkontakte/icons';

export const NewsDetail = ({ onBack }) => {
  return (
    <Panel>
      <div className={styles.root}>
        <PanelHeader
          left={
            <PanelHeaderButton onClick={onBack}>
              <Icon36ChevronLeftOutline />
            </PanelHeaderButton>
          }
          right={
            <PanelHeaderButton>
              <Icon24MoreHorizontal />
            </PanelHeaderButton>
          }
        >
          Запись
        </PanelHeader>
        <UiDiv>
          <div className={styles.header}>
            <div className={styles.icon} />
            <div className={styles.category}>Музеи</div>
            <div className={styles.source}>— Название СМИ</div>
          </div>
          <div className={styles.title}>
            Большой заголовок в 3 строки, осталось заполнить 2 строки, еще
            чуть-чуть... готово!
          </div>
          <div className={styles.description}>
            Тут просто много бесполезного текста, тут тоже много бесполезного
            текста, тут тоже много бесполезного текста, тут тоже много
            бесполезного текста, тут тоже много бесполезного текста, тут тоже
            много бесполезного текста, тут тоже много, Тут просто много
            бесполезного текста, тут тоже много бесполезного текста, тут тоже
            много бесполезного текста, тут тоже много бесполезного текста, тут
            тоже много бесполезного текста, тут тоже много бесполезного текста,
            тут тоже много
          </div>
        </UiDiv>
        <div className={styles.cover}></div>

        <UiDiv className={styles.footer}>
          <button className={styles.footerButton}>
            <Icon28FireOutline />
            <span>120</span>
          </button>
          <button className={styles.footerButton}>
            <Icon28ShareOutline />
          </button>
          <div className={styles.views}>13205 просмотров</div>
        </UiDiv>
      </div>
    </Panel>
  );
};
