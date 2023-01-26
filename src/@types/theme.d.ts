import 'styled-components';
import { THEME_DEFAULT } from '@styles/index';

type ThemeType = typeof THEME_DEFAULT;

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}
