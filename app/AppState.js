import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'
import { Notes } from './models/Notes.js'

class ObservableAppState extends EventEmitter {

  /**@type {import('./models/Notes.js').Notes[]} */
  nestingNotes = [
    // new Notes({
    // title: 'Note 1',
    // color: '#FEFAE0'
    // }),
    // new Notes({
    // title: 'Note 2',
    // color: '#F9EBC7'
    // })
  ]

  noteCount = 0
  activeNotes = null
}

export const AppState = createObservableProxy(new ObservableAppState())







