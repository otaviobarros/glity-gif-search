import { GIF_GRID_COLUMNS_BREAKPOINTS } from '../constants'

export const handleGifGridColumnsBreakpoints = (
  currentBreakpoint: string
): number => GIF_GRID_COLUMNS_BREAKPOINTS[currentBreakpoint]
