import { PaginationResponse } from "../model/pagination-response";
import { TaskResponse } from "../model/task-response";

export const TASKS_MOCK_DATA: PaginationResponse<TaskResponse> = {
  total: 50,
  limit: 10,
  offset: 0,
  items:[
  {
    text: "Write a function to calculate the factorial of a number in Python",
    category: "Programming",
    tags: ["math", "python"],
    difficulty: "Easy",
    type: "Coding",
    translations: [
      { language: "English", value: "Write a function to calculate the factorial of a number in Python" },
      { language: "Spanish", value: "Escribe una función para calcular el factorial de un número en Python" },
      { language: "French", value: "Écrivez une fonction pour calculer le factoriel d'un nombre en Python" },
    ],
  },
  {
    text: "Design a wireframe for a landing page of an e-commerce website",
    category: "Design",
    tags: ["UI/UX", "wireframe"],
    difficulty: "Medium",
    type: "Design",
    translations: [
      { language: "English", value: "Design a wireframe for a landing page of an e-commerce website" },
      { language: "Spanish", value: "Diseñar un esquema para la página de inicio de un sitio web de comercio electrónico" },
      { language: "German", value: "Erstellen Sie einen Entwurf für die Landingpage einer E-Commerce-Website" },
    ],
  },
  {
    text: "Create a user story for a login feature in a project management tool",
    category: "Project Management",
    tags: ["agile", "scrum"],
    difficulty: "Easy",
    type: "Documentation",
    translations: [
      { language: "English", value: "Create a user story for a login feature in a project management tool" },
      { language: "Spanish", value: "Crea una historia de usuario para una función de inicio de sesión en una herramienta de gestión de proyectos" },
    ],
  },
  {
    text: "Translate a paragraph of technical documentation into Spanish",
    category: "Translation",
    tags: ["language", "documentation"],
    difficulty: "Easy",
    type: "Translation",
    translations: [
      { language: "English", value: "Translate a paragraph of technical documentation into Spanish" },
      { language: "French", value: "Traduisez un paragraphe de documentation technique en espagnol" },
      { language: "German", value: "Übersetzen Sie einen Abschnitt technischer Dokumentation ins Spanische" },
    ],
  },
  {
    text: "Debug a piece of JavaScript code that calculates Fibonacci numbers",
    category: "Programming",
    tags: ["debugging", "javascript"],
    difficulty: "Medium",
    type: "Coding",
    translations: [
      { language: "English", value: "Debug a piece of JavaScript code that calculates Fibonacci numbers" },
      { language: "Spanish", value: "Depura un código JavaScript que calcula números de Fibonacci" },
    ],
  },
  {
    text: "Prepare a presentation on the importance of test-driven development (TDD)",
    category: "Education",
    tags: ["TDD", "testing"],
    difficulty: "Hard",
    type: "Presentation",
    translations: [
      { language: "English", value: "Prepare a presentation on the importance of test-driven development (TDD)" },
    ],
  },
  {
    text: "Write SQL queries to retrieve the top 5 selling products in an e-commerce database",
    category: "Database",
    tags: ["SQL", "ecommerce"],
    difficulty: "Medium",
    type: "Coding",
    translations: [
      { language: "English", value: "Write SQL queries to retrieve the top 5 selling products in an e-commerce database" },
      { language: "Spanish", value: "Escribe consultas SQL para obtener los 5 productos más vendidos en una base de datos de comercio electrónico" },
    ],
  },
  {
    text: "Design a poster for a coding bootcamp event",
    category: "Design",
    tags: ["graphic design", "event"],
    difficulty: "Easy",
    type: "Design",
    translations: [
      { language: "English", value: "Design a poster for a coding bootcamp event" },
      { language: "French", value: "Concevez une affiche pour un événement de bootcamp de codage" },
    ],
  },
  {
    text: "Develop a REST API endpoint for a book catalog application",
    category: "Programming",
    tags: ["API", "backend"],
    difficulty: "Hard",
    type: "Coding",
    translations: [
      { language: "English", value: "Develop a REST API endpoint for a book catalog application" },
    ],
  },
  {
    text: "Review a pull request for adherence to coding standards",
    category: "Programming",
    tags: ["code review", "standards"],
    difficulty: "Medium",
    type: "Review",
    translations: [
      { language: "English", value: "Review a pull request for adherence to coding standards" },
    ],
  },
  {
    text: "Implement a caching mechanism for a REST API",
    category: "Programming",
    tags: ["API", "performance"],
    difficulty: "Hard",
    type: "Coding",
    translations: [
      { language: "English", value: "Implement a caching mechanism for a REST API" },
    ],
  },
  {
    text: "Create a marketing campaign plan for a new product launch",
    category: "Marketing",
    tags: ["strategy", "launch"],
    difficulty: "Medium",
    type: "Planning",
    translations: [
      { language: "English", value: "Create a marketing campaign plan for a new product launch" },
    ],
  },
  {
    text: "Design a logo for a tech startup",
    category: "Design",
    tags: ["graphic design", "branding"],
    difficulty: "Easy",
    type: "Design",
    translations: [
      { language: "English", value: "Design a logo for a tech startup" },
      { language: "Spanish", value: "Diseñar un logotipo para una startup tecnológica" },
    ],
  },
  {
    text: "Implement a chat feature in a web application using WebSockets",
    category: "Programming",
    tags: ["WebSockets", "chat"],
    difficulty: "Medium",
    type: "Coding",
    translations: [
      { language: "English", value: "Implement a chat feature in a web application using WebSockets" },
      { language: "French", value: "Implémenter une fonctionnalité de chat dans une application web utilisant WebSockets" },
    ],
  },
  {
    text: "Write a regular expression to validate an email address",
    category: "Programming",
    tags: ["regex", "validation"],
    difficulty: "Easy",
    type: "Coding",
    translations: [
      { language: "English", value: "Write a regular expression to validate an email address" },
      { language: "Spanish", value: "Escribe una expresión regular para validar una dirección de correo electrónico" },
    ],
  },
  {
    text: "Design a dashboard for monitoring web server performance",
    category: "Design",
    tags: ["UI/UX", "dashboard"],
    difficulty: "Medium",
    type: "Design",
    translations: [
      { language: "English", value: "Design a dashboard for monitoring web server performance" },
      { language: "French", value: "Concevez un tableau de bord pour surveiller la performance des serveurs web" },
    ],
  },
  {
    text: "Write a Python script to scrape data from a website",
    category: "Programming",
    tags: ["web scraping", "python"],
    difficulty: "Medium",
    type: "Scripting",
    translations: [
      { language: "English", value: "Write a Python script to scrape data from a website" },
      { language: "Spanish", value: "Escribe un script en Python para extraer datos de un sitio web" },
    ],
  },
  {
    text: "Build a mobile app that tracks fitness goals and progress",
    category: "Mobile Development",
    tags: ["fitness", "mobile"],
    difficulty: "Hard",
    type: "Development",
    translations: [
      { language: "English", value: "Build a mobile app that tracks fitness goals and progress" },
      { language: "French", value: "Construire une application mobile qui suit les objectifs de fitness et les progrès" },
    ],
  },
  {
    text: "Write unit tests for a JavaScript function that validates phone numbers",
    category: "Testing",
    tags: ["unit tests", "javascript"],
    difficulty: "Medium",
    type: "Testing",
    translations: [
      { language: "English", value: "Write unit tests for a JavaScript function that validates phone numbers" },
      { language: "Spanish", value: "Escribe pruebas unitarias para una función de JavaScript que valida números de teléfono" },
    ],
  },
  {
    text: "Implement a pagination system for a product catalog API",
    category: "Programming",
    tags: ["API", "pagination"],
    difficulty: "Medium",
    type: "Coding",
    translations: [
      { language: "English", value: "Implement a pagination system for a product catalog API" },
      { language: "French", value: "Implémentez un système de pagination pour une API de catalogue de produits" },
    ],
  },
  {
    text: "Create a deployment pipeline for a web application using Jenkins",
    category: "DevOps",
    tags: ["Jenkins", "CI/CD"],
    difficulty: "Hard",
    type: "Automation",
    translations: [
      { language: "English", value: "Create a deployment pipeline for a web application using Jenkins" },
      { language: "Spanish", value: "Crea una canalización de implementación para una aplicación web usando Jenkins" },
    ],
  },
  {
    text: "Write a script to automate the deployment of a Docker container",
    category: "DevOps",
    tags: ["Docker", "automation"],
    difficulty: "Medium",
    type: "Scripting",
    translations: [
      { language: "English", value: "Write a script to automate the deployment of a Docker container" },
      { language: "German", value: "Schreiben Sie ein Skript, um die Bereitstellung eines Docker-Containers zu automatisieren" },
    ],
  },
  {
    text: "Create a REST API to manage user authentication",
    category: "Programming",
    tags: ["API", "authentication"],
    difficulty: "Hard",
    type: "Coding",
    translations: [
      { language: "English", value: "Create a REST API to manage user authentication" },
      { language: "French", value: "Créer une API REST pour gérer l'authentification des utilisateurs" },
    ],
  },
  {
    text: "Design a feature that allows users to rate and review products",
    category: "Design",
    tags: ["UI/UX", "reviews"],
    difficulty: "Medium",
    type: "Design",
    translations: [
      { language: "English", value: "Design a feature that allows users to rate and review products" },
      { language: "Spanish", value: "Diseñar una función que permita a los usuarios calificar y revisar productos" },
    ],
  },
  {
    text: "Create an API endpoint to retrieve product details by ID",
    category: "Programming",
    tags: ["API", "backend"],
    difficulty: "Medium",
    type: "Coding",
    translations: [
      { language: "English", value: "Create an API endpoint to retrieve product details by ID" },
      { language: "German", value: "Erstellen Sie einen API-Endpunkt, um Produktdetails nach ID abzurufen" },
    ],
  },
  {
    text: "Build a chatbot for customer support using AI",
    category: "AI",
    tags: ["chatbot", "AI"],
    difficulty: "Hard",
    type: "Development",
    translations: [
      { language: "English", value: "Build a chatbot for customer support using AI" },
      { language: "Spanish", value: "Construir un chatbot para soporte al cliente usando IA" },
    ],
  },
  {
    text: "Write a SQL query to find the second highest salary in a database",
    category: "Database",
    tags: ["SQL", "query"],
    difficulty: "Medium",
    type: "Coding",
    translations: [
      { language: "English", value: "Write a SQL query to find the second highest salary in a database" },
      { language: "German", value: "Schreiben Sie eine SQL-Abfrage, um das zweithöchste Gehalt in einer Datenbank zu finden" },
    ],
  },
  {
    text: "Create a data visualization of website traffic over the past year",
    category: "Data Science",
    tags: ["data visualization", "website traffic"],
    difficulty: "Medium",
    type: "Analysis",
    translations: [
      { language: "English", value: "Create a data visualization of website traffic over the past year" },
      { language: "Spanish", value: "Crear una visualización de datos del tráfico web durante el último año" },
    ],
  },
  {
    text: "Set up a GitHub repository with a README for a new project",
    category: "Version Control",
    tags: ["Git", "repository"],
    difficulty: "Easy",
    type: "Setup",
    translations: [
      { language: "English", value: "Set up a GitHub repository with a README for a new project" },
      { language: "French", value: "Configurez un référentiel GitHub avec un README pour un nouveau projet" },
    ],
  },
  {
    text: "Create a form in HTML to collect user feedback",
    category: "Web Development",
    tags: ["HTML", "form"],
    difficulty: "Easy",
    type: "Frontend",
    translations: [
      { language: "English", value: "Create a form in HTML to collect user feedback" },
      { language: "Spanish", value: "Crea un formulario en HTML para recoger comentarios de los usuarios" },
    ],
  },
  {
    text: "Set up a Jenkins pipeline to run tests on every commit",
    category: "DevOps",
    tags: ["Jenkins", "CI/CD"],
    difficulty: "Medium",
    type: "Automation",
    translations: [
      { language: "English", value: "Set up a Jenkins pipeline to run tests on every commit" },
      { language: "Spanish", value: "Configura una canalización de Jenkins para ejecutar pruebas en cada commit" },
    ],
  },
  {
    text: "Optimize the performance of a mobile application",
    category: "Mobile Development",
    tags: ["optimization", "mobile"],
    difficulty: "Hard",
    type: "Optimization",
    translations: [
      { language: "English", value: "Optimize the performance of a mobile application" },
      { language: "French", value: "Optimiser les performances d'une application mobile" },
    ],
  },
]
};