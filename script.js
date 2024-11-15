let quizQuestions = [
    {
        question: "Quel auteur a écrit 'Le Cid' en 1637 ?",
        options: ["Molière", "Corneille", "Racine"],
        answer: "Corneille"
    },
    {
        question: "Quelle œuvre a été écrite par Racine en 1677 ?",
        options: ["Andromaque", "Phèdre", "Le Misanthrope"],
        answer: "Phèdre"
    },
        {
        question: "Quel auteur a écrit 'Le Cid' en 1637 ?",
        options: ["Molière", "Corneille", "Racine"],
        answer: "Corneille"
    },
        {
            question: "Vous aimez Fanfan",
            options: ["oui","Non"],
            answer: "oui"
        },
    {
        question: "Quelle œuvre a été écrite par Racine en 1677 ?",
        options: ["Andromaque", "Phèdre", "Le Misanthrope"],
        answer: "Phèdre"
    },
    {
        question: "Quel philosophe a écrit le 'Discours de la méthode' en 1637 ?",
        options: ["Descartes", "Voltaire", "Pascal"],
        answer: "Descartes"
    },
    {
        question: "En quelle année a été créée l'Académie Française ?",
        options: ["1640", "1635", "1650"],
        answer: "1635"
    },
    {
        question: "Quel est le surnom de Louis XIV ?",
        options: ["Le Roi Sombre", "Le Roi Soleil", "Le Roi Magnifique"],
        answer: "Le Roi Soleil"
    },
    {
        question: "Quel mouvement littéraire est marqué par l'exubérance et l'émotion ?",
        options: ["Classicisme", "Baroque", "Préciosité"],
        answer: "Baroque"
    },
    {
        question: "Quel est l'auteur qui a écrit 'Le Cid' ?",
        options: ["Pierre Corneille", "Fanfan Techno", "René Rescates"],
        answer: "Pierre Corneille"
    },
    {
        question: "Qui est l'auteur de 'Phèdre' ?",
        options: ["Jean Racine", "Pierre Corneille", "Molière", "Voltaire"],
        answer: "Jean Racine"
    },
    {
        question: "Quelle œuvre de Molière critique les mœurs de la société ?",
        options: ["Tartuffe", "Le Cid", "Andromaque", "Les Fourberies de Scapin"],
        answer: "Tartuffe"
    },
    {
        question: "Quand a été publié 'Le Cid' de Pierre Corneille ?",
        options: ["1637", "1652", "1670", "1625"],
        answer: "1637"
    },
    {
        question: "Quel mouvement littéraire est associé à l'œuvre 'Le Cid' ?",
        options: ["Le Classicisme", "Le Baroque", "Le Précieux", "Le Romantisme"],
        answer: "Le Classicisme"
    },
    {
        question: "Quel philosophe a écrit 'Le Discours de la méthode' ?",
        options: ["Descartes", "Pascal", "Voltaire", "Rousseau"],
        answer: "Descartes"
    },
    {
        question: "Quel auteur a écrit 'Les Pensées' ?",
        options: ["Blaise Pascal", "Jean Racine", "François de La Rochefoucauld", "Michel de Montaigne"],
        answer: "Blaise Pascal"
    },
    {
        question: "Quel est le titre de l'œuvre célèbre de Molière qui se moque des médecins ?",
        options: ["Le Médecin malgré lui", "Tartuffe", "Les Précieuses ridicules", "L'Avare"],
        answer: "Le Médecin malgré lui"
    },
    {
        question: "Quel écrivain est connu pour ses maximes et ses pensées sur la nature humaine ?",
        options: ["La Rochefoucauld", "Racine", "Voltaire", "Corneille"],
        answer: "La Rochefoucauld"
    },
    {
        question: "Qui a écrit 'L'Art de la guerre' et influencé la stratégie militaire ?",
        options: ["Machiavel", "Sun Tzu", "François de La Rochefoucauld", "Richelieu"],
        answer: "Machiavel"
    },
    {
        question: "Quel auteur a écrit 'Les Fables' ?",
        options: ["Jean de La Fontaine", "Racine", "Molière", "Corneille"],
        answer: "Jean de La Fontaine"
    },
    {
        question: "Quelle œuvre de Racine raconte la tragédie d'une reine amoureuse de son beau-fils ?",
        options: ["Andromaque", "Phèdre", "Iphigénie", "Esther"],
        answer: "Phèdre"
    },
    {
        question: "Qui est l'auteur de 'Le Misanthrope' ?",
        options: ["Molière", "Corneille", "Racine", "La Fontaine"],
        answer: "Molière"
    },
    {
        question: "Quand Louis XIV monte-t-il sur le trône ?",
        options: ["1643", "1661", "1670", "1682"],
        answer: "1643"
    },
    {
        question: "Quel est le surnom de Louis XIV ?",
        options: ["Le Roi Soleil", "Le Roi Sage", "Le Grand Monarque", "Le Roi Philosophe"],
        answer: "Le Roi Soleil"
    },
    {
        question: "Quelle est la principale caractéristique du Classicisme ?",
        options: ["L'harmonie et l'équilibre", "L'exubérance et le chaos", "L'émotion et le sentiment", "La rébellion et la rupture"],
        answer: "L'harmonie et l'équilibre"
    },
    {
        question: "Quel poème épique de Corneille décrit une victoire contre les Romains ?",
        options: ["Le Cid", "Les Horaces", "Le Menteur", "L'Illusion comique"],
        answer: "Les Horaces"
    },
    {
        question: "Quel écrivain du XVIIᵉ siècle a écrit 'Le Roman comique' ?",
        options: ["Scarron", "Voltaire", "La Fontaine", "Molière"],
        answer: "Scarron"
    },
    {
        question: "Quel roi de France est à l'origine de la construction du château de Versailles ?",
        options: ["Louis XIV", "Louis XIII", "François Ier", "Charles IX"],
        answer: "Louis XIV"
    },
    {
        question: "Quel auteur baroque est célèbre pour son style orné et sa recherche de la beauté ?",
        options: ["Pierre Corneille", "Jean Racine", "Louis de Gomberville", "Théophile de Viau"],
        answer: "Théophile de Viau"
    },
    {
        question: "Quel mouvement littéraire valorise la simplicité et la raison au XVIIᵉ siècle ?",
        options: ["Classicisme", "Baroque", "Précieux", "Romantisme"],
        answer: "Classicisme"
    },
    {
        question: "Qui est l'auteur de la comédie 'Les Précieuses ridicules' ?",
        options: ["Molière", "Racine", "Corneille", "La Fontaine"],
        answer: "Molière"
    },
    {
        question: "Quel événement a marqué le début du règne de Louis XIV ?",
        options: ["La Fronde", "La Révolution française", "La prise de la Bastille", "La guerre de Cent Ans"],
        answer: "La Fronde"
    },
    {
        question: "Qui a écrit 'Le Bourgeois gentilhomme' ?",
        options: ["Molière", "Corneille", "Racine", "La Fontaine"],
        answer: "Molière"
    },
    {
        question: "Quand a été créé l'Académie française ?",
        options: ["1635", "1600", "1685", "1622"],
        answer: "1635"
    },
    {
        question: "Quel mouvement artistique est caractérisé par l'exubérance et le contraste ?",
        options: ["Baroque", "Rococo", "Classicisme", "Réalisme"],
        answer: "Baroque"
    },
    {
        question: "Quel est le nom du livre de Jean de La Fontaine qui regroupe ses célèbres récits ?",
        options: ["Fables", "Contes", "Les Belles-lettres", "Romans et nouvelles"],
        answer: "Fables"
    },
    {
        question: "Dans quelle œuvre Molière fait-il une critique de l'hypocrisie religieuse ?",
        options: ["Tartuffe", "L'Avare", "Le Misanthrope", "Le Médecin malgré lui"],
        answer: "Tartuffe"
    },
    {
        question: "Quel auteur du XVIIᵉ siècle est reconnu pour son œuvre 'Candide' ?",
        options: ["Voltaire", "Racine", "La Fontaine", "Corneille"],
        answer: "Voltaire"
    },
    {
        question: "En quelle année Louis XIV a-t-il terminé la construction de Versailles ?",
        options: ["1682", "1675", "1661", "1700"],
        answer: "1682"
    },
    {
        question: "Quelle œuvre de Racine est inspirée de la mythologie grecque ?",
        options: ["Phèdre", "Andromaque", "Iphigénie", "Les Plaideurs"],
        answer: "Andromaque"
    },
    {
        question: "Quel écrivain est considéré comme un représentant majeur du mouvement préciosité ?",
        options: ["Madeleine de Scudéry", "Molière", "Descartes", "Voltaire"],
        answer: "Madeleine de Scudéry"
    },
    {
        question: "Quand la bataille de Rocroi, marquant une victoire importante pour la France, a-t-elle eu lieu ?",
        options: ["1643", "1685", "1620", "1600"],
        answer: "1643"
    }
];

