import styledAny, { CreateStyled } from '@emotion/styled';
import { ThemeProvider as AnyThemeProvider, ThemeProviderProps } from 'emotion-theming';
import React from 'react';

export const theme = {
  color: {},
  fonts: {}
};

type Theme = typeof theme;

export type ThemeProps = {
  theme: Theme;
};

const styled: CreateStyled<Theme> = styledAny;

export const ThemeProvider = AnyThemeProvider as React.FC<ThemeProviderProps<Theme>>;

export default styled;
