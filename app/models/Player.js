export class Player {
  constructor (name, imageUrl) {
    // NOTE  debugger runs when console is open, and can look at our code line by line
    // debugger

    // NOTE sets a property on this class onject when the class is built out. "this" refers to a property stored within the class object
    this.score = 0
    // NOTE sets the name property on this class based on what they pass through to the constructor when the class is built out
    this.name = name

    // NOTE sets the imgUrl property on this class based on what they pass through to the constructor when the class is built out
    this.imgUrl = imageUrl
  }

  // getter's must return a value
  // getter's do not take in any parameters
  get PlayerDetails() {
    // NOTE we use the this keyword to access the current stored values on our class object
    let details = `Hello, my name is ${this.name} and my score is ${this.score}`
    return details
  }

  get PlayerCardTemplate() {
    // NOTE returns a an HTML string when this getter is called with the current values stored in our class
    return `
    <div class="col-12 col-md-6">
      <div>
        <img class="img-fluid player-img"
          src="${this.imgUrl}"
          alt="${this.name}">
        <p>${this.name}</p>
        <p>Score: ${this.score}</p>
        <div>
          <button onclick="app.PlayersController.increasePlayerScore('${this.name}')">Score Goes up</button>
        </div>
      </div>
    </div>
    `
  }

}

