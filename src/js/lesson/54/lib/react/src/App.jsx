/**
 * @description App
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 */
import React, {useState, useMemo} from 'react'
import Clicker from './app/Clicker.jsx'
import People from './app/People.jsx'
import './App.css'

export default function App({counterCount, children}) {
  const [hasClicker, setHasClicker] = useState(true)
  const [count, setCount] = useState(0)

  const toggleClicker = () => {
    setHasClicker((value) => !value)
  }

  const increment = () => {
    setCount((value) => value + 1)
  }

  const counterColors = useMemo(() => {
    const colors = []
    for (let i = 0; i < counterCount; i++) {
      colors.push(`hsl(${Math.random() * 360}deg, 100%, 50%)`)
    }
    return colors
  }, [counterCount])

  return (
    <div className="app">
      {children}

      <p
        style={{margin: '2rem', textTransform: 'uppercase', fontWeight: 'bold'}}
      >
        Global clicks: {count}
      </p>

      <button
        style={{marginBottom: '2rem', padding: '1.5rem'}}
        onClick={toggleClicker}
      >
        {hasClicker ? 'Hide Clicker' : 'Show Clicker'}
      </button>
      {hasClicker && (
        <>
          {[...Array(counterCount)].map((value, key) => (
            <Clicker
              key={key}
              keyName={`count${key}`}
              color={counterColors[key]}
              increment={increment}
            />
          ))}
        </>
      )}

      <People />
    </div>
  )
}
