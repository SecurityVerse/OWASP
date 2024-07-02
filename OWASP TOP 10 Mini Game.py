import random
import time

class OWASPGame:
    def __init__(self):
        self.questions = {
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
                # Add more easy questions here
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
                # Add more medium questions here
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
                # Add more hard questions here
            ]
        }
        self.score = 0
        self.level = "easy"
        self.lives = 3
        self.streak = 0
        self.language = ""

    def set_language(self):
        while True:
            choice = input("Choose language / Elige idioma (en/es): ").lower()
            if choice in ['en', 'es']:
                self.language = choice
                break
            print("Please choose 'en' for English or 'es' for Spanish. / Por favor elige 'en' para inglés o 'es' para español.")

    def play(self):
        self.set_language()
        welcome_message = "Welcome to the advanced OWASP Web Security game!" if self.language == 'en' else "¡Bienvenido al juego avanzado de Seguridad Web basado en OWASP!"
        lives_message = "You have 3 lives. Good luck!" if self.language == 'en' else "Tienes 3 vidas. ¡Buena suerte!"
        print(welcome_message)
        print(lives_message)
        
        while self.lives > 0 and (self.level == "easy" or self.level == "medium" or (self.level == "hard" and len(self.questions["hard"]) > 0)):
            level_message = f"Current level: {self.level}" if self.language == 'en' else f"Nivel actual: {self.level}"
            lives_message = f"Remaining lives: {'❤️' * self.lives}" if self.language == 'en' else f"Vidas restantes: {'❤️' * self.lives}"
            score_message = f"Current score: {self.score}" if self.language == 'en' else f"Puntuación actual: {self.score}"
            print(f"\n{level_message}")
            print(lives_message)
            print(score_message)
            
            if not self.questions[self.level]:
                self.level = "medium" if self.level == "easy" else "hard"
                level_up_message = f"\nCongratulations! You've advanced to the {self.level} level." if self.language == 'en' else f"\n¡Felicidades! Has avanzado al nivel {self.level}."
                print(level_up_message)
                continue

            q = random.choice(self.questions[self.level])
            self.questions[self.level].remove(q)
            
            print("\n" + q["question"][self.language])
            for i, option in enumerate(q["options"][self.language]):
                print(f"{i+1}. {option}")
            
            start_time = time.time()
            while True:
                try:
                    answer_prompt = "Choose your answer (1-4): " if self.language == 'en' else "Elige tu respuesta (1-4): "
                    answer = int(input(answer_prompt)) - 1
                    if 0 <= answer < 4:
                        break
                    else:
                        invalid_message = "Please choose a number between 1 and 4." if self.language == 'en' else "Por favor, elige un número entre 1 y 4."
                        print(invalid_message)
                except ValueError:
                    invalid_message = "Please enter a valid number." if self.language == 'en' else "Por favor, ingresa un número válido."
                    print(invalid_message)
            end_time = time.time()
            
            if answer == q["answer"]:
                correct_message = "Correct!" if self.language == 'en' else "¡Correcto!"
                print(correct_message)
                points = self.calculate_points(end_time - start_time)
                self.score += points
                self.streak += 1
                if self.streak % 3 == 0:
                    bonus = self.streak // 3 * 50
                    streak_message = f"Streak of {self.streak}! Bonus of {bonus} points." if self.language == 'en' else f"¡Racha de {self.streak}! Bonus de {bonus} puntos."
                    print(streak_message)
                    self.score += bonus
                points_message = f"You've earned {points} points." if self.language == 'en' else f"Has ganado {points} puntos."
                print(points_message)
            else:
                incorrect_message = f"Incorrect. The correct answer was: {q['options'][self.language][q['answer']]}" if self.language == 'en' else f"Incorrecto. La respuesta correcta era: {q['options'][self.language][q['answer']]}"
                print(incorrect_message)
                self.lives -= 1
                self.streak = 0
                if self.lives == 0:
                    game_over_message = "You've lost all your lives!" if self.language == 'en' else "¡Has perdido todas tus vidas!"
                    print(game_over_message)
                    break
            
            time.sleep(1)  # Short pause for better readability

        final_score_message = f"\nGame over. Your final score is: {self.score}" if self.language == 'en' else f"\nJuego terminado. Tu puntuación final es: {self.score}"
        print(final_score_message)
        if self.lives > 0:
            congrats_message = "Congratulations! You've completed all levels." if self.language == 'en' else "¡Felicidades! Has completado todos los niveles."
            print(congrats_message)
        self.show_leaderboard()

    def calculate_points(self, time_taken):
        if self.level == "easy":
            base_points = 100
        elif self.level == "medium":
            base_points = 200
        else:
            base_points = 300
        
        if time_taken < 10:
            return base_points
        elif time_taken < 20:
            return int(base_points * 0.8)
        else:
            return int(base_points * 0.6)

    def show_leaderboard(self):
        leaderboard_title = "\n--- Leaderboard ---" if self.language == 'en' else "\n--- Tabla de Puntuaciones ---"
        print(leaderboard_title)
        you_text = "YOU" if self.language == 'en' else "TU"
        print(f"1. {you_text} - ", self.score)
        print("2. Bot1 - 1000")
        print("3. Bot2 - 800")
        print("4. Bot3 - 600")
        print("5. Bot4 - 400")

if __name__ == "__main__":
    game = OWASPGame()
    game.play()
