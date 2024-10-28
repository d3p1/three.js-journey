/**
 * @description GUI utility for lesson
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 */
import GUI from 'lil-gui'

export default class Gui {
  /**
   * Add action to GUI
   *
   * @param {GUI}      gui
   * @param {Function} callback
   * @param {string}   name
   */
  static addAction(gui, callback, name) {
    gui
      .add(
        {
          exec: callback,
        },
        'exec',
      )
      .name(name)
  }
}
