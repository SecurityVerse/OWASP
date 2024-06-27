const owasp_data = {
    'A1': {
        'OWASP Top 10': 'Control de Acceso Roto | Broken Access Control',
        'Tipo de Ataque': 'Fallos de autorización.',
        'Consecuencia del Ataque': 'Acceso no autorizado a datos o funcionalidades.',
        'Ejemplo Simple': 'Un usuario cambia la URL para acceder a la cuenta de otro usuario sin permiso.',
        'Cumple': [
            {
                'Descripcion': 'Verificar la autenticación y autorización correctamente.',
                'Codigo': 'if (user.isAuthenticated && user.hasPermission("viewPage")) {\n  // Permitir el acceso\n}',
                'ResultadoEsperado': 'Acceso autorizado únicamente a usuarios con permisos válidos.'
            }
        ],
        'No Cumple': [
            {
                'Descripcion': 'No verificar correctamente la autenticación y autorización.',
                'Codigo': 'if ("admin" in request.GET) {\n  // Permitir el acceso\n}',
                'ResultadoEsperado': 'Acceso no autorizado a datos o funcionalidades.'
            }
        ],
        'Imagen': 'img/a1.png'
    },
    'A2': {
        'OWASP Top 10': 'Fallos Criptográficos | Cryptographic Failures',
        'Tipo de Ataque': 'Encriptación débil.',
        'Consecuencia del Ataque': 'Robo o manipulación de datos.',
        'Ejemplo Simple': 'Un atacante descifra datos sensibles debido a algoritmos de encriptación débiles.',
        'Cumple': [
            {
                'Descripcion': 'Usar algoritmos criptográficos fuertes.',
                'Codigo': 'const encryptedData = encrypt(data, "AES-256");',
                'ResultadoEsperado': 'Los datos sensibles están protegidos contra accesos no autorizados.'
            }
        ],
        'No Cumple': [
            {
                'Descripcion': 'Usar algoritmos criptográficos débiles.',
                'Codigo': 'const encryptedData = encrypt(data, "DES");',
                'ResultadoEsperado': 'Los datos sensibles pueden ser descifrados y comprometidos fácilmente.'
            }
        ],
        'Imagen': 'img/a2.png'
    },
    'A3': {
        'OWASP Top 10': 'Inyección | Injection',
        'Tipo de Ataque': 'Inyección de código.',
        'Consecuencia del Ataque': 'Pérdida de datos, corrupción o acceso no autorizado.',
        'Ejemplo Simple': 'Un atacante envía código SQL malicioso en un campo de formulario para acceder a la base de datos.',
        'Cumple': [
            {
                'Descripcion': 'Usar consultas preparadas para evitar la inyección SQL.',
                'Codigo': 'const query = "SELECT * FROM users WHERE username = ? AND password = ?";',
                'ResultadoEsperado': 'Prevención de inyección de código malicioso y protección de la base de datos.'
            }
        ],
        'No Cumple': [
            {
                'Descripcion': 'Concatenación directa de strings en la consulta SQL, lo que permite la inyección SQL.',
                'Codigo': 'const query = `SELECT * FROM users WHERE username = "${username}" AND password = "${password}"`;',
                'ResultadoEsperado': 'La base de datos puede ser comprometida a través de la inyección de código malicioso.'
            }
        ],
        'Imagen': 'img/a3.png'
    },
    'A4': {
        'OWASP Top 10': 'Diseño Inseguro | Insecure Design',
        'Tipo de Ataque': 'Fallos de diseño o falta de controles de seguridad.',
        'Consecuencia del Ataque': 'Vulnerabilidades del sistema.',
        'Ejemplo Simple': 'Una aplicación carece de limitación de tasa en los intentos de inicio de sesión, permitiendo a un atacante realizar un ataque de fuerza bruta para adivinar contraseñas.',
        'Cumple': [
            {
                'Descripcion': 'Implementar bloqueo de cuenta temporal después de varios intentos fallidos de inicio de sesión.',
                'Codigo': '',
                'ResultadoEsperado': 'Protección contra ataques de fuerza bruta mediante la limitación de intentos de inicio de sesión.'
            }
        ],
        'No Cumple': [
            {
                'Descripcion': 'Permitir intentos de inicio de sesión ilimitados sin bloqueo o verificación de CAPTCHA.',
                'Codigo': '',
                'ResultadoEsperado': 'Mayor vulnerabilidad a ataques de fuerza bruta y compromiso de cuentas de usuario.'
            }
        ],
        'Imagen': 'img/a4.png'
    },
    'A5': {
        'OWASP Top 10': 'Configuración de Seguridad Incorrecta | Security Misconfiguration',
        'Tipo de Ataque': 'Aprovechar configuraciones predeterminadas inseguras o configuraciones incompletas.',
        'Consecuencia del Ataque': 'Acceso no autorizado o fuga de datos.',
        'Ejemplo Simple': 'Un servidor con configuraciones predeterminadas expone información sensible a los atacantes.',
        'Cumple': [
            {
                'Descripcion': 'Eliminar o cambiar las configuraciones predeterminadas de los servidores y servicios.',
                'Codigo': '',
                'ResultadoEsperado': 'Reducción del riesgo de acceso no autorizado y exposición de datos sensibles.'
            },
            {
                'Descripcion': 'Aplicar configuraciones mínimas de seguridad según las guías recomendadas por el fabricante.',
                'Codigo': '',
                'ResultadoEsperado': 'Garantizar configuraciones seguras y protección contra accesos no autorizados.'
            }
        ],
        'No Cumple': [
            {
                'Descripcion': 'Mantener configuraciones predeterminadas y no aplicar configuraciones mínimas de seguridad.',
                'Codigo': '',
                'ResultadoEsperado': 'Mayor riesgo de acceso no autorizado y exposición de información sensible.'
            }
        ],
        'Imagen': 'img/a5.png'
    },
    'A6': {
        'OWASP Top 10': 'Componentes Vulnerables y Desactualizados | Vulnerable and Outdated Components',
        'Tipo de Ataque': 'Uso de software vulnerable.',
        'Consecuencia del Ataque': 'Compromiso del sistema o violación de datos.',
        'Ejemplo Simple': 'Una aplicación usa una biblioteca con vulnerabilidades conocidas, permitiendo una explotación.',
        'Cumple': [
            {
                'Descripcion': 'Actualizar regularmente todas las bibliotecas y componentes de software a las últimas versiones seguras.',
                'Codigo': '',
                'ResultadoEsperado': 'Reducción de la exposición a vulnerabilidades conocidas mediante actualizaciones continuas.'
            }
        ],
        'No Cumple': [
            {
                'Descripcion': 'Ignorar las actualizaciones de software y bibliotecas, dejando versiones antiguas y vulnerables en producción.',
                'Codigo': '',
                'ResultadoEsperado': 'Mayor riesgo de explotación debido a componentes desactualizados.'
            }
        ],
        'Imagen': 'img/a6.png'
    },
    'A7': {
        'OWASP Top 10': 'Fallos de Identificación y Autenticación | Identification and Authentication Failures',
        'Tipo de Ataque': 'Problemas de autenticación.',
        'Consecuencia del Ataque': 'Suplantación de identidad o acceso no autorizado.',
        'Ejemplo Simple': 'Un atacante usa relleno de credenciales para obtener acceso a una cuenta debido a que la aplicación no hace cumplir políticas de contraseñas fuertes o autenticación multifactor.',
        'Cumple': [
            {
                'Descripcion': 'Implementar autenticación multifactor (MFA) para todas las cuentas de usuario.',
                'Codigo': '',
                'ResultadoEsperado': 'Mayor seguridad de las cuentas mediante autenticación multifactor.'
            }
        ],
        'No Cumple': [
            {
                'Descripcion': 'Permitir contraseñas débiles o predecibles sin requerir una combinación de letras, números y caracteres especiales.',
                'Codigo': '',
                'ResultadoEsperado': 'Mayor riesgo de compromiso de cuentas debido a la falta de políticas de contraseñas fuertes.'
            }
        ],
        'Imagen': 'img/a7.png'
    },
    'A8': {
        'OWASP Top 10': 'Fallos de Integridad de Software y Datos | Software and Data Integrity Failures',
        'Tipo de Ataque': 'Manipulación de software y datos.',
        'Consecuencia del Ataque': 'Compromiso de la integridad de los datos.',
        'Ejemplo Simple': 'Uso de bibliotecas de terceros no verificadas.',
        'Cumple': [
            {
                'Descripcion': 'Verificar la integridad de los paquetes.',
                'Codigo': 'const hash = crypto.createHash("sha256").update(packageData).digest("hex");',
                'ResultadoEsperado': 'Garantizar la integridad de los datos y software mediante la verificación de paquetes.'
            }
        ],
        'No Cumple': [
            {
                'Descripcion': 'No verificar la integridad de los paquetes.',
                'Codigo': 'Instalar paquetes sin verificar la integridad.',
                'ResultadoEsperado': 'Riesgo de manipulación y compromiso de datos y software.'
            }
        ],
        'Imagen': 'img/a8.png'
    },
    'A9': {
        'OWASP Top 10': 'Fallos en el Registro y Monitoreo de Seguridad | Security Logging and Monitoring Failures',
        'Tipo de Ataque': 'Registro y monitoreo inadecuados.',
        'Consecuencia del Ataque': 'Violaciones o ataques no detectados.',
        'Ejemplo Simple': 'Ocurre una violación que pasa desapercibida debido a la falta de monitoreo efectivo.',
        'Cumple': [
            {
                'Descripcion': 'Implementar registro y monitoreo continuo de eventos de seguridad críticos.',
                'Codigo': '',
                'ResultadoEsperado': 'Detección y respuesta efectiva a incidentes de seguridad mediante monitoreo continuo.'
            }
        ],
        'No Cumple': [
            {
                'Descripcion': 'No registrar o monitorizar eventos críticos de seguridad, dejando las actividades maliciosas sin detectar.',
                'Codigo': '',
                'ResultadoEsperado': 'Mayor riesgo de violaciones de seguridad no detectadas y sin respuesta.'
            }
        ],
        'Imagen': 'img/a9.png'
    },
    'A10': {
        'OWASP Top 10': 'Falsificación de Solicitudes del Lado del Servidor (SSRF) | Server-Side Request Forgery (SSRF)',
        'Tipo de Ataque': 'Falsificación de solicitudes de servidor.',
        'Consecuencia del Ataque': 'Acceso no autorizado a sistemas internos.',
        'Ejemplo Simple': 'Un atacante engaña al servidor para que haga solicitudes a servicios internos.',
        'Cumple': [
            {
                'Descripcion': 'Validar y filtrar las URLs y direcciones IP permitidas en las solicitudes del servidor.',
                'Codigo': 'if (isValidUrl(requestedUrl)) {\n  // Permitir solicitud\n}',
                'ResultadoEsperado': 'Prevención de solicitudes maliciosas mediante la validación y filtrado de URLs y direcciones IP.'
            }
        ],
        'No Cumple': [
            {
                'Descripcion': 'Permitir solicitudes sin validación o filtrado.',
                'Codigo': 'fetch(requestedUrl);',
                'ResultadoEsperado': 'Mayor riesgo de acceso no autorizado a sistemas internos debido a solicitudes no validadas.'
            }
        ],
        'Imagen': 'img/a10.png'
    }
};

