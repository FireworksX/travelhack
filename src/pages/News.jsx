import React from 'react'
import {View, PanelHeader, Panel} from "@vkontakte/vkui";

export const News = () => {
    const activePanel = 'main'
    return <View activePanel={activePanel}>
        <Panel id='main'>
            <PanelHeader>News</PanelHeader>
        </Panel>
    </View>
}

