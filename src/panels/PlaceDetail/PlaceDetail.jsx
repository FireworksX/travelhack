import React from 'react';
import styles from './PlaceDetail.module.scss';
import { Cell, Group, Header, Panel, Div } from '@vkontakte/vkui';
import { UiDiv } from '../../components/UiDiv/UiDiv';
import {
  Icon24DismissDark,
  Icon28CheckShieldOutline,
  Icon28CancelShieldOutline,
  Icon28TextLiveOutline,
} from '@vkontakte/icons';

export const PlaceDetail = ({ onBack }) => {
  return (
    <Panel>
      <div className={styles.gallery}></div>
      <div className={styles.content}>
        <button className={styles.close} onClick={onBack}>
          <Icon24DismissDark />
        </button>
        <UiDiv>
          <div className={styles.title}>
            Выставка Достижений Народного Хозяйства
          </div>
          <div className={styles.description}>
            Достопримечательность, Выставочный центр
          </div>
        </UiDiv>
        <Cell indicator="10" expandable before={<Icon28CheckShieldOutline />}>
          Включено
        </Cell>
        <Cell indicator="3" expandable before={<Icon28CancelShieldOutline />}>
          Не включено
        </Cell>
        <Cell indicator="Русский" before={<Icon28TextLiveOutline />}>
          Язык
        </Cell>
        <Group header={<Header>Описание</Header>}>
          <Div>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda
            cum doloremque eos ex explicabo fuga incidunt iure magni, minus
            natus necessitatibus nisi omnis quo quos rem rerum, sequi vero
            vitae.
          </Div>
        </Group>
      </div>
    </Panel>
  );
};
