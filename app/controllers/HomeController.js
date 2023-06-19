import { Pop } from "../utils/Pop.js"

// Public
export class HomeController {
  constructor () {
    // NOTE this is similar to calling functions at the bottom of our JS sheet
    console.log('This is the Home Controller')
  }

  testButton() {
    Pop.success('The button Works 😎')
  }
}