import { ProxyState } from "../AppState.js";
import { triviaService } from "../Services/TriviaService.js";


//Private
function _draw() {
  let trivia = ProxyState.trivia;
  let template = ''
  trivia.forEach(v => template += v.Template)
  document.getElementById("Question").innerHTML = /*html*/`
  <div className="card-columns trivia">
      ${template}
    </div>
  `
}

//Public
export default class TriviaController {
  constructor() {
    ProxyState.on('trivia', _draw);
    _draw()
  }

  
  next() {
    triviaService.next()
  }

  previous() {
      triviaService.previous()
  }
}
