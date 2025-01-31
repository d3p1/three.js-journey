/**
 * @description Menu
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 */
import './styles.css'
import {useEffect, useRef} from 'react'
import {useKeyboardControls} from '@react-three/drei'
import {addEffect} from '@react-three/fiber'
import {
  useGame,
  COMPLETED_PHASE_KEY,
  PLAYING_PHASE_KEY,
} from '../../store/useGame.jsx'

export default function Menu() {
  const time = useRef(null)

  const forward = useKeyboardControls((state) => state.forward)
  const rightward = useKeyboardControls((state) => state.rightward)
  const backward = useKeyboardControls((state) => state.backward)
  const leftward = useKeyboardControls((state) => state.leftward)
  const jump = useKeyboardControls((state) => state.jump)

  const restart = useGame((state) => state.restart)
  const phase = useGame((state) => state.phase)

  useEffect(() => {
    const unsubscribeAddEffect = addEffect(() => {
      const state = useGame.getState()
      _updateTimer(time.current, state.phase, state.startTime, state.endTime)
    })

    return () => {
      unsubscribeAddEffect()
    }
  }, [])

  return (
    <div className="menu">
      <div ref={time} className="menu__timer">
        0.00
      </div>

      {phase === COMPLETED_PHASE_KEY && (
        <div className="menu__restart" onClick={restart}>
          Restart
        </div>
      )}

      <div className="menu__controls">
        <div
          className={`menu__controls-key ${
            forward ? 'menu__controls-key--active' : ''
          } menu__controls-key--w`}
        >
          w
        </div>
        <div
          className={`menu__controls-key ${
            leftward ? 'menu__controls-key--active' : ''
          } menu__controls-key--a`}
        >
          a
        </div>
        <div
          className={`menu__controls-key ${
            backward ? 'menu__controls-key--active' : ''
          } menu__controls-key--s`}
        >
          s
        </div>
        <div
          className={`menu__controls-key ${
            rightward ? 'menu__controls-key--active' : ''
          } menu__controls-key--d`}
        >
          d
        </div>
        <div
          className={`menu__controls-key ${
            jump ? 'menu__controls-key--active' : ''
          } menu__controls-key--space`}
        ></div>
      </div>
    </div>
  )
}

const _updateTimer = (timer, phase, startTime, endTime) => {
  if (timer) {
    let elapsedTime = 0

    if (phase === PLAYING_PHASE_KEY) {
      elapsedTime = Date.now() - startTime
    } else if (phase === COMPLETED_PHASE_KEY) {
      elapsedTime = endTime - startTime
    }

    elapsedTime *= 0.001
    elapsedTime = elapsedTime.toFixed(2)

    timer.textContent = elapsedTime
  }
}
