/**
 * @description App
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 */
import React from 'react'
import BaseIndex from '../../../../core/lesson/react-lesson/index.jsx'
import App from './src/App.jsx'

export default class Index extends BaseIndex {
  /**
   * Render
   *
   * @returns {void}
   */
  render() {
    this.root.render(
      <App counterCount={2}>
        <h1 style={{textTransform: 'uppercase'}}>My First React App</h1>
      </App>,
    )
  }
}
