const questions = {
    "easy": [
        {
            "question": {
                "es": "¿Qué es una inyección SQL?",
                "en": "What is SQL injection?"
            },
            "options": {
                "es": ["Un tipo de café", "Un ataque que inserta código malicioso en consultas de bases de datos", "Un método de encriptación", "Una técnica de programación"],
                "en": ["A type of coffee", "An attack that inserts malicious code into database queries", "An encryption method", "A programming technique"]
            },
            "answer": 1
        },
        {
            "question": {
                "es": "¿Qué es OWASP?",
                "en": "What is OWASP?"
            },
            "options": {
                "es": ["Una organización sin fines de lucro que trabaja para mejorar la seguridad del software.", "Una empresa de desarrollo de software.", "Un conjunto de herramientas para programadores.", "Una técnica de hacking."],
                "en": ["A non-profit organization that works to improve software security.", "A software development company.", "A set of tools for programmers.", "A hacking technique."]
            },
            "answer": 0
        },
        {
            "question": {
                "es": "¿Qué es el OWASP Top 10?",
                "en": "What is the OWASP Top 10?"
            },
            "options": {
                "es": ["Una lista de los diez mejores desarrolladores de software.", "Un estándar de concientización sobre la seguridad en aplicaciones web.", "Un ranking de las mejores aplicaciones web.", "Una guía para el desarrollo de juegos."],
                "en": ["A list of the top ten software developers.", "A web application security awareness standard.", "A ranking of the best web applications.", "A guide for game development."]
            },
            "answer": 1
        },
        // Add more easy questions here
    ],
    "medium": [
        {
            "question": {
                "es": "¿Qué es la falsificación de solicitudes del lado del servidor (SSRF)?",
                "en": "What is Server-Side Request Forgery (SSRF)?"
            },
            "options": {
                "es": ["Un ataque donde un servidor hace solicitudes no autorizadas a otros servicios.", "Una técnica para mejorar la seguridad del servidor.", "Un tipo de inyección SQL.", "Un método de autenticación."],
                "en": ["An attack where a server makes unauthorized requests to other services.", "A technique to enhance server security.", "A type of SQL injection.", "An authentication method."]
            },
            "answer": 0
        },
        {
            "question": {
                "es": "¿Cómo puede un desarrollador mitigar la inyección SQL?",
                "en": "How can a developer mitigate SQL injection?"
            },
            "options": {
                "es": ["Usando consultas preparadas.", "Escribiendo código en C.", "Evitando el uso de bases de datos.", "Usando solo variables globales."],
                "en": ["Using prepared statements.", "Writing code in C.", "Avoiding the use of databases.", "Using only global variables."]
            },
            "answer": 0
        },
        {
            "question": {
                "es": "¿Cuál es un ejemplo de código incorrecto susceptible a inyección SQL?",
                "en": "What is an example of incorrect code susceptible to SQL injection?"
            },
            "options": {
                "es": ["const query = `SELECT * FROM users WHERE username = '${username}' AND password = '${password}'`;", "const query = 'SELECT * FROM users WHERE username = ? AND password = ?';", "const query = 'SELECT * FROM users WHERE 1=1';", "const query = 'SELECT * FROM users;'"],
                "en": ["const query = `SELECT * FROM users WHERE username = '${username}' AND password = '${password}'`;", "const query = 'SELECT * FROM users WHERE username = ? AND password = ?';", "const query = 'SELECT * FROM users WHERE 1=1';", "const query = 'SELECT * FROM users;'"]
            },
            "answer": 0
        },
        // Add more medium questions here
    ],
    "hard": [
        {
            "question": {
                "es": "¿Cuál es una técnica eficaz para prevenir la falsificación de solicitudes del lado del servidor (SSRF)?",
                "en": "What is an effective technique to prevent Server-Side Request Forgery (SSRF)?"
            },
            "options": {
                "es": ["Validar y filtrar URLs entrantes.", "Usar contraseñas largas.", "Desactivar la autenticación multifactor.", "Mantener el software desactualizado."],
                "en": ["Validating and filtering incoming URLs.", "Using long passwords.", "Disabling multi-factor authentication.", "Keeping software outdated."]
            },
            "answer": 0
        },
        {
            "question": {
                "es": "¿Qué es el control de acceso roto?",
                "en": "What is broken access control?"
            },
            "options": {
                "es": ["Permitir que usuarios actúen fuera de sus permisos previstos.", "Un ataque de fuerza bruta.", "Un método de encriptación.", "Un tipo de inyección."],
                "en": ["Allowing users to act outside of their intended permissions.", "A brute force attack.", "An encryption method.", "A type of injection."]
            },
            "answer": 0
        },
        {
            "question": {
                "es": "¿Por qué es importante el OWASP Top 10?",
                "en": "Why is the OWASP Top 10 important?"
            },
            "options": {
                "es": ["Ayuda a identificar y mitigar los riesgos de seguridad más significativos.", "Es un ranking de los mejores desarrolladores.", "Es un curso de programación.", "Es un método de encriptación."],
                "en": ["It helps identify and mitigate the most significant security risks.", "It is a ranking of the best developers.", "It is a programming course.", "It is an encryption method."]
            },
            "answer": 0
        },
        // Add more hard questions here
    ]
};

let currentQuestionIndex = 0;
let currentLevel = 'easy';
let lives = 3;
let score = 0;
let streak = 0;
let language = 'es';

const questionContainer = document.getElementById('question-container');
const optionsContainer = document.getElementById('options');
const nextButton = document.getElementById('next-button');
const languageSelect = document.getElementById('language-select');

languageSelect.addEventListener('change', (event) => {
    language = event.target.value;
    showQuestion();
});

nextButton.addEventListener('click', nextQuestion);

function showQuestion() {
    const currentQuestion = questions[currentLevel][currentQuestionIndex];
    questionContainer.innerHTML = `<p>${currentQuestion.question[language]}</p>`;
    optionsContainer.innerHTML = '';
    currentQuestion.options[language].forEach((option, index) => {
        const li = document.createElement('li');
        li.innerHTML = `<button onclick="selectAnswer(${index})">${option}</button>`;
        optionsContainer.appendChild(li);
    });
}

function selectAnswer(selectedIndex) {
    const currentQuestion = questions[currentLevel][currentQuestionIndex];
    if (selectedIndex === currentQuestion.answer) {
        score += 100;
        streak++;
        if (streak % 3 === 0) {
            score += 50;
            alert(`¡Racha de ${streak}! Bonus de 50 puntos.`);
        }
    } else {
        lives--;
        streak = 0;
        alert(`Incorrecto. La respuesta correcta era: ${currentQuestion.options[language][currentQuestion.answer]}`);
        if (lives === 0) {
            gameOver();
            return;
        }
    }
    nextQuestion();
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex >= questions[currentLevel].length) {
        if (currentLevel === 'easy') {
            currentLevel = 'medium';
        } else if (currentLevel === 'medium') {
            currentLevel = 'hard';
        } else {
            alert('¡Felicidades! Has completado todos los niveles.');
            showLeaderboard();
            return;
        }
        currentQuestionIndex = 0;
    }
    showQuestion();
}

function gameOver() {
    alert(`Juego terminado. Tu puntuación final es: ${score}`);
    showLeaderboard();
}

function showLeaderboard() {
    alert(`--- Tabla de Puntuaciones ---\n1. TU - ${score}\n2. Bot1 - 1000\n3. Bot2 - 800\n4. Bot3 - 600\n5. Bot4 - 400`);
}

showQuestion();
