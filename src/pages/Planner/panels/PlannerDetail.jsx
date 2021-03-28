import React, { useState } from 'react';
import { Panel, PanelHeaderButton, Div } from '@vkontakte/vkui';
import styles from './PlannerDetail.module.scss';
import { Icon36ChevronLeftOutline } from '@vkontakte/icons';

export const PlannerDetail = ({ onClickMap }) => {
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
      <div className={styles.days}></div>
    </Panel>
  );
};
