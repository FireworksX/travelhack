import React, { useEffect, useState } from 'react';
import styles from './News.module.scss';
import { View, PanelHeader, Panel, ScreenSpinner } from '@vkontakte/vkui';
import { NewsCard } from '../../components/NewsCard/NewsCard';
import { NewsDetail } from './panels/NewsDetail/NewsDetail';
import { useNewsList } from '../../hooks/useNewsList';
import { useNewsObjectInfo } from '../../hooks/useNewsObjectInfo';
import { PlaceDetail } from '../../panels/PlaceDetail/PlaceDetail';

export const News = () => {
  const [activePanel, setActivePanel] = useState('main');
  const [activeId, setActiveId] = useState(null);
  const [popout, setPopout] = useState(null);
  const [pause, setPause] = useState(true);
  useEffect(() => {
    setPause(activeId === null);
  }, [activeId]);
  const { data: newsList, isLoading } = useNewsList();
  const { data: newsInfo, isLoading: isLoadingDetails } = useNewsObjectInfo({
    id: activeId,
    pause,
  });
  useEffect(() => {
    if (!isLoadingDetails && newsInfo && activeId !== null) {
      setActivePanel('detail');
    }
  }, [newsInfo]);
  return (
    <View activePanel={activePanel} popout={popout}>
      <Panel id="main">
        <div className={styles.root}>
          <PanelHeader>Новости</PanelHeader>
          {isLoading && <ScreenSpinner />}
          {newsList &&
            !isLoading &&
            newsList.map((newsPreview) => (
              <NewsCard
                key={`news-card-id-${newsPreview.id}`}
                {...newsPreview}
                className={styles.cell}
                onClick={() => {
                  // setActivePanel('detail');
                  setActiveId(newsPreview.id);
                }}
              />
            ))}
        </div>
      </Panel>
      <NewsDetail
        id="detail"
        newsId={activeId}
        newsInfo={newsInfo}
        onBack={() => {
          setActivePanel('main');
          setActiveId(null);
        }}
        onSelect={() => {
          setActivePanel('placeDetail');
          setActiveId(null);
        }}
      />
      <PlaceDetail id="placeDetail" />
    </View>
  );
};