const owasp_data_en = {
    'A1': {
        'OWASP Top 10': 'Broken Access Control | Control de Acceso Roto',
        'Tipo de Ataque': 'Authorization Failures.',
        'Consecuencia del Ataque': 'Unauthorized access to data or functionalities.',
        'Ejemplo Simple': 'A user changes the URL to access another user\'s account without permission.',
        'Cumple': [
            {
                'Descripcion': 'Correctly verify authentication and authorization.',
                'Codigo': 'if (user.isAuthenticated && user.hasPermission("viewPage")) {\n  // Allow access\n}',
                'ResultadoEsperado': 'Access authorized only to users with valid permissions.'
            }
        ],
        'No Cumple': [
            {
                'Descripcion': 'Do not correctly verify authentication and authorization.',
                'Codigo': 'if ("admin" in request.GET) {\n  // Allow access\n}',
                'ResultadoEsperado': 'Unauthorized access to data or functionalities.'
            }
        ],
        'Imagen': 'img/a1.png'
    },
    'A2': {
        'OWASP Top 10': 'Cryptographic Failures | Fallos Criptográficos',
        'Tipo de Ataque': 'Weak encryption.',
        'Consecuencia del Ataque': 'Data theft or manipulation.',
        'Ejemplo Simple': 'An attacker decrypts sensitive data due to weak encryption algorithms.',
        'Cumple': [
            {
                'Descripcion': 'Use strong cryptographic algorithms.',
                'Codigo': 'const encryptedData = encrypt(data, "AES-256");',
                'ResultadoEsperado': 'Sensitive data is protected against unauthorized access.'
            }
        ],
        'No Cumple': [
            {
                'Descripcion': 'Use weak cryptographic algorithms.',
                'Codigo': 'const encryptedData = encrypt(data, "DES");',
                'ResultadoEsperado': 'Sensitive data can be easily decrypted and compromised.'
            }
        ],
        'Imagen': 'img/a2.png'
    },
    'A3': {
        'OWASP Top 10': 'Injection | Inyección',
        'Tipo de Ataque': 'Code Injection.',
        'Consecuencia del Ataque': 'Data loss, corruption, or unauthorized access.',
        'Ejemplo Simple': 'An attacker sends malicious SQL code in a form field to access the database.',
        'Cumple': [
            {
                'Descripcion': 'Use prepared statements to avoid SQL injection.',
                'Codigo': 'const query = "SELECT * FROM users WHERE username = ? AND password = ?";',
                'ResultadoEsperado': 'Prevention of malicious code injection and protection of the database.'
            }
        ],
        'No Cumple': [
            {
                'Descripcion': 'Direct string concatenation in SQL query, allowing SQL injection.',
                'Codigo': 'const query = `SELECT * FROM users WHERE username = "${username}" AND password = "${password}"`;',
                'ResultadoEsperado': 'The database can be compromised through malicious code injection.'
            }
        ],
        'Imagen': 'img/a3.png'
    },
    'A4': {
        'OWASP Top 10': 'Insecure Design | Diseño Inseguro',
        'Tipo de Ataque': 'Design flaws or lack of security controls.',
        'Consecuencia del Ataque': 'System vulnerabilities.',
        'Ejemplo Simple': 'An application lacks rate limiting on login attempts, allowing an attacker to perform brute force attacks to guess passwords.',
        'Cumple': [
            {
                'Descripcion': 'Implement temporary account lockout after multiple failed login attempts.',
                'Codigo': '',
                'ResultadoEsperado': 'Protection against brute force attacks by limiting login attempts.'
            }
        ],
        'No Cumple': [
            {
                'Descripcion': 'Allow unlimited login attempts without lockout or CAPTCHA verification.',
                'Codigo': '',
                'ResultadoEsperado': 'Increased vulnerability to brute force attacks and account compromises.'
            }
        ],
        'Imagen': 'img/a4.png'
    },
    'A5': {
        'OWASP Top 10': 'Security Misconfiguration | Configuración de Seguridad Incorrecta',
        'Tipo de Ataque': 'Exploitation of default insecure settings or incomplete configurations.',
        'Consecuencia del Ataque': 'Unauthorized access or data exposure.',
        'Ejemplo Simple': 'A server with default configurations exposes sensitive information to attackers.',
        'Cumple': [
            {
                'Descripcion': 'Remove or change default configurations of servers and services.',
                'Codigo': '',
                'ResultadoEsperado': 'Reduced risk of unauthorized access and exposure of sensitive data.'
            },
            {
                'Descripcion': 'Apply minimum security configurations as recommended by the manufacturer.',
                'Codigo': '',
                'ResultadoEsperado': 'Ensure secure configurations and protection against unauthorized access.'
            }
        ],
        'No Cumple': [
            {
                'Descripcion': 'Maintain default configurations and not apply minimum security settings.',
                'Codigo': '',
                'ResultadoEsperado': 'Increased risk of unauthorized access and exposure of sensitive information.'
            }
        ],
        'Imagen': 'img/a5.png'
    },
    'A6': {
        'OWASP Top 10': 'Vulnerable and Outdated Components | Componentes Vulnerables y Desactualizados',
        'Tipo de Ataque': 'Use of vulnerable software.',
        'Consecuencia del Ataque': 'System compromise or data breach.',
        'Ejemplo Simple': 'An application uses a library with known vulnerabilities, allowing exploitation.',
        'Cumple': [
            {
                'Descripcion': 'Regularly update all libraries and software components to the latest secure versions.',
                'Codigo': '',
                'ResultadoEsperado': 'Reduced exposure to known vulnerabilities through continuous updates.'
            }
        ],
        'No Cumple': [
            {
                'Descripcion': 'Ignore software and library updates, leaving outdated and vulnerable versions in production.',
                'Codigo': '',
                'ResultadoEsperado': 'Increased risk of exploitation due to outdated components.'
            }
        ],
        'Imagen': 'img/a6.png'
    },
    'A7': {
        'OWASP Top 10': 'Identification and Authentication Failures | Fallos de Identificación y Autenticación',
        'Tipo de Ataque': 'Authentication issues.',
        'Consecuencia del Ataque': 'Identity theft or unauthorized access.',
        'Ejemplo Simple': 'An attacker uses credential stuffing to gain access to an account because the application does not enforce strong password policies or multi-factor authentication.',
        'Cumple': [
            {
                'Descripcion': 'Implement multi-factor authentication (MFA) for all user accounts.',
                'Codigo': '',
                'ResultadoEsperado': 'Increased account security through multi-factor authentication.'
            }
        ],
        'No Cumple': [
            {
                'Descripcion': 'Allow weak or predictable passwords without requiring a combination of letters, numbers, and special characters.',
                'Codigo': '',
                'ResultadoEsperado': 'Increased risk of account compromise due to lack of strong password policies.'
            }
        ],
        'Imagen': 'img/a7.png'
    },
    'A8': {
        'OWASP Top 10': 'Software and Data Integrity Failures | Fallos de Integridad de Software y Datos',
        'Tipo de Ataque': 'Manipulation of software and data.',
        'Consecuencia del Ataque': 'Compromise of data integrity.',
        'Ejemplo Simple': 'Using unverified third-party libraries.',
        'Cumple': [
            {
                'Descripcion': 'Verify the integrity of packages.',
                'Codigo': 'const hash = crypto.createHash("sha256").update(packageData).digest("hex");',
                'ResultadoEsperado': 'Ensure data and software integrity by verifying packages.'
            }
        ],
        'No Cumple': [
            {
                'Descripcion': 'Do not verify the integrity of packages.',
                'Codigo': 'Install packages without verifying integrity.',
                'ResultadoEsperado': 'Risk of manipulation and compromise of data and software.'
            }
        ],
        'Imagen': 'img/a8.png'
    },
    'A9': {
        'OWASP Top 10': 'Security Logging and Monitoring Failures | Fallos en el Registro y Monitoreo de Seguridad',
        'Tipo de Ataque': 'Inadequate logging and monitoring.',
        'Consecuencia del Ataque': 'Undetected breaches or attacks.',
        'Ejemplo Simple': 'A breach occurs undetected due to lack of effective monitoring.',
        'Cumple': [
            {
                'Descripcion': 'Implement continuous logging and monitoring of critical security events.',
                'Codigo': '',
                'ResultadoEsperado': 'Effective detection and response to security incidents through continuous monitoring.'
            }
        ],
        'No Cumple': [
            {
                'Descripcion': 'Do not log or monitor critical security events, leaving malicious activities undetected.',
                'Codigo': '',
                'ResultadoEsperado': 'Increased risk of undetected security breaches and no response.'
            }
        ],
        'Imagen': 'img/a9.png'
    },
    'A10': {
        'OWASP Top 10': 'Server-Side Request Forgery (SSRF) | Falsificación de Solicitudes del Lado del Servidor (SSRF)',
        'Tipo de Ataque': 'Server request forgery.',
        'Consecuencia del Ataque': 'Unauthorized access to internal systems.',
        'Ejemplo Simple': 'An attacker tricks the server into making requests to internal services.',
        'Cumple': [
            {
                'Descripcion': 'Validate and filter the allowed URLs and IP addresses in server requests.',
                'Codigo': 'if (isValidUrl(requestedUrl)) {\n  // Allow request\n}',
                'ResultadoEsperado': 'Prevention of malicious requests through URL and IP validation and filtering.'
            }
        ],
        'No Cumple': [
            {
                'Descripcion': 'Allow requests without validation or filtering.',
                'Codigo': 'fetch(requestedUrl);',
                'ResultadoEsperado': 'Increased risk of unauthorized access to internal systems due to unvalidated requests.'
            }
        ],
        'Imagen': 'img/a10.png'
    }
};

