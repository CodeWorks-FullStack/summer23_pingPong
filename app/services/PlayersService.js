import { AppState } from "../AppState.js"
import { Player } from "../models/Player.js";

class PlayersService {
  // NOTE services do not genreally have a constructor

  createPlayer(formData) {

    const newPlayer = new Player(formData.name, formData.imgUrl)

    // NOTE log out our fully built class. Should read as type Player in the console
    console.log('new player!', newPlayer);

    // NOTE push is an array method, it takes an argument that it will then add to the end of an array. we could use unshift instead to put an item at the beginning of an array
    // REVIEW push: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push
    // REVIEW unshift: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift
    AppState.players.push(newPlayer)

    console.log(AppState.players);

    // NOTE service is done, it only changes the data
  }

  increasePlayerScore(playerName) {

    console.log('player name from the service???', playerName);

    // NOTE we need access to data, we have to bring in the AppState
    const players = AppState.players

    console.log('players?', players);

    // NOTE find the specific player that we need to update. The playerName is passed down from the controller
    const foundPlayer = players.find(player => player.name == playerName)

    // NOTE increment!
    foundPlayer.score++

    console.log(foundPlayer);
    // NOTE service is done, it only changes the data
  }

}

// NOTE singleton. We create one service for our controllers to talk to
export const playersService = new PlayersService()