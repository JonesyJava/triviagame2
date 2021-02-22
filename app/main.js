import TriviaController from "./Controllers/TriviaContoller.js";


class App {

  triviaController = new TriviaController();
}

window["app"] = new App();