document.addEventListener('DOMContentLoaded', () => {
    mostrarListaOWASP(owasp_data);
});

function mostrarListaOWASP(data) {
    const column1 = document.getElementById('owasp-column-1');
    const column2 = document.getElementById('owasp-column-2');
    column1.innerHTML = '';
    column2.innerHTML = '';

    const keys = Object.keys(data);
    keys.forEach((key, index) => {
        const item = data[key];
        const listItem = document.createElement('div');
        listItem.classList.add('owasp-item');
        listItem.textContent = `${key}: ${item['OWASP Top 10']}`;
        listItem.addEventListener('click', () => mostrarDetalleOWASP(key, data));
        if (index < 5) {
            column1.appendChild(listItem);
        } else {
            column2.appendChild(listItem);
        }
    });
}

function mostrarDetalleOWASP(codigo, data) {
    const detalleContainer = document.getElementById('owasp-detail');
    detalleContainer.innerHTML = '';

    const item = data[codigo];

    const detalle = document.createElement('div');
    detalle.classList.add('detalle');
    
    const titulo = document.createElement('h2');
    titulo.textContent = `${item['OWASP Top 10']}`;
    detalle.appendChild(titulo);

    const tipoAtaque = document.createElement('p');
    tipoAtaque.innerHTML = `<strong>Tipo de Ataque:</strong> <span class="detalle-respuesta">${item['Tipo de Ataque']}</span>`;
    detalle.appendChild(tipoAtaque);

    const consecuencia = document.createElement('p');
    consecuencia.innerHTML = `<strong>Consecuencia del Ataque:</strong> <span class="detalle-respuesta">${item['Consecuencia del Ataque']}</span>`;
    detalle.appendChild(consecuencia);

    const ejemploSimple = document.createElement('p');
    ejemploSimple.innerHTML = `<strong>Ejemplo Simple:</strong> <span class="detalle-respuesta">${item['Ejemplo Simple']}</span>`;
    detalle.appendChild(ejemploSimple);

    const cumple = document.createElement('div');
    cumple.classList.add('ejemplos');
    cumple.innerHTML = `<h3>Ejemplo de Cumplimiento:</h3>`;
    item['Cumple'].forEach(code => {
        const codeElement = document.createElement('pre');
        codeElement.textContent = `${code['Descripcion']}\n\n${code['Codigo']}\n\n${code['ResultadoEsperado']}`;
        cumple.appendChild(codeElement);
    });
    detalle.appendChild(cumple);

    const noCumple = document.createElement('div');
    noCumple.classList.add('ejemplos');
    noCumple.innerHTML = `<h3>Ejemplo de No Cumplimiento:</h3>`;
    item['No Cumple'].forEach(code => {
        const codeElement = document.createElement('pre');
        codeElement.textContent = `${code['Descripcion']}\n\n${code['Codigo']}\n\n${code['ResultadoEsperado']}`;
        noCumple.appendChild(codeElement);
    });
    detalle.appendChild(noCumple);

    if (item['Imagen']) {
        const imagen = document.createElement('img');
        imagen.src = item['Imagen'];
        imagen.alt = `Imagen explicativa de ataque ${codigo}`;
        detalle.appendChild(imagen);
    }

    detalleContainer.appendChild(detalle);
}

