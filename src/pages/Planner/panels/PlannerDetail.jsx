import React, { useState } from 'react';
import { Panel, PanelHeaderButton, Div } from '@vkontakte/vkui';
import styles from './PlannerDetail.module.scss';
import { Icon36ChevronLeftOutline } from '@vkontakte/icons';
import { MapContainer } from '../../../components/MapContainer';

export const PlannerDetail = ({
  onClickMap,
  onBack,
  city,
  categories,
  dateTo,
  dateFrom,
}) => {
  return (
    <Panel>
      <Div>
        <div className={styles.header}>
          <button className={styles.back} onClick={onBack}>
            <Icon36ChevronLeftOutline />
          </button>
          <div className={styles.city}>Москва</div>
          <div className={styles.dates}>27 марта — 2 апреля</div>
        </div>
      </Div>
      <div className={styles.map} onClick={onClickMap}>
        <MapContainer
          {...{ city, categories, dateTo, dateFrom }}
          height={170}
          mini={true}
        />
      </div>
      <div className={styles.days}></div>
    </Panel>
  );
};
