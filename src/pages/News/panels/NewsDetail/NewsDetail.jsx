import React, { useState } from 'react';
import styles from './NewsDetail.module.scss';
import {
  View,
  PanelHeader,
  Panel,
  PanelHeaderButton,
  FixedLayout,
  Spinner,
} from '@vkontakte/vkui';
import { UiDiv } from '../../../../components/UiDiv/UiDiv';
import { useNewsObjectInfo } from '../../../../hooks/useNewsObjectInfo';
import {
  Icon24MoreHorizontal,
  Icon28FireOutline,
  Icon28ShareOutline,
  Icon36ChevronLeftOutline,
} from '@vkontakte/icons';

export const NewsDetail = ({ onBack, newsId }) => {
  const { data: newsInfo, isLoading } = useNewsObjectInfo({ id: newsId });

  return isLoading ? (
    <Spinner />
  ) : newsInfo ? (
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
            <div className={styles.category}>
              {newsInfo.preview.category.name}
            </div>
            <div className={styles.source}>— {newsInfo.preview.sourceName}</div>
          </div>
          <div className={styles.title}>{newsInfo.preview.title}</div>
          <div className={styles.description}>
            {newsInfo.preview.description}
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
  ) : null;
};
