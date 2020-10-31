import { DefaultTheme } from 'styled-components'
import { spacing } from './mixins'

export const defaultTheme: DefaultTheme = {
  type: 'light',
  scaling: 8,
  palette: {
    background: {
      light: '#fff',
      dark: '#212121'
    },
    common: {
      black: '#000',
      white: '#fff'
    },
    primary: {
      main: '#003973'
    },
    secondary: {
      main: '#8a25b1'
    },
    grey: {
      50: '#fafafa',
      100: '#f5f5f5',
      200: '#eeeeee',
      300: '#e0e0e0',
      400: '#bdbdbd',
      500: '#9e9e9e',
      600: '#757575',
      700: '#616161',
      800: '#424242',
      900: '#212121',
      A100: '#d5d5d5',
      A200: '#aaaaaa',
      A400: '#303030',
      A700: '#616161'
    },
    text: {
      primary: 'rgba(0, 0, 0, 0.87)',
      secondary: 'rgba(0, 0, 0, 0.54)',
      disabled: 'rgba(0, 0, 0, 0.38)'
    }
  },
  typography: {
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
    h1: {
      fontSize: '2.5rem'
    },
    h2: {},
    h3: {
      fontSize: '1.25rem'
    },
    h4: {},
    h5: {},
    h6: {},
    body: {},
    subtitle: {},
    caption: {}
  },
  breakpoints: {
    keys: ['xs', 'sm', 'md', 'lg', 'xl'],
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920
    }
  },
  mixins: {
    spacing: (value: number): string =>
      `${spacing(value, defaultTheme.scaling)}px`
  }
}
