import React, { useRef, useState } from 'react';
import { Panel, PanelHeaderButton, Div } from '@vkontakte/vkui';
import styles from './PlannerDetail.module.scss';
import { Icon36ChevronLeftOutline } from '@vkontakte/icons';
import { PlaceCardWide } from '../../../components/PlaceCardWide/PlaceCardWide';

const EmptyCell = () => {
  return (
    <div className={styles.emptyCell}>
      <div className={styles.emptyCellLabel}>Перерыв</div>
      <div className={styles.emptyCellDesc}>15:00-15:30</div>
    </div>
  );
};

export const PlannerDetail = ({ onClickMap, onGoLocation }) => {
  return (
    <Panel>
      <Div>
        <div className={styles.header}>
          <button className={styles.back}>
            <Icon36ChevronLeftOutline />
          </button>
          <div className={styles.city}>Москва</div>
          <div className={styles.dates}>27 марта — 2 апреля</div>
        </div>
      </Div>
      <div className={styles.map} onClick={onClickMap}></div>
      <Div>
        <div className={styles.days}>
          <div className={styles.day}>
            <div className={styles.dayHeader}>27 марта</div>
            <div className={styles.dayCell}>
              <PlaceCardWide onClick={onGoLocation} />
            </div>
            <div className={styles.dayCell}>
              <EmptyCell />
            </div>
          </div>
        </div>
      </Div>
    </Panel>
  );
};
