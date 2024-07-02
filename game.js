
const questions = [
    const questions = {
        easy: [
            {
                question: {
                    es: "¿Qué es OWASP?",
                    en: "What is OWASP?"
                },
                options: {
                    es: ["Una organización sin fines de lucro que trabaja para mejorar la seguridad del software.", "Una empresa de desarrollo de software.", "Un conjunto de herramientas para programadores.", "Una técnica de hacking."],
                    en: ["A non-profit organization that works to improve software security.", "A software development company.", "A set of tools for programmers.", "A hacking technique."]
                },
                answer: 0
            },
            {
                question: {
                    es: "¿Qué es una inyección SQL?",
                    en: "What is SQL injection?"
                },
                options: {
                    es: ["Un tipo de café", "Un ataque que inserta código malicioso en consultas de bases de datos", "Un método de encriptación", "Una técnica de programación"],
                    en: ["A type of coffee", "An attack that inserts malicious code into database queries", "An encryption method", "A programming technique"]
                },
                answer: 1
            },
            {
                question: {
                    es: "¿Qué es la falsificación de solicitudes del lado del servidor (SSRF)?",
                    en: "What is Server-Side Request Forgery (SSRF)?"
                },
                options: {
                    es: ["Un ataque que fuerza al servidor a realizar solicitudes no autorizadas.", "Un método de autenticación.", "Una vulnerabilidad en el cifrado.", "Un tipo de ataque DDoS."],
                    en: ["An attack that forces the server to make unauthorized requests.", "An authentication method.", "A vulnerability in encryption.", "A type of DDoS attack."]
                },
                answer: 0
            },
            {
                question: {
                    es: "¿Cuál es una técnica para prevenir la inyección SQL?",
                    en: "What is a technique to prevent SQL injection?"
                },
                options: {
                    es: ["Usar consultas preparadas.", "Usar contraseñas fuertes.", "Deshabilitar cookies.", "Cifrar datos en reposo."],
                    en: ["Using prepared statements.", "Using strong passwords.", "Disabling cookies.", "Encrypting data at rest."]
                },
                answer: 0
            },
            {
                question: {
                    es: "¿Qué es el control de acceso roto?",
                    en: "What is Broken Access Control?"
                },
                options: {
                    es: ["Permitir que usuarios actúen fuera de sus permisos previstos.", "Usar contraseñas débiles.", "No encriptar datos.", "No actualizar el software."],
                    en: ["Allowing users to act outside of their intended permissions.", "Using weak passwords.", "Not encrypting data.", "Not updating software."]
                },
                answer: 0
            },
            // Más preguntas fáciles...
        ],
        medium: [
            {
                question: {
                    es: "¿Qué es el cross-site scripting (XSS)?",
                    en: "What is cross-site scripting (XSS)?"
                },
                options: {
                    es: ["Un ataque que permite a los atacantes inyectar scripts en páginas web vistas por otros usuarios.", "Un método de autenticación multifactor.", "Una técnica para cifrar datos.", "Una vulnerabilidad que permite acceso directo al servidor."],
                    en: ["An attack that allows attackers to inject scripts into web pages viewed by other users.", "A multi-factor authentication method.", "A technique for encrypting data.", "A vulnerability that allows direct server access."]
                },
                answer: 0
            },
            {
                question: {
                    es: "¿Cómo se puede mitigar un ataque XSS?",
                    en: "How can an XSS attack be mitigated?"
                },
                options: {
                    es: ["Validando y escapando entradas del usuario.", "Usando contraseñas largas.", "Deshabilitando la autenticación multifactor.", "Encriptando datos en reposo."],
                    en: ["Validating and escaping user inputs.", "Using long passwords.", "Disabling multi-factor authentication.", "Encrypting data at rest."]
                },
                answer: 0
            },
            {
                question: {
                    es: "¿Qué es la configuración de seguridad incorrecta?",
                    en: "What is Security Misconfiguration?"
                },
                options: {
                    es: ["Mantener configuraciones predeterminadas inseguras o sin asegurar.", "Usar algoritmos criptográficos fuertes.", "Implementar autenticación multifactor.", "Mantener el software actualizado."],
                    en: ["Maintaining default insecure or unsecure configurations.", "Using strong cryptographic algorithms.", "Implementing multi-factor authentication.", "Keeping software updated."]
                },
                answer: 0
            },
            {
                question: {
                    es: "¿Cuál es una técnica eficaz para prevenir la falsificación de solicitudes del lado del servidor (SSRF)?",
                    en: "What is an effective technique to prevent Server-Side Request Forgery (SSRF)?"
                },
                options: {
                    es: ["Validar y filtrar todas las URLs y direcciones IP permitidas en las solicitudes del servidor.", "Usar contraseñas largas.", "Cifrar datos en reposo.", "Deshabilitar la autenticación multifactor."],
                    en: ["Validating and filtering all allowed URLs and IP addresses in server requests.", "Using long passwords.", "Encrypting data at rest.", "Disabling multi-factor authentication."]
                },
                answer: 0
            },
            {
                question: {
                    es: "¿Qué es una consecuencia de no asegurar adecuadamente el control de acceso?",
                    en: "What is a consequence of not properly securing access control?"
                },
                options: {
                    es: ["Permitir el acceso no autorizado a datos sensibles.", "Aumentar la velocidad del sitio web.", "Reducir el tamaño del código.", "Mejorar la experiencia del usuario."],
                    en: ["Allowing unauthorized access to sensitive data.", "Increasing website speed.", "Reducing code size.", "Improving user experience."]
                },
                answer: 0
            },
            // Más preguntas de nivel medio...
        ],
        hard: [
            {
                question: {
                    es: "¿Qué es un ataque de día cero?",
                    en: "What is a zero-day attack?"
                },
                options: {
                    es: ["Un ataque que explota una vulnerabilidad desconocida y sin parche.", "Un ataque que ocurre al final del día.", "Un tipo de ataque DDoS.", "Una técnica de autenticación."],
                    en: ["An attack that exploits an unknown and unpatched vulnerability.", "An attack that occurs at the end of the day.", "A type of DDoS attack.", "An authentication technique."]
                },
                answer: 0
            },
            {
                question: {
                    es: "¿Qué es el cross-site request forgery (CSRF)?",
                    en: "What is cross-site request forgery (CSRF)?"
                },
                options: {
                    es: ["Un ataque que fuerza a un usuario a realizar acciones no deseadas en una aplicación web en la que está autenticado.", "Una técnica para proteger contra XSS.", "Un método de encriptación.", "Una técnica para optimizar el rendimiento del sitio web."],
                    en: ["An attack that forces a user to execute unwanted actions on a web application in which they're authenticated.", "A technique to protect against XSS.", "An encryption method.", "A technique to optimize website performance."]
                },
                answer: 0
            },
            {
                question: {
                    es: "¿Cuál es un ejemplo de código incorrecto susceptible a inyección SQL?",
                    en: "What is an example of incorrect code susceptible to SQL injection?"
                },
                options: {
                    es: ["const query = `SELECT * FROM users WHERE username = '${username}' AND password = '${password}'`;", "const query = 'SELECT * FROM users WHERE username = ? AND password = ?';", "const query = 'SELECT * FROM users WHERE username = :username AND password = :password';", "const query = 'SELECT * FROM users WHERE username = :username AND password = :password';"],
                    en: ["const query = `SELECT * FROM users WHERE username = '${username}' AND password = '${password}'`;", "const query = 'SELECT * FROM users WHERE username = ? AND password = ?';", "const query = 'SELECT * FROM users WHERE username = :username AND password = :password';", "const query = 'SELECT * FROM users WHERE username = :username AND password = :password';"]
                },
                answer: 0
            },
            {
                question: {
                    es: "¿Qué es la exposición de datos sensibles?",
                    en: "What is sensitive data exposure?"
                },
                options: {
                    es: ["Cuando datos sensibles no se protegen adecuadamente y están accesibles a atacantes.", "Un tipo de ataque DDoS.", "Un método de autenticación multifactor.", "Una técnica para mejorar el rendimiento del sitio web."],
                    en: ["When sensitive data is not properly protected and is accessible to attackers.", "A type of DDoS attack.", "A multi-factor authentication method.", "A technique to improve website performance."]
                },
                answer: 0
            },
            {
                question: {
                    es: "¿Cuál es una consecuencia de la exposición de datos sensibles?",
                    en: "What is a consequence of sensitive data exposure?"
                },
                options: {
                    es: ["Robo de identidad.", "Mejora del rendimiento del sitio web.", "Optimización de consultas de base de datos.", "Mejora de la experiencia del usuario."],
                    en: ["Identity theft.", "Improved website performance.", "Database query optimization.", "Improved user experience."]
                },
                answer: 0
            },
            // Más preguntas de nivel difícil...
        ]
    };
    
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
