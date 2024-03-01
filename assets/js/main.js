import { quizFunctions } from "./functions/functions.js";
import { variables } from "./variable/variables.js";

window.onload = () => {
    quizFunctions.writeL()
    //initialisation de lordres des questions et recuperation index de debut
    quizFunctions.initQuestionItemOrder()

    //afficher question suivante
    quizFunctions.nextQuestion()


    //enleve le layout avertissement
    quizFunctions.hideWarning()
        .then((value) => {
            console.log(value);
        })


    //compte à rebours avant debut des questions
    quizFunctions.initQuiz()

    //selectioner une reponse
    quizFunctions.selectResponse()

    //correction des reponses

    variables.submit.onclick = () => {
        variables.submitSecond.click()
        variables.submitFird.click()
        variables.submitForth.click()
        quizFunctions.responsesCorrection(variables.questionsItemOrder[variables.nextIndexCounter - 1])
        // console.log(variables.questionsItemOrder[variables.nextIndexCounter - 1]);
        // console.log(variables.questionsItemOrder);

        //fin de jeu
        quizFunctions.endGame()
    }

}