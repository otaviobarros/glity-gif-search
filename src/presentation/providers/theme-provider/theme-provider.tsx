import { ThemeProvider as StyledThemeProvider } from 'styled-components'
import { ThemeContext } from '@/src/presentation/contexts'
import { usePersistedState } from '@/src/presentation/hooks'
import { lightTheme, darkTheme } from '@/src/presentation/styles/themes'
import { useEffect, useState } from 'react'

const ThemeProvider: React.FC = ({ children }) => {
  const [type, setType] = usePersistedState<string>(
    'glity-theme',
    lightTheme.type
  )
  const [theme, setTheme] = useState(lightTheme)

  useEffect(() => {
    setTheme(type === 'light' ? darkTheme : lightTheme)
  }, [type])

  const toggleTheme = (): void => setType(type === 'dark' ? 'light' : 'dark')

  return (
    <ThemeContext.Provider
      value={{
        toggleTheme,
        theme
      }}
    >
      <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>
    </ThemeContext.Provider>
  )
}

export default ThemeProvider
