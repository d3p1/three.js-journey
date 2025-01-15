/**
 * @description App
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 */
import React from 'react'
import {createRoot} from 'react-dom/client'
import App from './src/App.jsx'

export default class Index {
  /**
   * Init
   *
   * @param   {HTMLElement} rootElement
   * @returns {void}
   */
  init(rootElement) {
    const root = createRoot(rootElement)
    root.render(
      <App counterCount={2}>
        <h1 style={{textTransform: 'uppercase'}}>My First React App</h1>
      </App>,
    )
  }
}
