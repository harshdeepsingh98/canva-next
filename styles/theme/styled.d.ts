import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string;
      secondary: string;
      accent: string;
      background: string;
      footerBackground: string;
      headerBackground: string;
      sidebarBackground: string;
      textPrimary: string;
      textSecondary: string;
      textLight: string;
      borderPrimary: string;
      borderSecondary: string;
      success: string;
      warning: string;
      danger: string;
      hoverPrimary: string;
      activePrimary: string;
      disabled: string;
    };
  }
}