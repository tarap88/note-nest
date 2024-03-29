import { ExamplesController } from "./controllers/ExamplesController.js";
import { HomeController } from "./controllers/HomeController.js";
import { NotesController } from "./controllers/NotesController.js";
import { Router } from "./utils/Router.js";


export const router = new Router([
  {
    path: '',
    controllers: [NotesController],
    view: 'app/views/HomeView.html'
  },
  {
    path: '#/about',
    view: 'app/views/AboutView.html'
  }
])