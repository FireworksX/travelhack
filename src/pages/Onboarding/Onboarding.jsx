import React from 'react'
import styles from './Onboarding.module.scss'
import {View, Panel, Spinner} from "@vkontakte/vkui"
import logo from './../../img/plannerLogo.svg'

export const Onboarding = () => {

    return <View activePanel='main'>
        <Panel id='main'>
            <div className={styles.root}>
                <div>

                <img src={logo} alt=""/>
                <Spinner/>
                </div>

            </div>
        </Panel>
    </View>
}
