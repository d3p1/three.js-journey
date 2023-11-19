/**
 * @description Index. Create a pool of learned topics. Switch between them
 *              using the keyboard
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 * @todo        Improve unit test
 * @todo        Separate this class from the execute logic
 * @todo        Analyze to create an interface for this class
 */
import './styles.scss'
import Bootstrap from './app/code/core/model/bootstrap'
import PrimitiveTopic from './app/topic/primitive/model/bootstrap'

class Index {
  /**
   * @type {number}
   */
  #topicIndex: number = 0

  /**
   * Constructor
   *
   * @param {Bootstrap[]} topicPool
   */
  constructor(public topicPool: Bootstrap[] = [new PrimitiveTopic()]) {
    this.#addKeydownEvent()
  }

  /**
   * Start topic
   *
   * @returns {void}
   */
  startTopic(): void {
    this.#getCurrentTopic().boot()
  }

  /**
   * Cancel topic
   *
   * @returns {void}
   */
  cancelTopic(): void {
    this.#getCurrentTopic().shutDown()
  }

  /**
   * Add keydown event to change topic
   *
   * @returns {void}
   */
  #addKeydownEvent(): void {
    document.addEventListener('keydown', (event: KeyboardEvent) => {
      event.preventDefault()
      if (!event.repeat) {
        this.cancelTopic()
        if (event.code === 'ArrowUp') {
          this.#topicIndex++
        } else if (event.code === 'ArrowDown') {
          this.#topicIndex--
        }
        this.#topicIndex = Math.max(
          0,
          Math.min(this.#topicIndex, this.topicPool.length - 1),
        )
        this.startTopic()
      }
    })
  }

  /**
   * Get current topic
   *
   * @returns {Bootstrap}
   */
  #getCurrentTopic(): Bootstrap {
    return this.topicPool[this.#topicIndex]
  }
}

/**
 * @note Start first topic in the pool of topics
 */
new Index().startTopic()
