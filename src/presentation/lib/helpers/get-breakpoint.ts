import { Breakpoints } from '../../styles/styled'

export const getBreakpoint = (
  width: number,
  breakpoints: Breakpoints,
  fn: (currentBreakpoint: string) => void
): void => {
  const availableBreakpoints = breakpoints.keys.filter(key => {
    if (width >= breakpoints.values[breakpoints.keys.length - 1]) {
      return breakpoints.values[breakpoints.keys.length - 1]
    }

    return breakpoints.values[key] <= width
  })
  const currentBreakpoint =
    availableBreakpoints[availableBreakpoints.length - 1]

  return fn(currentBreakpoint)
}
