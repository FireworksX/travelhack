import React, {useContext, useEffect, useState} from 'react';
import cn from 'classnames'
import { AdaptivityProvider, AppRoot, Epic, Tabbar, TabbarItem, ScreenSpinner, View } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';
import styles from './App.module.scss'


import {observer} from "mobx-react-lite";
import {News} from "./pages/News";
import {RootStore} from './stores/RootStore'
import {StoreContext} from './helpers/mobx-react'
import Icon28ClipOutline from "@vkontakte/icons/dist/28/clip_outline";
import Icon28UserCircleOutline from "@vkontakte/icons/dist/28/user_circle_outline";
import {Onboarding} from "./pages/Onboarding/Onboarding";
import { Icon28LikeOutline, Icon28Newsfeed, Icon28AllCategoriesOutline } from '@vkontakte/icons';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'
const queryClient = new QueryClient()
const rootStore = new RootStore()


const App = observer(() => {
	const { navigation: {
		activeStory,
		setStory
	} } = useContext(StoreContext)

	const hiddenTabbar = activeStory === 'onBoarding'

	useEffect(() => {
		setTimeout(() => {
			setStory('feed')
		}, 200)
	}, [])


	return (
			<AdaptivityProvider>
				<AppRoot>
					<Epic activeStory={activeStory} tabbar={
					<Tabbar className={cn(styles.tabbar, {
						[styles.hidden]: hiddenTabbar
					})}>
						<TabbarItem
							selected={activeStory === 'feed'}
							text='Новости'
							onClick={() => setStory('feed')}
						><Icon28Newsfeed /></TabbarItem>
						<TabbarItem
							selected={activeStory === 'favorites'}
							text='Избранное'
							onClick={() => setStory('favorites')}
						><Icon28LikeOutline/></TabbarItem>
						<TabbarItem
							selected={activeStory === 'trip'}
							text='Планер'
							onClick={() => setStory('trip')}
						><Icon28AddCircleOutline /></TabbarItem>
						<TabbarItem
							selected={activeStory === 'notification'}
							onClick={() => setStory('notification')}
							text='Уведомления'
						><Icon28Notifications /></TabbarItem>
						<TabbarItem
							selected={activeStory === 'profile'}
							text='Профиль'
							onClick={() => setStory('profile')}
						><Icon28UserCircleOutline /></TabbarItem>
					</Tabbar>
					}>
						<Onboarding id='onBoarding'/>
						<News id='feed'/>
					</Epic>
				</AppRoot>
			</AdaptivityProvider>
	);
})

export default () =>  (
	<QueryClientProvider client={queryClient}>
		<StoreContext.Provider value={rootStore}>
			<App/>
		</StoreContext.Provider>
	</QueryClientProvider>
	);

