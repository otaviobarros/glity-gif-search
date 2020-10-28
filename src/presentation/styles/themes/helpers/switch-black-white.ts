import { useTheme } from 'styled-components'
import { isThemeDark } from './is-theme-dark'

type SwitchBlackWhiteParams = {
  inverse: boolean
}

export const switchBlackWhite = (
  { inverse }: SwitchBlackWhiteParams = { inverse: false }
): string => {
  const { palette } = useTheme()
  if (inverse) {
    return isThemeDark() ? palette.common.black : palette.common.white
  }
  return isThemeDark() ? palette.common.white : palette.common.black
}
