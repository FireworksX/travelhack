import React, { useRef, useState } from 'react';
import { Panel, PanelHeaderButton, Div } from '@vkontakte/vkui';
import styles from './PlannerDetail.module.scss';
import { Icon36ChevronLeftOutline } from '@vkontakte/icons';
import { PlaceCardWide } from '../../../components/PlaceCardWide/PlaceCardWide';
import { MapContainer } from '../../../components/MapContainer';
import { usePlannerList } from '../../../hooks/usePlannerList';
import { format } from 'date-fns';
const EmptyCell = () => {
  return (
    <div className={styles.emptyCell}>
      <div className={styles.emptyCellLabel}>Перерыв</div>
      <div className={styles.emptyCellDesc}>15:00-15:30</div>
    </div>
  );
};

export const PlannerDetail = ({
  onClickMap,
  onGoLocation,
  onBack,
  city,
  categories,
  dateTo,
  dateFrom,
}) => {
  // -> usePlannerList <-
  const { data, isLoading } = usePlannerList({
    city,
    categories,
    dateTo,
    dateFrom,
  });

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
        <MapContainer data={data} height={170} mini={true} />
      </div>
      <Div>
        <div className={styles.days}>
          {data?.map((el) => (
            <div className={styles.day}>
              <div className={styles.dayHeader}>{el.date}</div>
              {el.blocks.map((block) => (
                <div className={styles.dayCell}>
                  <PlaceCardWide
                    name={block.block.name}
                    cover={block.block.image}
                    onClick={onGoLocation}
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </Div>
    </Panel>
  );
};
