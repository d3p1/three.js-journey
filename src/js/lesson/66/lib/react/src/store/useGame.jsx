/**
 * @description Game store
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 */
import {create} from 'zustand'
import {subscribeWithSelector} from 'zustand/middleware'

export const READY_PHASE_KEY = 'ready'
export const PLAYING_PHASE_KEY = 'playing'
export const COMPLETED_PHASE_KEY = 'completed'

export const useGame = create(
  subscribeWithSelector((store) => {
    return {
      trapCount: 10,

      trapSeed: 0,

      startTime: 0,

      endTime: 0,

      phase: READY_PHASE_KEY,

      start: () => {
        store((state) => {
          if (state.phase === READY_PHASE_KEY) {
            return {
              phase: PLAYING_PHASE_KEY,
              startTime: Date.now(),
            }
          }
          return {}
        })
      },

      restart: () => {
        store((state) => {
          if (
            state.phase === PLAYING_PHASE_KEY ||
            state.phase === COMPLETED_PHASE_KEY
          ) {
            return {
              phase: READY_PHASE_KEY,
              trapSeed: Math.random(),
            }
          }
          return {}
        })
      },

      complete: () => {
        store((state) => {
          if (state.phase === PLAYING_PHASE_KEY) {
            return {
              phase: COMPLETED_PHASE_KEY,
              endTime: Date.now(),
            }
          }
          return {}
        })
      },
    }
  }),
)
