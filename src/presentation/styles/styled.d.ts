import 'styled-components'

interface TypographyTags {
  fontFamily?: string
  fontWeight?: number
  fontSize?: string
  lineHeight?: number
  letterSpacing?: string
}

interface PaletteColor {
  light?: string
  main: string
  dark?: string
}

declare module 'styled-components' {
  export interface DefaultTheme {
    type: string
    scaling: number
    palette: {
      background: {
        light: string
        dark: string
      }
      common: {
        black: string
        white: string
      }
      primary: PaletteColor
      secondary: PaletteColor
      grey: {
        [key: number | string]: string
      }
      text: {
        primary: string
        secondary: string
        disabled: string
      }
    }
    typography: {
      fontSize: number
      fontWeightLight: number
      fontWeightRegular: number
      fontWeightMedium: number
      fontWeightBold: number
      h1: TypographyTags
      h2: TypographyTags
      h3: TypographyTags
      h4: TypographyTags
      h5: TypographyTags
      h6: TypographyTags
      body: TypographyTags
      subtitle: TypographyTags
      caption: TypographyTags
    }
    breakpoints: {
      keys: string[]
      values: {
        xs: number
        sm: number
        md: number
        lg: number
        xl: number
      }
    }
    mixins: {
      spacing: (value: number) => string
    }
  }
}
