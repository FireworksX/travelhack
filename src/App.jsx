import React, { useState, useEffect } from 'react';
import bridge from '@vkontakte/vk-bridge';
import { AdaptivityProvider, AppRoot, Epic, Tabbar, TabbarItem, ScreenSpinner, View } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';

import Home from './panels/Home';
import Icon28NewsfeedOutline from "@vkontakte/icons/dist/28/newsfeed_outline";
import {observer} from "mobx-react";

const App = observer(() => {

	return (
		<AdaptivityProvider>
			<AppRoot>
				<Epic activeStory={activeStory} tabbar={!isDesktop &&
				<Tabbar>
					<TabbarItem
						onClick={onStoryChange}
						selected={activeStory === 'feed'}
						data-story="feed"
						text="Новости"
					><Icon28NewsfeedOutline /></TabbarItem>
					<TabbarItem
						onClick={onStoryChange}
						selected={activeStory === 'services'}
						data-story="services"
						text="Сервисы"
					><Icon28ServicesOutline/></TabbarItem>
					<TabbarItem
						onClick={onStoryChange}
						selected={activeStory === 'messages'}
						data-story="messages"
						label="12"
						text="Сообщения"
					><Icon28MessageOutline /></TabbarItem>
					<TabbarItem
						onClick={onStoryChange}
						selected={activeStory === 'clips'}
						data-story="clips"
						text="Клипы"
					><Icon28ClipOutline /></TabbarItem>
					<TabbarItem
						onClick={onStoryChange}
						selected={activeStory === 'profile'}
						data-story="profile"
						text="Профиль"
					><Icon28UserCircleOutline /></TabbarItem>
				</Tabbar>
				}>
					<View activePanel={activePanel} popout={popout}>
						<Home id='home' fetchedUser={fetchedUser} go={go} />
					</View>
				</Epic>
			</AppRoot>
		</AdaptivityProvider>
	);
})

export default App;

