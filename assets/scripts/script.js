/**
 * An array of 40 questions, from which 10 will be randomly chosen for each round
 * of the quiz.
 */

const questions = [
    // Question 01
    {
        question: "'The Mall', runs from Trafalgar Square, all the way to which London Landmark?",
        correctAnswer: "answerOne",
        answerOne: "Buckingham Palace",
        answerTwo: "The London Eye",
        answerThree: "St Paul's Cathedral",
        answerFour: "Westminster Abbey",
    },
    // Question 02
    {
        question: "Madam Tussauds Wax Museum is situated on which street?",
        correctAnswer: "answerOne",
        answerOne: "Baker Street",
        answerTwo: "Downing Street",
        answerThree: "Oxford Street",
        answerFour: "Regent Street",
    },
    // Question 03
    {
        question: "Which world famous Art Museum is sited in Trafalgar Square?  ",
        correctAnswer: "answerTwo",
        answerOne: "Tate Modern",
        answerTwo: "The National Gallery",
        answerThree: "Hayward Gallery",
        answerFour: "Whitechapel Gallery",
    },
    // Question 04
    {
        question: "Who Lives at Number 11 Downing Street?",
        correctAnswer: "answerThree",
        answerOne: "The Prime Minister",
        answerTwo: "The Foreign Secretary",
        answerThree: "The Chancellor of the Exchequer",
        answerFour: "The Defence Secretary",
    },
    // Question 05
    {
        question: "Which London Landmark was built between 1675 and 1710 by Christopher Wren?",
        correctAnswer: "answerTwo",
        answerOne: "The Tower of London",
        answerTwo: "St Paul's Cathedral",
        answerThree: "Buckingham Palace",
        answerFour: "Wembley Stadium",
    },
    // Question 06
    {
        question: "Where in London can Poets Corner can be found?",
        correctAnswer: "answerOne",
        answerOne: "Westminster Abbey",
        answerTwo: "Hyde Park",
        answerThree: "The Royal Albery Hall",
        answerFour: "The Palace of Westminster",
    },
    // Question 07
    {
        question: "What is London's tallest building?",
        correctAnswer: "answerTwo",
        answerOne: "The BT Tower",
        answerTwo: "The Shard",
        answerThree: "The Gherkin",
        answerFour: "Big Ben",
    },
    // Question 08
    {
        question: "What kind of structure is 'The London Eye'?",
        correctAnswer: "answerOne",
        answerOne: "A Big Wheel",
        answerTwo: "A Castle",
        answerThree: "A Church",
        answerFour: "A Skyscraper",
    },
    // Question 09
    {
        question: "At which London landmark can 'Traitor's Gate' be found?",
        correctAnswer: "answerOne",
        answerOne: "The Tower of London",
        answerTwo: "London Bridge",
        answerThree: "Big Ben",
        answerFour: "Kensington Palace",
    },
    // Question 10
    {
        question: "In which Museum can the 'Rosetta Stone' be viewed?",
        correctAnswer: "answerTwo",
        answerOne: "Tate Modern",
        answerTwo: "The British Museum",
        answerThree: "Natural History Museum",
        answerFour: "Museum of London",
    },
    // Question 11
    {
        question: "Which famous street is paired with Covent Garden to create an area of London?",
        correctAnswer: "answerFour",
        answerOne: "Oxford Street",
        answerTwo: "Downing Street",
        answerThree: "Bond Street",
        answerFour: "The Strand",
    },
    // Question 12
    {
        question: "How many London Boroughs are there?",
        correctAnswer: "answerFour",
        answerOne: "10",
        answerTwo: "8",
        answerThree: "16",
        answerFour: "32",
    },
    // Question 13
    {
        question: "Which area is regarded as being an area for arts, due to its number of Galleries?",
        correctAnswer: "answerOne",
        answerOne: "Chelsea",
        answerTwo: "Kensington",
        answerThree: "Greenwich",
        answerFour: "Camden",
    },
    // Question 14
    {
        question: "Which area of London is the administrative centre for the Capital?",
        correctAnswer: "answerOne",
        answerOne: "Westminster",
        answerTwo: "City of London ",
        answerThree: "Holborn",
        answerFour: "Covent Garden",
    },
    // Question 15
    {
        question: "Which letters begin the postal code for most 'Central London' areas?",
        correctAnswer: "answerThree",
        answerOne: "N",
        answerTwo: "E",
        answerThree: "W or SW",
        answerFour: "NW",
    },
    // Question 16
    {
        question: "Ealing, joins Hammersmith and ______ to create a London Borough?",
        correctAnswer: "answerFour",
        answerOne: "Camden",
        answerTwo: "Ealing",
        answerThree: "Soho",
        answerFour: "Fulham",
    },
    // Question 17
    {
        question: "Brent, is associated with which sporting venue?",
        correctAnswer: "answerThree",
        answerOne: "The Emerites Stadium",
        answerTwo: "Stamford Bridge",
        answerThree: "Wembley Stadium",
        answerFour: "The London Stadium",
    },
    // Question 18
    {
        question: "Which area of London did Shakespeare choose to build ‘The Globe Theatre’ in?",
        correctAnswer: "answerTwo",
        answerOne: "Fulham",
        answerTwo: "Southwark",
        answerThree: "Whitehall",
        answerFour: "Piccadilly",
    },
    // Question 19
    {
        question: "Which area plays host to a world famous carnival?",
        correctAnswer: "answerOne",
        answerOne: "Notting Hill ",
        answerTwo: "Camden",
        answerThree: "Soho",
        answerFour: "Bloomsbury",
    },
    // Question 20
    {
        question: "Which part of London pairs with Trafalgar Square to create a recognised area of London?",
        correctAnswer: "answerFour",
        answerOne: "Fitzrovia",
        answerTwo: "Smithfield",
        answerThree: "South Bank",
        answerFour: "Soho",
    },
    // Question 21
    {
        question: "Which disease is it widely accepted, that was finally stopped by the Great Fire of London?",
        correctAnswer: "answerOne",
        answerOne: "The Black Death",
        answerTwo: "Smallpox",
        answerThree: "Tuberculosis",
        answerFour: "Covid-19",
    },
    // Question 22
    {
        question: "Where did the Great Fire of London start?",
        correctAnswer: "answerTwo",
        answerOne: "A clothes shop on Oxford Street",
        answerTwo: "A Baker's Shop in Pudding Lane",
        answerThree: "A Newsagent on James Street",
        answerFour: "An Art Gallery in Chelsea",
    },
    // Question 23
    {
        question: "Who formed modern day London, by creating a settlement called 'Londinium'?",
        correctAnswer: "answerOne",
        answerOne: "The Romans",
        answerTwo: "The Vikings",
        answerThree: "The Saxons",
        answerFour: "The Normans",
    },
    // Question 24
    {
        question: "Which of these years is London thought to have been formed in?",
        correctAnswer: "answerTwo",
        answerOne: "250 A.D",
        answerTwo: "43 A.D",
        answerThree: "1066",
        answerFour: "1942",
    },
    // Question 25
    {
        question: "Which 'Invader' is credited with building the Tower of London in 1078?",
        correctAnswer: "answerOne",
        answerOne: "William the Conqueror",
        answerTwo: "Julius Caesar",
        answerThree: "Adolf Hitler",
        answerFour: "Vladimir Putin",
    },
    // Question 26
    {
        question: "When is it believed that the Bubonic Plague first hit London?",
        correctAnswer: "answerFour",
        answerOne: "2020",
        answerTwo: "1908",
        answerThree: "1534",
        answerFour: "1347",
    },
    // Question 27
    {
        question: "How many 'canonical' victims is it thought that Jack the Ripper had?",
        correctAnswer: "answerOne",
        answerOne: "5",
        answerTwo: "3",
        answerThree: "4",
        answerFour: "2",
    },
    // Question 28
    {
        question: "Which landmark was built in London to celebrate entering the 2000s?",
        correctAnswer: "answerOne",
        answerOne: "Millennium Dome",
        answerTwo: "The Shard",
        answerThree: "The London Eye",
        answerFour: "London Bridge",
    },
    // Question 29
    {
        question: "In which month of 2005 was London rocked by a series of co-ordinated terror attacks?",
        correctAnswer: "answerTwo",
        answerOne: "June",
        answerTwo: "July",
        answerThree: "September",
        answerFour: "May",
    },
    // Question 30
    {
        question: "Which major sporting event was held in London in 2012?",
        correctAnswer: "answerOne",
        answerOne: "The Olympic Games",
        answerTwo: "The Football World Cup",
        answerThree: "World Cycling Championship",
        answerFour: "World Swimming Championship",
    },
    // Question 31
    {
        question: "What colour are London buses traditionally?",
        correctAnswer: "answerFour",
        answerOne: "Blue",
        answerTwo: "Yellow",
        answerThree: "Green",
        answerFour: "Red",
    },
    // Question 32
    {
        question: "What colour are traditional London Taxis?",
        correctAnswer: "answerTwo",
        answerOne: "White",
        answerTwo: "Black",
        answerThree: "Yellow",
        answerFour: "Red",
    },
    // Question 33
    {
        question: "What is the name of the notorious exam cabbies have to pass before they can work in London?",
        correctAnswer: "answerOne",
        answerOne: "The Knowledge",
        answerTwo: "The Test",
        answerThree: "The Exam",
        answerFour: "A GCSE",
    },
    // Question 34
    {
        question: "What is the Nickname given to the London Underground, affectionately, by its users?",
        correctAnswer: "answerOne",
        answerOne: "The Tube",
        answerTwo: "The Subway",
        answerThree: "The Metro",
        answerFour: "The Railway",
    },
    // Question 35
    {
        question: "In which year was the London underground first founded?  ",
        correctAnswer: "answerThree",
        answerOne: "1900",
        answerTwo: "1925",
        answerThree: "1875",
        answerFour: "1949",
    },
    // Question 36
    {
        question: "How many lines does the current Underground system have?",
        correctAnswer: "answerFour",
        answerOne: "15",
        answerTwo: "4",
        answerThree: "8",
        answerFour: "11",
    },
    // Question 37
    {
        question: "How many stations does the Underground service?",
        correctAnswer: "answerOne",
        answerOne: "270",
        answerTwo: "200",
        answerThree: "150",
        answerFour: "190",
    },
    // Question 38
    {
        question: "Which Underground line is depicted in GREEN on the Underground map?",
        correctAnswer: "answerTwo",
        answerOne: "Jubilee Line",
        answerTwo: "District Line",
        answerThree: "Victoria Line",
        answerFour: "Piccadilly Line",
    },
    // Question 39
    {
        question: "In London, Liverpool Street, is famous for what?",
        correctAnswer: "answerTwo",
        answerOne: "A Pub",
        answerTwo: "A Railway Station ",
        answerThree: "A Bus Station",
        answerFour: "An Airport",
    },
    // Question 40
    {
        question: "Which London Railway station acts as the main hub for the Euro Star?",
        correctAnswer: "answerTwo",
        answerOne: "King's Cross",
        answerTwo: "St Pancras",
        answerThree: "Paddington",
        answerFour: "Waterloo",
    },
];

