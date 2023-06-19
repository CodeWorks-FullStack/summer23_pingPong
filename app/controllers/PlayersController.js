import { AppState } from "../AppState.js";
import { playersService } from "../services/PlayersService.js";
import { getFormData } from "../utils/FormHandler.js";
import { setHTML } from "../utils/Writer.js";

// NOTE private functions not accessible to the user, but can still be called by the controller

function _drawPlayers() {
  // console.log('draw players works');

  // NOTE bring in our data from the AppState. The controller is allowed to look at our data, but not change it
  let players = AppState.players

  // NOTE placeholder to hold our HTML
  let template = ''

  // NOTE loop through all of our players, and run a getter that returns an HTML template. Look at the get PlayerCardTemplate in our Player model (Player.js) to see what this looks like
  players.forEach(player => template += player.PlayerCardTemplate)


  // NOTE utility to get an element by it's ID, and set the innerHTML on it. First argument should be an id in your HTML, second argument should be a string of HTML
  setHTML('players', template)

}


export class PlayersController {

  // NOTE the constuctor runs as soon as app.js loads our controller from the router.js
  // NOTE if we want to run code on page load, we should put that code inside of the constructor
  constructor () {
    // NOTE this should be your first step always this week
    console.log('Players Controller loaded');
    // NOTE double check that our data is in the AppState
    console.log(AppState.players)
    // NOTE calls our private function to draw our players from the AppState on page load
    _drawPlayers()
  }

  // NOTE public methods accessible to the user. Any methods we declare in this controller will be exported along with the class

  sayHello() {
    console.log('Hello Jeremy, your button works.');
    console.log('Good job testing small pieces of your code');
  }

  // NOTE playerName is passed down inside of our PlayerCardTemplate in the Player class (Player.js)
  increasePlayerScore(playerName) {
    console.log('player name', playerName);

    // NOTE it is not the controller's job to change data in the AppState, the controller calls to the service so that it can handle those changes
    playersService.increasePlayerScore(playerName)
    // NOTE update the view (this will change)
    _drawPlayers()
  }

  createPlayer(event) {
    // NOTE don't refresh my webpage please
    event.preventDefault()


    // NOTE grab the form that just fired off this submit event
    const form = event.target


    // NOTE the hard way
    // const nameFromForm = form.name.value
    // const imgFromForm = form.imgUrl.value
    // console.log('form submitted', nameFromForm);
    // console.log('form submitted', imgFromForm);


    // NOTE utility function that will look at all input fields with name attributes, and pull those values out and store them in a single object
    const formData = getFormData(form)

    // NOTE ALWAYS LOG YOUR FORMDATA. make sure we that we successfully pulled out all of the data stored in our input fields. If this is an empty object, you have a problem with your HTML
    console.log('thanks getFormData', formData);

    // NOTE send our object down to the service so we can build a new Player with it
    playersService.createPlayer(formData)

    // NOTE clears all the input fields on our form
    form.reset()

    // NOTE update the view (this will change)
    _drawPlayers()

  }

}