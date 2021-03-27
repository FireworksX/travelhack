import React from 'react'
import styles from './UiDiv.module.scss'
import cn from 'classnames'
import {Div} from "@vkontakte/vkui";

export const UiDiv = ({className, children}) => {
    return <Div className={cn(styles.root, className)}>{children}</Div>
}
