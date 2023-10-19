/**
 * @description Index
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 */
import './styles.scss'
import Processor from './app/code/cuboid/processor'
import {Builder} from './app/code/core/builder'

/**
 * @note Create animation builder
 */
const builder = new Builder({width: innerWidth, height: innerHeight})

/**
 * @note Create cube
 */
const cube = new Processor()

/**
 * @note Move camera from (0, 0, 0) to (0, 0, 5)
 *       because the cube is also at (0, 0, 0)
 *       so it is not possible to see it
 * @note Add cube to the scene and to the animation
 * @note Init animation
 */
builder.camera.position.z = 5
builder.addObjProcessor(cube)
builder.animate()
