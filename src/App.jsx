import React, {useContext, useState} from 'react';
import { AdaptivityProvider, AppRoot, Epic, Tabbar, TabbarItem, ScreenSpinner, View } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';

import {observer} from "mobx-react-lite";
import {News} from "./pages/News";
import {RootStore} from './stores/RootStore'
import {StoreContext} from './helpers/mobx-react'
import Icon28ClipOutline from "@vkontakte/icons/dist/28/clip_outline";
import Icon28UserCircleOutline from "@vkontakte/icons/dist/28/user_circle_outline";
import { Icon28LikeOutline, Icon28Newsfeed, Icon28AllCategoriesOutline } from '@vkontakte/icons';
const rootStore = new RootStore()
const App = observer(() => {
	const { navigation: {
		activeStory,
		setStory
	} } = useContext(StoreContext)

	return (
			<AdaptivityProvider>
				<AppRoot>
					<Epic activeStory={activeStory} tabbar={
					<Tabbar>
						<TabbarItem
							selected={activeStory === 'feed'}
							onClick={() => setStory('feed')}
						><Icon28Newsfeed /></TabbarItem>
						<TabbarItem
							selected={activeStory === 'favorites'}
							onClick={() => setStory('favorites')}
							data-story="services"
						><Icon28LikeOutline/></TabbarItem>
						<TabbarItem
							selected={activeStory === 'trip'}
							onClick={() => setStory('trip')}
						><Icon28AllCategoriesOutline /></TabbarItem>
						<TabbarItem
							selected={activeStory === 'notification'}
							onClick={() => setStory('notification')}
						><Icon28ClipOutline /></TabbarItem>
						<TabbarItem
							selected={activeStory === 'profile'}
							onClick={() => setStory('profile')}
						><Icon28UserCircleOutline /></TabbarItem>
					</Tabbar>
					}>
						<News id='feed'/>
					</Epic>
				</AppRoot>
			</AdaptivityProvider>
	);
})

export default () =>  <StoreContext.Provider value={rootStore}><App/></StoreContext.Provider>;

