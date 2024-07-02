
const questions = [
    {
        question: "¿Qué es una inyección SQL?",
        options: [
            "Un tipo de café", 
            "Un ataque que inserta código malicioso en consultas de bases de datos", 
            "Un método de encriptación", 
            "Una técnica de programación"
        ],
        answer: 1
    },
    {
        question: "¿Qué es OWASP?",
        options: [
            "Una organización sin fines de lucro que trabaja para mejorar la seguridad del software.", 
            "Una empresa de desarrollo de software.", 
            "Un conjunto de herramientas para programadores.", 
            "Una técnica de hacking."
        ],
        answer: 0
    },
    {
        question: "¿Qué es el OWASP Top 10?",
        options: [
            "Una lista de los diez mejores desarrolladores de software.", 
            "Un estándar de concientización sobre la seguridad en aplicaciones web.", 
            "Un ranking de las mejores aplicaciones web.", 
            "Una guía para el desarrollo de juegos."
        ],
        answer: 1
    },
    {
        question: "¿Qué es la falsificación de solicitudes del lado del servidor (SSRF)?",
        options: [
            "Un ataque donde un servidor hace solicitudes no autorizadas a otros servicios.", 
            "Una técnica para mejorar la seguridad del servidor.", 
            "Un tipo de inyección SQL.", 
            "Un método de autenticación."
        ],
        answer: 0
    },
    {
        question: "¿Cómo puede un desarrollador mitigar la inyección SQL?",
        options: [
            "Usando consultas preparadas.", 
            "Escribiendo código en C.", 
            "Evitando el uso de bases de datos.", 
            "Usando solo variables globales."
        ],
        answer: 0
    },
    {
        question: "¿Cuál es un ejemplo de código incorrecto susceptible a inyección SQL?",
        options: [
            "const query = `SELECT * FROM users WHERE username = '${username}' AND password = '${password}'`;", 
            "const query = 'SELECT * FROM users WHERE username = ? AND password = ?';", 
            "const query = 'SELECT * FROM users WHERE 1=1';", 
            "const query = 'SELECT * FROM users;'"
        ],
        answer: 0
    },
    {
        question: "¿Cuál es una técnica eficaz para prevenir la falsificación de solicitudes del lado del servidor (SSRF)?",
        options: [
            "Validar y filtrar URLs entrantes.", 
            "Usar contraseñas largas.", 
            "Desactivar la autenticación multifactor.", 
            "Mantener el software desactualizado."
        ],
        answer: 0
    },
    {
        question: "¿Qué es el control de acceso roto?",
        options: [
            "Permitir que usuarios actúen fuera de sus permisos previstos.", 
            "Un ataque de fuerza bruta.", 
            "Un método de encriptación.", 
            "Un tipo de inyección."
        ],
        answer: 0
    },
    {
        question: "¿Por qué es importante el OWASP Top 10?",
        options: [
            "Ayuda a identificar y mitigar los riesgos de seguridad más significativos.", 
            "Es un ranking de los mejores desarrolladores.", 
            "Es un curso de programación.", 
            "Es un método de encriptación."
        ],
        answer: 0
    }
];

let currentQuestionIndex = 0;

function loadQuestion() {
    const questionElement = document.getElementById('question');
    const optionsElement = document.getElementById('options');
    const feedbackElement = document.getElementById('feedback');
    
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
    
    optionsElement.innerHTML = '';
    feedbackElement.textContent = '';
    
    currentQuestion.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.textContent = option;
        button.classList.add('option');
        button.addEventListener('click', () => checkAnswer(index));
        optionsElement.appendChild(button);
    });
}

function checkAnswer(selectedIndex) {
    const feedbackElement = document.getElementById('feedback');
    const currentQuestion = questions[currentQuestionIndex];
    
    if (selectedIndex === currentQuestion.answer) {
        feedbackElement.textContent = '¡Correcto!';
        feedbackElement.style.color = 'green';
    } else {
        feedbackElement.textContent = `Incorrecto. La respuesta correcta es: ${currentQuestion.options[currentQuestion.answer]}`;
        feedbackElement.style.color = 'red';
    }
    
    currentQuestionIndex++;
    
    if (currentQuestionIndex < questions.length) {
        setTimeout(loadQuestion, 2000); // Load next question after 2 seconds
    } else {
        setTimeout(() => {
            feedbackElement.textContent = '¡Has completado todas las preguntas!';
            feedbackElement.style.color = 'blue';
        }, 2000);
    }
}

document.addEventListener('DOMContentLoaded', loadQuestion);
