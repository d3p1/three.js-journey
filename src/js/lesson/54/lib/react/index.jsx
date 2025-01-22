/**
 * @description App
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 */
import React from 'react'
import {createRoot, Root} from 'react-dom/client'
import App from './src/App.jsx'

export default class Index {
  /**
   * @type {Root}
   */
  root

  /**
   * Init
   *
   * @param   {HTMLElement} rootElement
   * @returns {void}
   */
  init(rootElement) {
    this.root = createRoot(rootElement)
    this.root.render(
      <App counterCount={2}>
        <h1 style={{textTransform: 'uppercase'}}>My First React App</h1>
      </App>,
    )
  }

  /**
   * Dispose
   *
   * @returns {void}
   */
  dispose() {
    this.root.unmount()
  }
}
