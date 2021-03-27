import React, { useState } from 'react';
import styles from './Planner.module.scss';
import { View, PanelHeader, Panel } from '@vkontakte/vkui';

export const Planner = () => {
  const [activePanel, setActivePanel] = useState('main');

  return (
    <View activePanel={activePanel}>
      <Panel id="main">
        <div className={styles.root}>
          <div className={styles.header}>
            <div className={styles.headerTitle}>Планируйте туры по России</div>
          </div>
        </div>
      </Panel>
    </View>
  );
};
