import { useContext } from 'react'
import { ThemeContext } from '../contexts'
import { ThemeContextProps } from '../contexts/theme-context'

export const useTheme = (): ThemeContextProps => {
  const themeContext = useContext(ThemeContext)

  if (!themeContext) {
    throw new Error(
      'useTheme must be within a ThemeContext to be used correctly'
    )
  }

  return themeContext
}
