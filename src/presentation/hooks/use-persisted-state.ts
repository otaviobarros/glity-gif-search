import { useEffect, useState, Dispatch, SetStateAction } from 'react'

type UsePersistedStateResponse<S> = [S, Dispatch<SetStateAction<S>>]

export const usePersistedState = <S>(
  key: string,
  initialState: S = null
): UsePersistedStateResponse<S> => {
  const [state, setState] = useState(() => {
    if (process.browser) {
      const storageValue = localStorage.getItem(key)
      if (storageValue) {
        return JSON.parse(storageValue)
      }
    }
    return initialState
  })

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state))
  }, [state])

  return [state, setState]
}
