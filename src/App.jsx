import React, { useContext, useEffect, useState } from 'react';
import cn from 'classnames';
import {
  AdaptivityProvider,
  AppRoot,
  Epic,
  Tabbar,
  TabbarItem,
  ScreenSpinner,
  View,
} from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';
import styles from './App.module.scss';
import './UiOverride.scss';

import { observer } from 'mobx-react-lite';
import { News } from './pages/News/News';
import { RootStore } from './stores/RootStore';
import { StoreContext } from './helpers/mobx-react';
import Icon28UserCircleOutline from '@vkontakte/icons/dist/28/user_circle_outline';
import { Onboarding } from './pages/Onboarding/Onboarding';
import {
  Icon28LikeOutline,
  Icon28Newsfeed,
  Icon28AddCircleOutline,
  Icon28Notifications,
} from '@vkontakte/icons';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query';
import { Planner } from './pages/Planner/Planner';
import { Favorites } from './pages/Favorites/Favorites';
import { EmptyPage } from './pages/EmptyPage';
const queryClient = new QueryClient();
const rootStore = new RootStore();

const App = observer(() => {
  const {
    navigation: { activeStory, setStory },
  } = useContext(StoreContext);

  const hiddenTabbar = activeStory === 'onBoarding';

  return (
    <AdaptivityProvider>
      <AppRoot>
        <Epic
          activeStory={activeStory}
          tabbar={
            <Tabbar
              className={cn(styles.tabbar, {
                [styles.hidden]: hiddenTabbar,
              })}
            >
              <TabbarItem
                selected={activeStory === 'feed'}
                text="Новости"
                onClick={() => setStory('feed')}
              >
                <Icon28Newsfeed />
              </TabbarItem>
              <TabbarItem
                selected={activeStory === 'favorites'}
                text="Избранное"
                onClick={() => setStory('favorites')}
              >
                <Icon28LikeOutline />
              </TabbarItem>
              <TabbarItem
                selected={activeStory === 'planner'}
                text="Планер"
                onClick={() => setStory('planner')}
              >
                <Icon28AddCircleOutline />
              </TabbarItem>
              <TabbarItem
                selected={activeStory === 'notification'}
                onClick={() => setStory('notification')}
                text="Уведомления"
              >
                <Icon28Notifications />
              </TabbarItem>
              <TabbarItem
                selected={activeStory === 'profile'}
                text="Профиль"
                onClick={() => setStory('profile')}
              >
                <Icon28UserCircleOutline />
              </TabbarItem>
            </Tabbar>
          }
        >
          <Onboarding id="onBoarding" />
          <News id="feed" />
          <Planner id="planner" />
          <EmptyPage id="notification" />
          <EmptyPage id="profile" />
        </Epic>
      </AppRoot>
    </AdaptivityProvider>
  );
});

export default () => (
  <QueryClientProvider client={queryClient}>
    <StoreContext.Provider value={rootStore}>
      <App />
    </StoreContext.Provider>
  </QueryClientProvider>
);
