import { ProxyState } from "../AppState.js";
import { api } from "./AxiosService.js";
import Trivia from "../Models/Trivia.js";

class TriviaService {
  
    constructor() {
        this.getTrivia()
    }

    
    getTrivia() {
        api.get().then(res => {
            console.log(res.data)
            ProxyState.trivia = res.data.results.map(rawTriviaData => new Trivia(rawTriviaData))
            ProxyState.next = res.data.next
            // ProxyState.prev = res.data.prev
            console.log(ProxyState.trivia)
        console.log("this does not run first")
        }).catch(err => console.error(err))
        console.log("this runs first")
    }

    next() {
        api.get(ProxyState.next).then(res => {
            console.log(res.data)
            ProxyState.trivia = res.data.results.map(rawTriviaData => new Trivia(rawTriviaData))
            ProxyState.next = res.data.next
            ProxyState.previous = res.data.previous
            console.log(ProxyState.trivia)
        }).catch(err => console.error(err))
    }

    previous(){
        api.get(ProxyState.previous).then(res => {
            console.log(res.data)
            ProxyState.trivia = res.data.results.map(rawTriviaData => new Trivia(rawTriviaData))
            ProxyState.next = res.data.next
            ProxyState.previous = res.data.previous
            console.log(ProxyState.trivia)
        }).catch(err => console.error(err))
    }


}

export const triviaService = new TriviaService();

