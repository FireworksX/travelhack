import React from 'react';
import { ModalCard } from '@vkontakte/vkui';
import { Icon56Stars3Outline } from '@vkontakte/icons';

export const DevelopingModal = ({ onClick }) => {
  return (
    <ModalCard
      actions={[
        {
          size: 'l',
          mode: 'primary',
          title: 'Зайду в другой раз',
          action: onClick,
        },
      ]}
    >
      <template slot="icon">
        <Icon56Stars3Outline />
      </template>
      <template slot="header">Раздел в разработке</template>
      <template slot="caption">
        Благодарим вас за интерес. В данный момент ведутся технические работы.
      </template>
    </ModalCard>
  );
};
