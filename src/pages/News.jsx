import React from 'react'
import {View, PanelHeader, Panel} from "@vkontakte/vkui";
import {NewsCard} from "../components/NewsCard/NewsCard";
import {useNewsList} from '../hooks/useNewsList'
export const News = () => {
    const activePanel = 'main'
    const {data:newsList} = useNewsList()
    return <View activePanel={activePanel}>
        <Panel id='main'>
            <PanelHeader>News</PanelHeader>
            {newsList?.map((newsObj) => <NewsCard key={`news-card-id${newsObj.id}`} {...newsObj}/>)}
        </Panel>
    </View>
}

