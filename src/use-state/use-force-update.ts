import { useReducer } from 'react'

/**
 * 强制刷新
 */
function useForceUpdate(): () => void {
  const [, dispatch] = useReducer((x) => x + 1, 0)

  return () => dispatch()
}

export default useForceUpdate
