import { useTheme } from 'styled-components'

export const isThemeDark = (): boolean => {
  const { type } = useTheme()

  return type === 'dark'
}
