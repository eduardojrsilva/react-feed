import 'styled-components';

declare module 'styled-components' {
  interface Colors {
    white: string;
    gray100: string;
    gray300: string;
    gray400: string;
    gray600: string;
    gray700: string;
    gray800: string;
    gray900: string;

    green300: string;
    green500: string;
    green600: string;
    green700: string;

    red500: string;
  }

  interface Fonts {
    roboto: string;
  }

  export interface DefaultTheme {
    colors: Colors;
    fonts: Fonts;
  }
}
