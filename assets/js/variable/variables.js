export let variables = {
    test: "tst",
    warning: document.querySelector("div.warning"),
    begin: document.getElementById("begin"),
    welcomeMessages: "Nous debutons dans :<br>",
    welcomeMessage: " ",
    secondes: "secondes",
    seconde: "s",
    zero: "0",
    responseNull: "xxxxxxxxxxx",
    score: 0,
    points: 0,
    quizTitleNumber: document.querySelectorAll(".quiz-title div")[0],
    quizTitleItem: document.querySelectorAll(".quiz-title div")[1],
    responseItem: document.querySelectorAll(".response-item"),
    scoreGlobal: document.querySelector(".score-global"),
    scoreCurrent: document.querySelector(".score-current"),
    timerCount: document.querySelector(".timerCount"),
    timerDelay: 20000,
    timerDelayNull: 5000,
    //variables du questionnaire
    questionnaire: [
        {
            item: "quels sont les deux pays les plus peuplés du monde ?",
            responses: [
                {
                    proposition: "chine",
                    isTrueProposition: true,
                    propositionValue: 1
                },
                {
                    proposition: "USA",
                    isTrueProposition: false,
                    propositionValue: -1
                },
                {
                    proposition: "inde",
                    isTrueProposition: true,
                    propositionValue: 1
                },
                {
                    proposition: "kazhastan",
                    isTrueProposition: false,
                    propositionValue: -1
                }
            ]
        },
        {
            item: "quelle est la capitale politique de la  Côte d'Ivoire ?",
            responses: [
                {
                    proposition: "bongouanou",
                    isTrueProposition: false,
                    propositionValue: -1
                },
                {
                    proposition: "abidjan",
                    isTrueProposition: false,
                    propositionValue: -1
                },
                {
                    proposition: "yamoussoukro",
                    isTrueProposition: true,
                    propositionValue: 1
                },
                {
                    proposition: "adzope",
                    isTrueProposition: false,
                    propositionValue: -1
                }
            ]
        },
        {
            item: "les USA sont composés de combien d'Etat ?",
            responses: [
                {
                    proposition: "45",
                    isTrueProposition: false,
                    propositionValue: -1
                },
                {
                    proposition: "52",
                    isTrueProposition: false,
                    propositionValue: -1
                },
                {
                    proposition: "50",
                    isTrueProposition: true,
                    propositionValue: 1
                },
                {
                    proposition: "51",
                    isTrueProposition: false,
                    propositionValue: -1
                }
            ]
        },
        {
            item: "quels languages de programmation fait(font) partie(s) des langages du front-end ?",
            responses: [
                {
                    proposition: "PHP 5",
                    isTrueProposition: false,
                    propositionValue: -1
                },
                {
                    proposition: "JavaScript",
                    isTrueProposition: true,
                    propositionValue: 1
                },
                {
                    proposition: "HTML 5",
                    isTrueProposition: true,
                    propositionValue: 1
                },
                {
                    proposition: "CSS 3",
                    isTrueProposition: true,
                    propositionValue: 1
                }
            ]
        },
        {
            item: "completer cette expressions : vos arguments en béton ..... sont des arguments solides",
            responses: [
                {
                    proposition: "béton armé",
                    isTrueProposition: true,
                    propositionValue: 1
                },
                {
                    proposition: "solide",
                    isTrueProposition: false,
                    propositionValue: -1
                },
                {
                    proposition: "desarmé",
                    isTrueProposition: false,
                    propositionValue: -1
                },
                {
                    proposition: "ciment",
                    isTrueProposition: false,
                    propositionValue: -1
                }
            ]
        },
        {
            item: "Union des républiques socialistes soviétiques fait reférence à :",
            responses: [
                {
                    proposition: "la chine",
                    isTrueProposition: false,
                    propositionValue: -1
                },
                {
                    proposition: "union sovietique",
                    isTrueProposition: true,
                    propositionValue: 1
                },
                {
                    proposition: "URSS",
                    isTrueProposition: true,
                    propositionValue: 1
                },
                {
                    proposition: "ONU",
                    isTrueProposition: false,
                    propositionValue: -1
                }
            ]
        },
        {
            item: "les livres suivants sont de Napoléon Hill",
            responses: [
                {
                    proposition: "reflechissez et devenez riche",
                    isTrueProposition: true,
                    propositionValue: 1
                },
                {
                    proposition: "l'étoile de salomon",
                    isTrueProposition: false,
                    propositionValue: -1
                },
                {
                    proposition: "plus malin que le diable",
                    isTrueProposition: true,
                    propositionValue: 1
                },
                {
                    proposition: "hypnose",
                    isTrueProposition: false,
                    propositionValue: -1
                }
            ]
        },
        {
            item: "le New York Stock Exchange ou bourse de New York",
            responses: [
                {
                    proposition: "est situé en pensylvanie",
                    isTrueProposition: false,
                    propositionValue: -1
                },
                {
                    proposition: "est la plus grande bourse du monde (capitalisation)",
                    isTrueProposition: true,
                    propositionValue: 1
                },
                {
                    proposition: "est surveillée par la reserve fédérale",
                    isTrueProposition: false,
                    propositionValue: -1
                },
                {
                    proposition: "propose des actions et obligations",
                    isTrueProposition: true,
                    propositionValue: 1
                }
            ]
        },
        {
            item: "les pays suivants sont des colonies de l'Espagne",
            responses: [
                {
                    proposition: "brésil",
                    isTrueProposition: false,
                    propositionValue: -1
                },
                {
                    proposition: "argentine",
                    isTrueProposition: true,
                    propositionValue: 1
                },
                {
                    proposition: "cuba",
                    isTrueProposition: true,
                    propositionValue: 1
                },
                {
                    proposition: "venezuela",
                    isTrueProposition: true,
                    propositionValue: 1
                }
            ]
        },
        {
            item: "les nombres suivant sont divisible par 2",
            responses: [
                {
                    proposition: "31",
                    isTrueProposition: false,
                    propositionValue: -1
                },
                {
                    proposition: "15948752",
                    isTrueProposition: true,
                    propositionValue: 1
                },
                {
                    proposition: "112256",
                    isTrueProposition: true,
                    propositionValue: 1
                },
                {
                    proposition: "129999989",
                    isTrueProposition: false,
                    propositionValue: -1
                }
            ]
        },
        {
            item: "quels sont les pays de l'Afrique de l'Ouest",
            responses: [
                {
                    proposition: "bénin",
                    isTrueProposition: true,
                    propositionValue: 1
                },
                {
                    proposition: "CEDEAO",
                    isTrueProposition: false,
                    propositionValue: -1
                },
                {
                    proposition: "côte d'ivoire",
                    isTrueProposition: true,
                    propositionValue: 1
                },
                {
                    proposition: "togo",
                    isTrueProposition: true,
                    propositionValue: 1
                }
            ]
        }
    ],
    questionsItemOrder: [],
    next: document.querySelector(".next"),
    nextIndexCounter: 1,
    questionNumber: 1,
    //choix reponses
    response: document.querySelectorAll(".response"),
    responsesMix: [],
    playerResponses: [],
    //ordre daffiche des reponse
    playerResponsesIndex: [],
    submit: document.querySelector(".submit"),
    submitSecond: document.querySelector(".submitSecond"),
    submitFird: document.querySelector(".submitFird"),
    submitForth: document.querySelector(".submitForth"),
    timerOfClearInterval: 0,
    endGame: document.querySelector(".end-game"),
    btHider: document.querySelector(".bt-hider"),
}