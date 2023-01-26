import React from 'react';
import * as Styles from './styles';

import { LogoComponent, MiniCartComponent } from '@components/index';

export function HeaderComponent() {
  return (
    <Styles.Header>
      <Styles.Container>
        <LogoComponent />
        <MiniCartComponent />
      </Styles.Container>
    </Styles.Header>
  );
}
