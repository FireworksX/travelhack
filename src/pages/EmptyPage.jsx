import React, { useContext } from 'react';
import { Placeholder, Button, View } from '@vkontakte/vkui';
import { Icon56Stars3Outline } from '@vkontakte/icons';
import { StoreContext } from '../helpers/mobx-react';

export const EmptyPage = () => {
  const {
    navigation: { setStory },
  } = useContext(StoreContext);
  return (
    <View>
      <Placeholder
        icon={<Icon56Stars3Outline />}
        action={
          <Button size="m" mode="tertiary" onClick={() => setStory('planner')}>
            Ну что ж, пойду на главную
          </Button>
        }
        stretched
      >
        Раздел в разботке
        <br />
        но мы над ним не работаем
      </Placeholder>
    </View>
  );
};
