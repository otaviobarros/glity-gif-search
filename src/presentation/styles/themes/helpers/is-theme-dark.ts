import { useTheme } from '@/src/presentation/hooks'

export const isThemeDark = (): boolean => {
  const { theme } = useTheme()

  return theme.type === 'dark'
}
