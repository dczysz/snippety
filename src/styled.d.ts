import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    sidebarWidth: number;
    br: string;
    white: string;
    gray: string;
    lightGray: string;
    lighterGray: string;
    lightestGray: string;
    danger: string;
    titleBarHeight: string;
    bs: string;
  }
}
