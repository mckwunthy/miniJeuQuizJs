import { variables } from "../variable/variables.js";

export let quizFunctions = {
    writeL: () => console.log("rrr" + variables.test),
    initQuestionItemOrder: () => {
        //initialisation de lordre des questions
        variables.questionsItemOrder = quizFunctions.responseandQuestionsMixer()
        // console.log(variables.questionsItemOrder);
    },
    //cacher la page avertissement
    hideWarning: () => {
        return new Promise((resolve) => {


            variables.begin.onclick = () => {
                // console.log("indexxxxxx " + variables.questionsItemOrder[variables.nextIndexCounter]);


                variables.warning.classList.contains("none") ? null : variables.warning.classList.add("none")
                quizFunctions.timerDelay(variables.quizTitleItem, variables.timerDelayNull, variables.welcomeMessages, variables.secondes)
                quizFunctions.timerDelay(variables.timerCount, variables.timerDelayNull, variables.welcomeMessage, variables.seconde)

                //bt hider : hide pdt quelque secondes
                variables.btHider.classList.remove("none")
                variables.btHider.innerHTML = ""

                //start sound
                let sttStoper1 = setTimeout(() => {
                    quizFunctions.soundEffect("start")
                }, variables.timerDelayNull + 1000);


                //affiche la premiere question apres un delai de 10 s

                let sttStoper2 = setTimeout(() => {
                    //prend la premiere question du tableau
                    variables.responsesMix = quizFunctions.displayQuestion(variables.questionsItemOrder[0])

                    // quizFunctions.timerDelay(variables.timerCount, variables.timerDelay, variables.welcomeMessage, variables.seconde)

                    //sound of clock and his stoper

                    let stopClock = setInterval(() => {
                        quizFunctions.soundEffect("clock")
                    }, 900);


                    variables.submitForth.onclick = () => {
                        console.log("yr stop clock1");

                        clearInterval(stopClock)
                    }

                    quizFunctions.timeIsUp()

                    //bt hider : enlever pdt quelque secondes
                    variables.btHider.classList.add("none")

                    // console.log(variables.responsesMix);

                    resolve(variables.responsesMix)
                }, variables.timerDelayNull + 2000);

            }
        })
    },
    //initialiser l'ecran de jeu avant de commencer
    initQuiz: () => {
        variables.quizTitleNumber.innerHTML = variables.zero

        variables.quizTitleItem.innerHTML = variables.welcomeMessage

        for (let index = 0; index < variables.responseItem.length; index++) {
            const element = variables.responseItem[index];
            element.innerHTML = variables.responseNull
        }

        variables.scoreGlobal.innerHTML = `score <br>${variables.score}`
        variables.scoreCurrent.innerHTML = `points <br>${variables.points}`


    },
    timerDelay: (target, delay = 10000, message = " ", secondes = "s") => {

        let delayForStop = delay + 1000
        let timer = setInterval(() => {
            target.innerHTML = message + " " + delay / 1000 + " " + secondes
            delay -= 1000
        }, 1000);

        setTimeout(() => {
            clearInterval(timer)
        }, delayForStop);

        variables.submitSecond.onclick = () => {
            clearInterval(timer)
        }

    },
    displayQuestion: (index, response = 4) => {
        // console.log("indexxxxxx " + index);

        variables.responsesMix = quizFunctions.responseandQuestionsMixer(response)

        variables.quizTitleNumber.innerHTML = variables.questionNumber

        variables.questionNumber == variables.questionnaire.length ? null : variables.questionNumber += 1

        variables.quizTitleItem.innerHTML = variables.questionnaire[index].item
        // console.log(variables.questionnaire[index].responses);
        for (let i = 0; i < variables.questionnaire[index].responses.length; i++) {
            const element = variables.questionnaire[index].responses[variables.responsesMix[i]].proposition;
            variables.responseItem[i].innerHTML = element
        }
        //on retourne le table de reponse pour la correction
        return variables.responsesMix
    },
    responseandQuestionsMixer: (index = variables.questionnaire.length) => {
        let number, table, tableNew
        table = []
        tableNew = []

        for (let i = 0; i < index; i++) {
            table.push(i)
            // console.log(table);
        }
        for (let i = 0; i < table.length;) {
            number = Math.floor(Math.random() * table.length);
            tableNew.push(table[number])
            table.splice(number, 1)
            // console.log(tableNew);
        }
        return tableNew
    },
    nextQuestion: () => {
        variables.next.onclick = () => {
            console.log("index " + variables.nextIndexCounter);

            //sound of clock and his stoper
            let stopClock = setInterval(() => {
                quizFunctions.soundEffect("clock")
            }, 900);

            variables.submitForth.onclick = () => {
                console.log("yr stop clock2");
                clearInterval(stopClock)
            }

            // console.log("indexxxxxx " + variables.questionsItemOrder[variables.nextIndexCounter]);

            quizFunctions.displayQuestion(variables.questionsItemOrder[variables.nextIndexCounter])
            variables.nextIndexCounter += 1

            //initialiser reponses selectionnees : mise en forme
            for (let index = 0; index < variables.response.length; index++) {
                const element = variables.response[index];
                element.classList.contains("selected") ? element.classList.remove("selected") : null
                element.classList.contains("good") ? element.classList.remove("good") : null
                element.classList.contains("bad") ? element.classList.remove("bad") : null
            }
            //initialiser reponses selectionnees : vider playerResponses
            variables.playerResponses = []
            variables.playerResponsesIndex = []

            //vider points
            variables.points = 0
            variables.scoreCurrent.innerHTML = `points <br>${variables.points}`


            variables.submit.classList.remove("none")
            variables.submitSecond.classList.remove("none")
            variables.submitFird.classList.remove("none")
            variables.submitForth.classList.remove("none")
            variables.next.classList.add("none")

            quizFunctions.timeIsUp()

            // console.log(variables.responsesMix);

        }
    },
    selectResponse: () => {

        for (let index = 0; index < variables.response.length; index++) {
            const element = variables.response[index];
            element.onclick = () => {
                //mise en forme de la reponse selectionnee
                element.classList.toggle("selected")
                //memoriser indices des reponses pour correction future
                //premier click memorise lindice et la valeur
                if (!variables.playerResponses.includes(variables.responsesMix[index])) {
                    variables.playerResponses.push(variables.responsesMix[index])
                    variables.playerResponsesIndex.push(index)
                } else {
                    //deuxieme click retire lindice
                    for (let i = 0; i < variables.playerResponses.length; i++) {

                        const element = variables.playerResponses[i];

                        if (element == variables.responsesMix[index]) {
                            variables.playerResponses.splice(i, 1)
                            variables.playerResponsesIndex.splice(i, 1)
                        }
                    }
                }

                console.log(variables.playerResponses);
                console.log(variables.playerResponsesIndex);
            }
        }
    },
    responsesCorrection: (index) => {

        //index = numero question

        // console.log(variables.responsesMix);
        // console.log(variables.playerResponses);
        // console.log(variables.playerResponsesIndex);
        // console.log(index);

        for (let i = 0; i < variables.playerResponses.length; i++) {
            const element = variables.playerResponses[i];
            //on recupere si la reponse et vrai ou fausse et la valeur de point associe
            let booleanResponse = variables.questionnaire[index].responses[element].isTrueProposition
            let valueResponse = variables.questionnaire[index].responses[element].propositionValue

            // console.log(variables.questionnaire[index].item);
            // console.log(variables.questionnaire[index].responses);
            // console.log(variables.questionnaire[index].responses[element]);
            // console.log(booleanResponse);
            // console.log(valueResponse);

            //mise en forme des mauvaises reponses
            booleanResponse ? null /*variables.response[variables.playerResponsesIndex[i]].classList.add("good")*/ : variables.response[variables.playerResponsesIndex[i]].classList.add("bad")


            //calcule point et affichage
            variables.score += valueResponse
            variables.points += valueResponse

            variables.scoreGlobal.innerHTML = `score <br>${variables.score}`
            variables.scoreCurrent.innerHTML = `points <br>${variables.points}`
        }

        //affichage des bonnes reponses
        for (let i = 0; i < 4; i++) {
            let booleanResponseS = variables.questionnaire[index].responses[i].isTrueProposition
            // console.log(booleanResponseS);
            //mise en forme des bonnes reponses
            if (booleanResponseS) {
                for (let j = 0; j < variables.response.length; j++) {
                    const element = variables.response[j];

                    // console.log(variables.questionnaire[index].responses[i].proposition);
                    // console.log(element.children[1].innerHTML);
                    element.children[1].innerHTML == variables.questionnaire[index].responses[i].proposition ? element.classList.add("good") : null
                }
            }

            if (!booleanResponseS) {
                for (let j = 0; j < variables.response.length; j++) {
                    const element = variables.response[j];

                    // console.log(variables.questionnaire[index].responses[i].proposition);
                    // console.log(element.children[1].innerHTML);
                    element.children[1].innerHTML == variables.questionnaire[index].responses[i].proposition ? element.classList.add("bad") : null
                }
            }
        }

        variables.submit.classList.add("none")
        variables.submitSecond.classList.add("none")
        variables.submitFird.classList.add("none")
        variables.submitForth.classList.add("none")
        variables.next.classList.remove("none")
    },
    //qd le delai est ecroule, les reponses sont auto valide
    timeIsUp: () => {
        //initialisation du chrono
        quizFunctions.timerDelay(variables.timerCount, variables.timerDelay, variables.welcomeMessage, variables.seconde)

        let sttStoper1 = setTimeout(() => {
            //time is up signalement
            quizFunctions.soundEffect("timeisup")
            console.log("tour click stop 1");

        }, variables.timerDelay + 1000);

        let sttStoper2 = setTimeout(() => {
            variables.submit.click()
            variables.submitSecond.click()
            console.log("tour click stop 2");

        }, variables.timerDelay + 2000);

        //desactive settimeout 
        variables.submitFird.onclick = () => {
            clearTimeout(sttStoper1)
            clearTimeout(sttStoper2)

            console.log("tour click stop 3");
        }
    },
    soundEffect: (name = "timeisup") => {
        let audio = document.createElement("audio")
        audio.src = "/assets/audio/" + name + ".mp3"
        audio.autoplay = true
    },
    endGame: () => {
        console.log(variables.nextIndexCounter);

        if (variables.nextIndexCounter == variables.questionnaire.length) {

            //bt hider : enlever pdt quelque secondes
            variables.btHider.classList.remove("none")

            setTimeout(() => {
                variables.endGame.children[0].innerHTML = `
                C'est la fin du quize, vous avez obtenue ${variables.score} pts / 22
                `
                variables.endGame.classList.remove("none")

                //game end sound
                quizFunctions.soundEffect("gameend")
            }, 3000);
        } else {
            if (variables.nextIndexCounter == variables.questionnaire.length) {
                setTimeout(() => {
                    variables.endGame.classList.remove("none")

                    //game end sound
                    quizFunctions.soundEffect("gameend")

                    //bt hider : enlever pdt quelque secondes
                    variables.btHider.classList.remove("none")
                }, variables.timerDelay + 1000);
            }
        }

        variables.endGame.onclick = () => {
            variables.endGame.classList.add("none")

            //recharge la page
            window.location.reload()
        }
    }
}