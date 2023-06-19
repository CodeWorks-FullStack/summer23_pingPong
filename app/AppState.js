import { Player } from "./models/Player.js"
import { Value } from "./models/Value.js"
import { EventEmitter } from "./utils/EventEmitter.js"
import { isValidProp } from "./utils/isValidProp.js"
import { loadState } from "./utils/Store.js"



class ObservableAppState extends EventEmitter {
  // REVIEW this where we store all of our global variables now

  page = ''

  /** @type {import('./models/Value.js').Value[]} */
  values = loadState('values', [Value])

  players = [
    // NOTE new Player() builds out a new Player class for us, which runs the constructor inside of the player class. Our Constructor takes in a name and imgUrl in that order, so we pass them through when we build out the class
    new Player('Jeremy', 'https://images.unsplash.com/photo-1503443207922-dff7d543fd0e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=627&q=80'),
    new Player('Miles', 'https://images.unsplash.com/photo-1581310118098-898fd1e56f23?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80')
  ]




  // NOTE Used to load initial data
  init() {

  }

}

// REVIEW 🚗 goes
// NOTE exports a representation of our AppState to other js modules so that they can access our data
export const AppState = new Proxy(new ObservableAppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
