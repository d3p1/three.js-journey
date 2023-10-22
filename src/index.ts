/**
 * @description Index
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 */
import './styles.scss'
import Bootstrap from './app/topic/primitive/bootstrap'

/**
 * @note Create topic pool
 */
const topicPool = [new Bootstrap()]

/**
 * @note Animate topic
 */
topicPool[0].builder.animate()
