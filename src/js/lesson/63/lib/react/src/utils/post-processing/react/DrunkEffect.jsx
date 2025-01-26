/**
 * @description Drunk effect
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 */
import {forwardRef} from 'react'
import BaseDrunkEffect from '../DrunkEffect.js'

export default forwardRef(function DrunkEffect(props, ref) {
  const effect = new BaseDrunkEffect(props)

  return <primitive object={effect} ref={ref} />
})