/**
 * Global variables
 */

//Empty array to hold the array of mixed questions for the 10 randomly chosed questions for each round.
let mixQuestions = [];
//Variables used for accumulating question numbers and keeping track of the score during each round.
let questionNumber = 1;
let playerScore = 0;
let incorrectTurn = 0;
let indexNumber = 0;

/**
 * Function to randomly mix the questions from the questions array and then push 10
 * questions to the mixed question array for the round.
 */

function generateQuestions() {
    while (mixQuestions.length <= 9) {
        const random = questions[Math.floor(Math.random() * questions.length)];
        if (!mixQuestions.includes(random)) {
            mixQuestions.push(random);
        }
    }
}

/**
 * Function to display the next question in the array to the browser
 */

function nextQuestion(index) {
    generateQuestions();
    const currentQuestion = mixQuestions[index];
    document.querySelector("#question-number").innerHTML = questionNumber;
    document.querySelector("#player-score").innerHTML = playerScore;
    document.querySelector("#display-question").innerHTML = currentQuestion.question;
    document.querySelector("#answer-option-one").innerHTML = currentQuestion.answerOne;
    document.querySelector("#answer-option-two").innerHTML = currentQuestion.answerTwo;
    document.querySelector("#answer-option-three").innerHTML = currentQuestion.answerThree;
    document.querySelector("#answer-option-four").innerHTML = currentQuestion.answerFour;
}

