export default class Trivia {
    constructor(data) {
        this.category = data.category
        this.question = data.question
        this.correct_answer = data.correct_answer
        this.incorrect_answers = data.incorrect_answers
        this.difficulty = data.difficulty
    }

    get Template() {

        return /*html*/`
        <col-3 class="card p-2 text-center justify-content-space-around">
            <h4 class="text-center">${this.category}</h4>
            <hr>
            <h5>Question:</h5> ${this.question}
            <hr>
            <h5 class="hidden" id="revealAnswer">Answer: ${this.correct_answer}</h5>
            <hr>
            <h5 class="hidden">Incorrect Answer: ${this.incorrect_answers}</h5>
            <hr>
            <h5>Difficulty:</h5> ${this.difficulty}
            <hr>
            
            <button class="btn btn-primary mx-5 my-2 text-center" onclick="app.triviaController.previous()">Previous</button>
            <button class="btn btn-primary mx-5 my-2 text-center" onclick="app.triviaController.next()">Next</button>
        </col-3>
        `
    }
}