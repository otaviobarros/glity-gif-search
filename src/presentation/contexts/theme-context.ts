import { createContext } from 'react'
import { DefaultTheme } from 'styled-components'

export type ThemeContextProps = {
  toggleTheme: () => void
  theme: DefaultTheme
}

export default createContext<ThemeContextProps>(null)
