import React, { useState } from 'react';
import styles from './News.module.scss';
import { View, PanelHeader, Panel, Spinner } from '@vkontakte/vkui';
import { NewsCard } from '../../components/NewsCard/NewsCard';
import { NewsDetail } from './panels/NewsDetail/NewsDetail';
import { useNewsList } from '../../hooks/useNewsList';

export const News = () => {
  const [activePanel, setActivePanel] = useState('main');
  const [activeId, setActiveId] = useState(null);
  const [popout, setPopout] = useState(null);
  const { data: newsList, isLoading } = useNewsList();
  return (
    <View activePanel={activePanel} popout={popout}>
      <Panel id="main">
        <div className={styles.root}>
          <PanelHeader>Новости</PanelHeader>
          {isLoading && <Spinner />}
          {newsList &&
            !isLoading &&
            newsList.map((newsPreview) => (
              <NewsCard
                key={`news-card-id-${newsPreview.id}`}
                {...newsPreview}
                className={styles.cell}
                onClick={() => {
                  setActivePanel('detail');
                  setActiveId(newsPreview.id);
                }}
              />
            ))}
        </div>
      </Panel>
      <NewsDetail
        id="detail"
        newsId={activeId}
        onBack={() => setActivePanel('main')}
      />
    </View>
  );
};
