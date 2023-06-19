export class Player {
  constructor (name, imageUrl) {
    // NOTE runs when console is open, and can look at our code line by line
    // debugger
    this.score = 0
    this.name = name
    this.imgUrl = imageUrl
  }

  // getter's must return a value
  // getter's do not take in any parameters
  get PlayerDetails() {
    let details = `Hello, my name is ${this.name} and my score is ${this.score}`
    return details
  }

  get PlayerCardTemplate() {
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


// new Player('Jeremy')