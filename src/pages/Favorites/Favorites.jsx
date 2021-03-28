import React, { useState } from 'react';
import cn from 'classnames';
import styles from './Favorites.module.scss';
import { View, PanelHeader, Panel, PanelHeaderButton } from '@vkontakte/vkui';
import 'react-nice-dates/build/style.css';
import { PlaceCard } from '../../components/PlaceCard/PlaceCard';
import { Div } from '@vkontakte/vkui';

export const Favorites = () => {
  const [activePanel, setActivePanel] = useState('main');

  return (
    <View activePanel={activePanel}>
      <Panel id="main">
        <PanelHeader>Избранное</PanelHeader>
        <Div className={styles.head}>
          <button className={cn(styles.category, styles.categoryActive)}>
            Места
          </button>
          <button className={styles.category}>Маршруты</button>
          <button className={styles.category}>Новости</button>
        </Div>
        <Div className={styles.grid}>
          <PlaceCard />
          <PlaceCard />
          <PlaceCard />
          <PlaceCard />
          <PlaceCard />
          <PlaceCard />
        </Div>
      </Panel>
    </View>
  );
};
