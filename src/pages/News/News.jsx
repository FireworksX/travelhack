import React, { useState } from 'react';
import styles from './News.module.scss';
import { View, PanelHeader, Panel } from '@vkontakte/vkui';
import { NewsCard } from '../../components/NewsCard/NewsCard';
import { NewsDetail } from './panels/NewsDetail/NewsDetail';

export const News = () => {
  const [activePanel, setActivePanel] = useState('main');
  const [popout, setPopout] = useState(null);

  return (
    <View activePanel={activePanel} popout={popout}>
      <Panel id="main">
        <div className={styles.root}>
          <PanelHeader>Новости</PanelHeader>
          <NewsCard
            className={styles.cell}
            onClick={() => setActivePanel('detail')}
          />
          <NewsCard
            className={styles.cell}
            onClick={() => setActivePanel('detail')}
          />
        </div>
      </Panel>
      <NewsDetail id="detail" onBack={() => setActivePanel('main')} />
    </View>
  );
};
