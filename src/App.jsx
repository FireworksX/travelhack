import React, {useState} from 'react';
import { AdaptivityProvider, AppRoot, Epic, Tabbar, TabbarItem, ScreenSpinner, View } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';

import {observer} from "mobx-react-lite";
import {News} from "./pages/News";
import Icon28ClipOutline from "@vkontakte/icons/dist/28/clip_outline";
import Icon28UserCircleOutline from "@vkontakte/icons/dist/28/user_circle_outline";
import { Icon28LikeOutline, Icon28Newsfeed, Icon28AllCategoriesOutline } from '@vkontakte/icons';

const App = observer(() => {
	const rootStore = new RootStore()
	const [activeStory, setActiveStory] = useState('feed')

	const changeStory = (value) => {
		setActiveStory(value)
	}

	return (
		<StoreContext.Provider value={rootStore}>
			<AdaptivityProvider>
				<AppRoot>
					<Epic activeStory={activeStory} tabbar={
					<Tabbar>
						<TabbarItem
							selected={activeStory === 'feed'}
							onClick={() => changeStory('feed')}
						><Icon28Newsfeed /></TabbarItem>
						<TabbarItem
							selected={activeStory === 'favorites'}
							onClick={() => changeStory('favorites')}
							data-story="services"
						><Icon28LikeOutline/></TabbarItem>
						<TabbarItem
							selected={activeStory === 'trip'}
							onClick={() => changeStory('trip')}
						><Icon28AllCategoriesOutline /></TabbarItem>
						<TabbarItem
							selected={activeStory === 'notification'}
							onClick={() => changeStory('notification')}
						><Icon28ClipOutline /></TabbarItem>
						<TabbarItem
							selected={activeStory === 'profile'}
							onClick={() => changeStory('profile')}
						><Icon28UserCircleOutline /></TabbarItem>
					</Tabbar>
					}>
						<News id='feed'/>
					</Epic>
				</AppRoot>
			</AdaptivityProvider>
		</StoreContext.Provider>
	);
})

export default App;

