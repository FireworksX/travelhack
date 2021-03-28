import React, { useEffect, useReducer, useState } from 'react';
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
import { useCities } from '../../hooks/useCities';
import { plannerReducer } from './plannerReducer';
import { format } from 'date-fns';
import { useCategoriesByCityName } from '../../hooks/useCategoriesByCityName';
import { useReducerWithLogger } from '../../hooks/useReducerWithLogger';
import { PlannerDetail } from './panels/PlannerDetail';
import { PlaceDetail } from '../../panels/PlaceDetail/PlaceDetail';
import { MapContainer } from '../../components/MapContainer';
export const Planner = () => {
  const [activePanel, setActivePanel] = useState('main');
  const [activeModal, setActiveModal] = useState(null);
  const [{ city, categories, dateTo, dateFrom }, dispatch] = useReducer(
    useReducerWithLogger(plannerReducer),
    {
      city: 'Москва',
      categories: null,
      dateTo: null,
      dateFrom: null,
    }
  );
  const cities = useCities();
  const {
    data: categoriesLabels,
    isFetching: isCategoriesFetching,
  } = useCategoriesByCityName({ cityName: city });
  useEffect(() => {
    if (!isCategoriesFetching && categoriesLabels)
      dispatch({
        type: 'set-categories',
        payload: categoriesLabels.map((c) => ({ ...c, chosen: false })),
      });
  }, [categoriesLabels, isCategoriesFetching]);
  useEffect(() => dispatch({ type: 'set-cities', payload: cities }), [cities]);
  const modalRoot = (
    <ModalRoot activeModal={activeModal}>
      <ModalPage id="cities" onClose={() => setActiveModal(null)}>
        <ModalPageHeader>Города</ModalPageHeader>
        <Search />
        {cities
          .filter((_city) => _city !== city)
          .map((_city) => (
            <Cell
              onClick={() => {
                dispatch({ type: 'set-city', payload: _city });
                setActiveModal(null);
              }}
              key={`city-${_city}`}
            >
              {_city}
            </Cell>
          ))}
      </ModalPage>
      <ModalPage id="dateFrom" onClose={() => setActiveModal(null)}>
        <div className={styles.calendarWrapper}>
          <ModalPageHeader>Дата начала</ModalPageHeader>
          <Div>
            <DatePickerCalendar
              date={dateFrom || new Date()}
              onDateChange={(date) => {
                dispatch({ type: 'set-dateFrom', payload: date });
                setActiveModal('dateTo');
              }}
              locale={enGB}
            />
          </Div>
        </div>
      </ModalPage>
      <ModalPage id="dateTo" onClose={() => setActiveModal(null)}>
        <div className={styles.calendarWrapper}>
          <ModalPageHeader>Дата окончания</ModalPageHeader>
          <Div>
            <DatePickerCalendar
              date={dateTo || new Date()}
              locale={enGB}
              onDateChange={(date) => {
                dispatch({ type: 'set-dateTo', payload: date });
                setActiveModal(null);
              }}
            />
          </Div>
        </div>
      </ModalPage>
      <ModalPage id="map" onClose={() => setActiveModal(null)}>
        <ModalPageHeader>Карта</ModalPageHeader>
        <div style={{ height: 400 }}>
          <MapContainer {...{ city, categories, dateTo, dateFrom }} />
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
                {city}
                <button type="button" className={styles.afterIcon}>
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
                  {(dateFrom && format(dateFrom, 'dd.MM.yyyy')) || 'Туда'}
                </button>

                <button
                  className={styles.date}
                  onClick={() => setActiveModal('dateTo')}
                >
                  <span className={styles.sideIcon}>
                    <Icon24CalendarOutline />
                  </span>
                  {(dateTo && format(dateTo, 'dd.MM.yyyy')) || 'Обратно'}
                </button>
              </div>
              <HorizontalScroll>
                <div className={styles.cats}>
                  {categories?.map(({ name, id, chosen }) => (
                    <button
                      key={`category-id-${id}`}
                      className={cn(styles.categoryCell, {
                        [styles.categoryCellActive]: chosen,
                      })}
                      onClick={() =>
                        dispatch({
                          type: 'set-categories',
                          payload: categories.map(
                            ({ id: _id, name, chosen }) => ({
                              id: _id,
                              name,
                              chosen: _id === id ? !chosen : chosen,
                            })
                          ),
                        })
                      }
                    >
                      {name}
                    </button>
                  ))}
                </div>
              </HorizontalScroll>
              <button
                className={styles.submit}
                onClick={() => setActivePanel('detail')}
              >
                Построить маршрут
              </button>
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
      <PlannerDetail
        id="detail"
        onClickMap={() => setActiveModal('map')}
        onBack={() => setActivePanel('main')}
        onGoLocation={() => setActivePanel('placeDetail')}
        {...{ city, categories, dateTo, dateFrom }}
      />
      <PlaceDetail id="placeDetail" onBack={() => setActivePanel('detail')} />
    </View>
  );
};
