import { AboutController } from "./controllers/AboutController.js";
import { HomeController } from "./controllers/HomeController.js";
import { PlayersController } from "./controllers/PlayersController.js";
import { ValuesController } from "./controllers/ValuesController.js";
import { AboutView } from "./views/AboutView.js";


export const router = [
  {
    // NOTE the empty string path is what loads when are on our home page, or just plain old http://localhost:8080. 90% of your projects are going to be built from this object only
    path: '',
    // REVIEW this is where we register our controllers to be used from HTML(the view). Important that we don't instantiate the class here, only provide the blueprint (do not use new PlayersController())
    controller: PlayersController,
    // NOTE if you don't want to inject your homepage into the #router-view ID, set this to empty string
    view: ''
  },
  {
    path: '#/about',
    controller: [AboutController, ValuesController],
    view: AboutView
  }
]