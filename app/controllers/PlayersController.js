import { AppState } from "../AppState.js";
import { playersService } from "../services/PlayersService.js";
import { getFormData } from "../utils/FormHandler.js";
import { setHTML } from "../utils/Writer.js";

// NOTE private functions not accessible to the user, but can still be called by the controller

function _drawPlayers() {
  // console.log('draw players works');

  let players = AppState.players

  let template = ''

  players.forEach(player => template += player.PlayerCardTemplate)


  setHTML('players', template)

}


export class PlayersController {
  constructor () {
    // NOTE this should be your first step always this week
    console.log('Players Controller loaded');
    console.log(AppState.players)
    _drawPlayers()
  }

  // NOTE public methods accessible to the user

  sayHello() {
    console.log('Hello Jeremy, your button works.');
    console.log('Good job testing small pieces of your code');
  }

  increasePlayerScore(playerName) {
    console.log('player name', playerName);
    playersService.increasePlayerScore(playerName)
    _drawPlayers()
  }

  createPlayer(event) {
    // NOTE don't refresh my webpage please
    event.preventDefault()


    const form = event.target


    // NOTE the hard way
    // const nameFromForm = form.name.value
    // const imgFromForm = form.imgUrl.value

    // console.log('form submitted', nameFromForm);
    // console.log('form submitted', imgFromForm);
    const formData = getFormData(form)

    console.log('thanks getFormData', formData);

    playersService.createPlayer(formData)

    form.reset()

    _drawPlayers()

  }

}