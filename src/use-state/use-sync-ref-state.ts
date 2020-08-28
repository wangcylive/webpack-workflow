import React, { useRef, useState } from 'react'

/**
 * 值同步 ref
 * @param initialValue
 */
function useSyncRefState<T>(initialValue: T | (() => T)): [T, React.Dispatch<T>, React.RefObject<T>] {
  const [state, setState] = useState<T>(initialValue)
  const ref = useRef<T>(state)

  const syncSetState = (val: T) => {
    setState(val)
    ref.current = val
  }

  return [state, syncSetState, ref]
}

export default useSyncRefState
