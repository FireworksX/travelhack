import React from 'react'
import {View, PanelHeader, Panel} from "@vkontakte/vkui";
import {NewsCard} from "../components/NewsCard/NewsCard";

export const News = () => {
    const activePanel = 'main'
    return <View activePanel={activePanel}>
        <Panel id='main'>
            <PanelHeader>News</PanelHeader>
            <NewsCard/>
        </Panel>
    </View>
}

