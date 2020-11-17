import { ThemeProvider } from '@emotion/react';

declare module '@emotion/react' {
  export interface Theme {
    color: {};
    fonts: {};
  }
}

export { ThemeProvider };
