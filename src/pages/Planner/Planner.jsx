import React, { useState } from 'react';
import cn from 'classnames';
import styles from './Planner.module.scss';
import {
  View,
  PanelHeader,
  ModalRoot,
  Panel,
  Div,
  HorizontalScroll,
  ModalPage,
  ModalPageHeader,
  Search,
  Cell,
} from '@vkontakte/vkui';
import { enGB } from 'date-fns/locale';
import { UiDiv } from '../../components/UiDiv/UiDiv';
import { DatePickerCalendar } from 'react-nice-dates';
import 'react-nice-dates/build/style.css';
import {
  Icon24PlaceOutline,
  Icon24LocationOutline,
  Icon24CalendarOutline,
} from '@vkontakte/icons';
import { PlaceCard } from '../../components/PlaceCard/PlaceCard';
import driver from '../../img/driver.svg';
import carSedan from '../../img/carSedan.png';
import carJeep from '../../img/carJeep.png';
import { CarCard } from '../../components/CarCard/CarCard';

export const Planner = () => {
  const [activePanel, setActivePanel] = useState('main');
  const [activeModal, setActiveModal] = useState(null);

  const modalRoot = (
    <ModalRoot activeModal={activeModal}>
      <ModalPage id="cities" onClose={() => setActiveModal(null)}>
        <ModalPageHeader>Города</ModalPageHeader>
        <Search />
        <Cell>Сочи</Cell>
      </ModalPage>
      <ModalPage id="dateFrom" onClose={() => setActiveModal(null)}>
        <div className={styles.calendarWrapper}>
          <ModalPageHeader>Дата начала</ModalPageHeader>
          <DatePickerCalendar date={new Date()} locale={enGB} />
        </div>
      </ModalPage>
      <ModalPage id="dateTo" onClose={() => setActiveModal(null)}>
        <div className={styles.calendarWrapper}>
          <ModalPageHeader>Дата окончания</ModalPageHeader>
          <DatePickerCalendar date={new Date()} locale={enGB} />
        </div>
      </ModalPage>
    </ModalRoot>
  );

  return (
    <View activePanel={activePanel} modal={modalRoot}>
      <Panel id="main">
        <div className={styles.root}>
          <div className={styles.header}>
            <UiDiv>
              <div className={styles.headerTitle}>
                Планируйте туры <br /> по России
              </div>
              <button
                className={styles.location}
                onClick={() => setActiveModal('cities')}
              >
                <span className={styles.sideIcon}>
                  <Icon24PlaceOutline />
                </span>
                Москва
                <button className={styles.afterIcon}>
                  <Icon24LocationOutline />
                </button>
              </button>
              <div className={styles.headerDates}>
                <button
                  className={styles.date}
                  onClick={() => setActiveModal('dateFrom')}
                >
                  <span className={styles.sideIcon}>
                    <Icon24CalendarOutline />
                  </span>
                  Начало
                </button>

                <button className={styles.date}>
                  <span className={styles.sideIcon}>
                    <Icon24CalendarOutline />
                  </span>
                  Конец
                </button>
              </div>
              <HorizontalScroll>
                <div className={styles.cats}>
                  <button className={styles.categoryCell}>Места</button>
                  <button
                    className={cn(
                      styles.categoryCell,
                      styles.categoryCellActive
                    )}
                  >
                    Маршруты
                  </button>
                  <button className={styles.categoryCell}>Новости</button>
                  <button className={styles.categoryCell}>Места</button>
                  <button className={styles.categoryCell}>Места</button>
                  <button className={styles.categoryCell}>Места</button>
                </div>
              </HorizontalScroll>
              <button className={styles.submit}>Построить маршрут</button>
            </UiDiv>
          </div>
          <div className={styles.group}>
            <div className={styles.groupHeader}>Куда пойти</div>
            <HorizontalScroll>
              <div className={styles.scroll}>
                <PlaceCard className={styles.scrollCell} />
                <PlaceCard className={styles.scrollCell} />
                <PlaceCard className={styles.scrollCell} />
              </div>
            </HorizontalScroll>
          </div>
          <div className={styles.group}>
            <div className={styles.groupHeader}>Заберем вас</div>
            <Div>
              <div className={styles.transfer}>
                <div className={styles.transferName}>
                  Закажите трансфер <br /> из аэропорта
                </div>
                <div className={styles.transferButton}>Заказать</div>
                <img src={driver} className={styles.transferImage} />
              </div>
            </Div>
          </div>
          <div className={styles.group}>
            <div className={styles.groupHeader}>Куда пойти</div>
            <HorizontalScroll>
              <div className={styles.scroll}>
                <CarCard cover={carSedan} className={styles.carCell} />
                <CarCard cover={carJeep} className={styles.carCell} />
                <CarCard cover={carSedan} className={styles.carCell} />
              </div>
            </HorizontalScroll>
          </div>
        </div>
      </Panel>
    </View>
  );
};
