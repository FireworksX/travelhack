import React, { useState } from 'react';
import styles from './NewsDetail.module.scss';
import cn from 'classnames';
import {
  View,
  PanelHeader,
  Panel,
  PanelHeaderButton,
  FixedLayout,
  Div,
  ScreenSpinner,
} from '@vkontakte/vkui';
import { UiDiv } from '../../../../components/UiDiv/UiDiv';
import { useNewsObjectInfo } from '../../../../hooks/useNewsObjectInfo';
import {
  Icon24MoreHorizontal,
  Icon28FireOutline,
  Icon28ShareOutline,
  Icon36ChevronLeftOutline,
} from '@vkontakte/icons';
import { PlaceCardWide } from '../../../../components/PlaceCardWide/PlaceCardWide';

export const NewsDetail = ({ onBack, newsInfo, onSelect }) => {
  if (newsInfo == null) return null;
  return (
    <Panel>
      <div className={styles.root}>
        <PanelHeader
          left={
            <PanelHeaderButton onClick={onBack}>
              <Icon36ChevronLeftOutline />
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
          {newsInfo.content.map(
            (el) =>
              ({
                text: (
                  <div className={cn(styles.description, styles.cell)}>
                    {el.payload}
                  </div>
                ),
                image: (
                  <div className={cn(styles.cover, styles.cell)}>
                    <img src={el.payload} alt="" />
                  </div>
                ),
                location: (
                  <PlaceCardWide
                    className={styles.cell}
                    name={el.payload.name}
                    onClick={onSelect}
                  />
                ),
              }[el.type])
          )}
        </UiDiv>

        <Div />
        <Div />
        <Div />

        <FixedLayout vertical="bottom">
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
        </FixedLayout>
      </div>
    </Panel>
  );
};
