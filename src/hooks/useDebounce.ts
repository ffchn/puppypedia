import { useState, useEffect } from 'react'

/** useDebounce hook
 * listens to changes in value
 * whenever value changes, resets timer
 * whenever timer completes without resetting, returns last version of value set in debouncedValue
 *
 * @param value(string) -> value to be debounced
 * @param delay(number) -> delay for timer in miliseconds
 *
 * @returns string -> last updated version of value
 */

export default function useDebounce(value: string, delay: number = 600) {
  const [debouncedValue, setDebouncedValue] = useState(value)
  const [debouncing, setDebouncing] = useState<boolean>(true)

  useEffect(() => {
    if (value) setDebouncing(true)
    const timeoutHandler = setTimeout(() => {
      setDebouncedValue(value)
      setDebouncing(false)
    }, delay)

    if (!value) {
      return () => {
        clearTimeout(timeoutHandler)
        setDebouncing(false)
      }
    }

    return () => {
      clearTimeout(timeoutHandler)
    }
  }, [value, delay])

  return { debouncing, debouncedValue }
}
