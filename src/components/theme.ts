import styledAny, { CreateStyled } from 'react-emotion';
import { ThemeProvider as AnyThemeProvider, ThemeProviderComponent } from 'emotion-theming';

export const theme = {
  color: {},
  fonts: {},
};

type Theme = typeof theme;

export type ThemeProps = {
  theme: Theme;
};

const styled: CreateStyled<Theme> = styledAny;

export const ThemeProvider = AnyThemeProvider as ThemeProviderComponent<Theme>;

export default styled;
