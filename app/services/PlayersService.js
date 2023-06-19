import { AppState } from "../AppState.js"
import { Player } from "../models/Player.js";

class PlayersService {
  createPlayer(formData) {
    const newPlayer = new Player(formData.name, formData.imgUrl)
    console.log('new player!', newPlayer);

    AppState.players.push(newPlayer)
    console.log(AppState.players);
  }

  increasePlayerScore(playerName) {

    console.log('player name from the service???', playerName);

    const players = AppState.players
    console.log('players?', players);

    const foundPlayer = players.find(player => player.name == playerName)

    foundPlayer.score++

    console.log(foundPlayer);
  }

  // NOTE services do not genreally have a constructor
}

// NOTE singleton
export const playersService = new PlayersService()