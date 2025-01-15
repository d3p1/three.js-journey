/**
 * @description Clicker
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 */
import React, {useEffect, useState, useRef} from 'react'

export default function Clicker({keyName, color, increment}) {
  const [count, setCount] = useState(
    parseInt(window.localStorage.getItem(keyName) ?? 0),
  )

  const buttonRef = useRef(null)

  useEffect(() => {
    buttonRef.current.style.textAlign = 'center'

    return () => {
      window.localStorage.removeItem(keyName)
    }
  }, [])

  useEffect(() => {
    window.localStorage.setItem(keyName, count.toString())
  }, [count])

  const onClick = () => {
    setCount((value) => value + 1)
    increment()
  }

  return (
    <>
      <div style={{margin: '2rem', color: color}}>Clicks: {count}</div>
      <button ref={buttonRef} style={{padding: '1rem'}} onClick={onClick}>
        Click me
      </button>
    </>
  )
}