/**
 * Function to check the current questions answer against the correct answer
 */

function checkAnswer() {
    const currentQuestion = mixQuestions[indexNumber]; // retrieves the current question from the mixQuestions array
    const currentQuestionAnswer = currentQuestion.correctAnswer; // retrieves the correct answer for the current question originating from mixQuestions array
    const potentialAnswers = document.getElementsByName("potential-answer"); // retrieves all <input> elements with name of 'potential-answer'
    let correctAnswer = null;

    // if statement to check whether a potential answer has been chosen and if not a modal shall be displayed to alert the user
    if (potentialAnswers[0].checked === false && potentialAnswers[1].checked === false && potentialAnswers[2].checked === false && potentialAnswers[3].checked == false) {
        document.getElementById("unchecked-answer-display").style.display = "flex";
    }

    // if statement to check whether the user answer matches with the correct answer
    potentialAnswers.forEach((answer) => {
        if (answer.value === currentQuestionAnswer) {
            correctAnswer = answer.labels[0].id;
        }
    });

    // else if statement to check whether the input selected is the same as the answer and what should happen if it is and if it is not
    potentialAnswers.forEach((answer) => {
        if (answer.checked === true && answer.value === currentQuestionAnswer) {
            document.getElementById(correctAnswer).style.backgroundColor = "#39FF14";
            playerScore++;
            indexNumber++;
            // one second delay to allow the question to fully load before the question number increments
            setTimeout(() => {
                questionNumber++;
            }, 1000);
        } else if (answer.checked && answer.value !== currentQuestionAnswer) {
            const wrongLabelId = answer.labels[0].id;
            document.getElementById(wrongLabelId).style.backgroundColor = "#FF3131";
            document.getElementById(correctAnswer).style.backgroundColor = "#39FF14";
            incorrectTurn++;
            indexNumber++;
            // one second delay to allow the question to fully load before the question number increments
            setTimeout(() => {
                questionNumber++;
            }, 1000);
        }
    });
}