function changeLanguage(language) {
    const button = document.getElementById('change-language');
    if (language === 'en') {
        button.setAttribute('onclick', 'changeLanguage("es")');
        button.textContent = 'Cambiar a Español';
        document.getElementById('owasp-title').textContent = 'What is OWASP?';
        document.getElementById('owasp-text').textContent = 'Open Web Application Security Project (OWASP) is a non-profit organization focused on web application security. It publishes free articles, tools, and information with the collaboration of its open community of programmers and developers.';
        document.getElementById('top10-title').textContent = 'What is the OWASP Top 10?';
        document.getElementById('top10-text').textContent = 'First published in 2003 and regularly updated, the OWASP Top 10 list identifies the 10 most critical web application vulnerabilities along with mitigation strategies. It uses feedback from global experts and survey data to rank vulnerabilities by frequency, severity, and potential impact.';
        document.getElementById('resource-text').textContent = 'This resource is essential for developers and security professionals, enabling them to manage emerging risks and demonstrate a commitment to security in software development.';
        mostrarListaOWASP(owasp_data_en);
    } else {
        button.setAttribute('onclick', 'changeLanguage("en")');
        button.textContent = 'Change to English';
        document.getElementById('owasp-title').textContent = '¿Qué es OWASP?';
        document.getElementById('owasp-text').textContent = 'Open Web Application Security Project (OWASP) es una fundación sin fines de lucro enfocada en la seguridad de aplicaciones web. Publica artículos gratuitos, herramientas e información con la colaboración de su comunidad abierta de programadores y desarrolladores.';
        document.getElementById('top10-title').textContent = '¿Qué es el Top 10 de OWASP?';
        document.getElementById('top10-text').textContent = 'Publicada por primera vez en 2003 y actualizada regularmente, la lista OWASP Top 10 recopila las 10 vulnerabilidades más críticas en aplicaciones web junto con posibles mitigaciones. Utiliza comentarios de expertos globales y datos de encuestas para clasificar las vulnerabilidades según su frecuencia, severidad y potencial de impacto.';
        document.getElementById('resource-text').textContent = 'Este recurso es fundamental para desarrolladores y profesionales de seguridad, permitiéndoles gestionar riesgos emergentes y demostrar compromiso con la seguridad en el desarrollo de software.';
        mostrarListaOWASP(owasp_data);
    }
}

window.onscroll = function () {
    const button = document.getElementById('scroll-up-button');
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        button.style.display = 'block';
    } else {
        button.style.display = 'none';
    }
};

function scrollToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