let currentQuestionIndex = 0;
let timer;
let timeLeft = 7;
let userAnswers = [];

function startQuiz() {
    let quizContainer = document.getElementById('quiz-container');
    quizContainer.innerHTML = '';

    // Afficher la question actuelle
    displayQuestion(currentQuestionIndex);
}

function displayQuestion(index) {
    let quizContainer = document.getElementById('quiz-container');
    quizContainer.innerHTML = '';

    let q = quizQuestions[index];
    
    let questionHTML = `<div class="quiz-question" id="question-${index}">
        <p><strong>Q${index + 1}:</strong> ${q.question}</p>
        <ul>`;

    q.options.forEach((option) => {
        questionHTML += `<li>
                            <input type="radio" name="question${index}" value="${option}" onclick="recordAnswer(${index}, '${option}')"> ${option}
                          </li>`;
    });

    questionHTML += `</ul>
                     <p id="timer-${index}">Temps restant: ${timeLeft} secondes</p>
                     </div>`;
    quizContainer.innerHTML = questionHTML;

    // Démarre le timer pour cette question
    startTimer(index);
}

function startTimer(index) {
    let timerDisplay = document.getElementById(`timer-${index}`);
    timeLeft = 7;

    timer = setInterval(() => {
        if (timeLeft <= 0) {
            clearInterval(timer);
            timerDisplay.textContent = 'Temps écoulé!';
            disableOptions(index); // Désactiver les réponses après le temps écoulé
            recordAnswer(index); // Sauvegarder la réponse
            nextQuestion(); // Passer à la question suivante
        } else {
            timerDisplay.textContent = `Temps restant: ${timeLeft} secondes`;
            timeLeft--;
        }
    }, 1000);
}

function disableOptions(index) {
    let options = document.querySelectorAll(`input[name="question${index}"]`);
    options.forEach(option => {
        option.disabled = true; // Désactive toutes les options
    });
}

function recordAnswer(index, answer) {
    // Enregistrer la réponse de l'utilisateur
    if (answer) {
        userAnswers[index] = answer;
    }
}

function nextQuestion() {
    // Passer à la question suivante ou soumettre le quiz si c'est la dernière question
    if (currentQuestionIndex < quizQuestions.length - 1) {
        currentQuestionIndex++;
        displayQuestion(currentQuestionIndex);
    } else {
        submitQuiz();
    }
}

function submitQuiz() {
    let score = 0;

    // Calculer le score de l'utilisateur
    quizQuestions.forEach((q, index) => {
        let userAnswer = userAnswers[index];
        if (userAnswer === q.answer) {
            score++;
        }
    });

    setTimeout(() => {
        alert(`Vous avez obtenu ${score} sur ${quizQuestions.length} !`);
    }, 500); // Délai pour laisser le temps aux animations
}