/**
 * Function to call checkAnswer and uncheckedPotentialAnswer before moving to next question
 */

function moveToNextQuestion() {
    checkAnswer();
    uncheckedPotentialAnswers();
    // one second delay before displaying the next question from the mixQuestions array
    setTimeout(() => {
        if (indexNumber <= 9) {
            nextQuestion(indexNumber);
        } else {
            finishGame();
        }
        resetPotentialAnswersBackground();
    }, 1000);
}

/**
 * Function with forEach to reset the potentialAnswers background following answering of the previous answer
 */

function resetPotentialAnswersBackground() {
    const potentialAnswers = document.getElementsByName("potential-answer");
    potentialAnswers.forEach((answer) => {
        document.getElementById(answer.labels[0].id).style.backgroundColor = "";
    });
}

/**
 * Function with for loop to uncheck all potentialAnswer input before the next question from mixQuestions
 */

function uncheckedPotentialAnswers() {
    const potentialAnswers = document.getElementsByName("potential-answer");
    for (let i = 0; i < potentialAnswers.length; i++) {
        potentialAnswers[i].checked = false;
    }
}

/**
 * Function to determine the message the user receives at the end of the quiz based on their results
 */

function finishGame() {
    let comment = null;
    let commentStyle = null;

    // else if statement to check the score of the users round which determines the comment and comment style they see
    if (playerScore <= 3) {
        comment = "You will definitely need a travel guide!";
        commentStyle = "#FF3131";
    } else if (playerScore >= 4 && playerScore < 7) {
        comment = "You know a little but you'd still get lost!";
        commentStyle = "#FF5F1F";
    } else if (playerScore >= 7 && playerScore < 10) {
        comment = "OK, you've been to London before huh?";
        commentStyle = "#FFFF00";
    } else if ((playerScore = 10)) {
        comment = "Why don't you just be our travel guide?";
        commentStyle = "#39FF14";
    }
    const scorePercentage = (playerScore / 10) * 100;

    // data to display to the DOM for users final score display
    document.querySelector("#comments").innerHTML = comment;
    document.querySelector("#comments").style.color = commentStyle;
    document.querySelector("#score-percentage").innerHTML = scorePercentage;
    document.querySelector("#incorrect-answers").innerHTML = incorrectTurn;
    document.querySelector("#correct-answers").innerHTML = playerScore;
    document.querySelector("#final-score-display").style.display = "flex";
}

/**
 * Function to close the users final score display following a round of the quiz as in finishGame function
 */

function closeFinalScoreDisplay() {
    questionNumber = 1;
    playerScore = 0;
    incorrectTurn = 0;
    indexNumber = 0;
    mixQuestions = [];
    nextQuestion(indexNumber);
    document.querySelector("#final-score-display").style.display = "none";
}

/**
 * Function to close the display following a users clicking next question without first selecting a potential answer
 */

function closeUncheckedAnswerDisplay() {
    document.querySelector("#unchecked-answer-display").style.display = "none";
}

/**
 * Load event to fire when entire page has loaded including all images, stylesheets and scripts
 */

window.addEventListener("load", (event) => {
    event = nextQuestion(0);
});