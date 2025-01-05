import { PaginationResponse } from "../model/pagination-response";
import { QuestionResponse } from "../model/question-response";

export const QUESTIONS_MOCK_DATA: PaginationResponse<QuestionResponse> = {
  total: 50,
  limit: 10,
  offset: 0,
  items: [
    {
      questionText: "What is the capital of France?",
      category: "Geography",
      tags: ["France", "Paris"],
      difficulty: "Easy",
      type: "Trivia",
      answerText: "Paris",
      questionTranslations: [
        { language: "English", value: "What is the capital of France?" },
        { language: "Spanish", value: "¿Cuál es la capital de Francia?" },
        { language: "French", value: "Quelle est la capitale de la France ?" }
      ],
      answerTranslations: [
        { language: "English", value: "Paris" },
        { language: "Spanish", value: "París" },
        { language: "French", value: "Paris" }
      ],
      parameters: null
    },
    {
      questionText: "Who wrote 'Romeo and Juliet'?",
      category: "Literature",
      tags: ["Shakespeare", "Drama"],
      difficulty: "Medium",
      type: "Trivia",
      answerText: "William Shakespeare",
      questionTranslations: [
        { language: "English", value: "Who wrote 'Romeo and Juliet'?" },
        { language: "German", value: "Wer schrieb 'Romeo und Julia'?" }
      ],
      answerTranslations: [
        { language: "English", value: "William Shakespeare" },
        { language: "German", value: "William Shakespeare" }
      ],
      parameters: null
    },
    {
      questionText: "What is the chemical symbol for water?",
      category: "Science",
      tags: ["Chemistry", "Water"],
      difficulty: "Easy",
      type: "Trivia",
      answerText: "H2O",
      questionTranslations: [
        { language: "English", value: "What is the chemical symbol for water?" }
      ],
      answerTranslations: [
        { language: "English", value: "H2O" }
      ],
      parameters: null
    },
    {
      questionText: "What year did World War II end?",
      category: "History",
      tags: ["World War II", "History"],
      difficulty: "Hard",
      type: "Trivia",
      answerText: "1945",
      questionTranslations: [
        { language: "English", value: "What year did World War II end?" },
        { language: "French", value: "En quelle année s'est terminée la Seconde Guerre mondiale ?" }
      ],
      answerTranslations: [
        { language: "English", value: "1945" },
        { language: "French", value: "1945" }
      ],
      parameters: null
    },
    {
      questionText: "What is the largest planet in our solar system?",
      category: "Astronomy",
      tags: ["Jupiter", "Planets"],
      difficulty: "Easy",
      type: "Trivia",
      answerText: "Jupiter",
      questionTranslations: [
        { language: "English", value: "What is the largest planet in our solar system?" },
        { language: "Spanish", value: "¿Cuál es el planeta más grande de nuestro sistema solar?" }
      ],
      answerTranslations: [
        { language: "English", value: "Jupiter" },
        { language: "Spanish", value: "Júpiter" }
      ],
      parameters: null
    },
    {
      questionText: "What is the capital of Japan?",
      category: "Geography",
      tags: ["Japan", "Tokyo"],
      difficulty: "Easy",
      type: "Trivia",
      answerText: "Tokyo",
      questionTranslations: [
        { language: "English", value: "What is the capital of Japan?" },
        { language: "Spanish", value: "¿Cuál es la capital de Japón?" }
      ],
      answerTranslations: [
        { language: "English", value: "Tokyo" },
        { language: "Spanish", value: "Tokio" }
      ],
      parameters: null
    },
    {
      questionText: "Who painted the Mona Lisa?",
      category: "Art",
      tags: ["Art", "Renaissance"],
      difficulty: "Medium",
      type: "Trivia",
      answerText: "Leonardo da Vinci",
      questionTranslations: [
        { language: "English", value: "Who painted the Mona Lisa?" },
        { language: "French", value: "Qui a peint la Joconde ?" }
      ],
      answerTranslations: [
        { language: "English", value: "Leonardo da Vinci" },
        { language: "French", value: "Leonard de Vinci" }
      ],
      parameters: null
    },
    {
      questionText: "What is the powerhouse of the cell?",
      category: "Biology",
      tags: ["Biology", "Cell"],
      difficulty: "Easy",
      type: "Trivia",
      answerText: "Mitochondria",
      questionTranslations: [
        { language: "English", value: "What is the powerhouse of the cell?" }
      ],
      answerTranslations: [
        { language: "English", value: "Mitochondria" }
      ],
      parameters: null
    },
    {
      questionText: "Which planet is known as the Red Planet?",
      category: "Astronomy",
      tags: ["Planets", "Mars"],
      difficulty: "Easy",
      type: "Trivia",
      answerText: "Mars",
      questionTranslations: [
        { language: "English", value: "Which planet is known as the Red Planet?" },
        { language: "Spanish", value: "¿Qué planeta es conocido como el Planeta Rojo?" }
      ],
      answerTranslations: [
        { language: "English", value: "Mars" },
        { language: "Spanish", value: "Marte" }
      ],
      parameters: null
    },
    {
      questionText: "What is the main ingredient in guacamole?",
      category: "Food",
      tags: ["Food", "Avocado"],
      difficulty: "Easy",
      type: "Trivia",
      answerText: "Avocado",
      questionTranslations: [
        { language: "English", value: "What is the main ingredient in guacamole?" },
        { language: "Spanish", value: "¿Cuál es el ingrediente principal del guacamole?" }
      ],
      answerTranslations: [
        { language: "English", value: "Avocado" },
        { language: "Spanish", value: "Aguacate" }
      ],
      parameters: null
    },
    {
      questionText: "What is the smallest country in the world?",
      category: "Geography",
      tags: ["Countries", "Vatican"],
      difficulty: "Hard",
      type: "Trivia",
      answerText: "Vatican City",
      questionTranslations: [
        { language: "English", value: "What is the smallest country in the world?" },
        { language: "Spanish", value: "¿Cuál es el país más pequeño del mundo?" }
      ],
      answerTranslations: [
        { language: "English", value: "Vatican City" },
        { language: "Spanish", value: "Ciudad del Vaticano" }
      ],
      parameters: null
    },
    {
      questionText: "Who is known as the father of computers?",
      category: "Technology",
      tags: ["Computers", "History"],
      difficulty: "Medium",
      type: "Trivia",
      answerText: "Charles Babbage",
      questionTranslations: [
        { language: "English", value: "Who is known as the father of computers?" }
      ],
      answerTranslations: [
        { language: "English", value: "Charles Babbage" }
      ],
      parameters: null
    },
    {
      questionText: "What is the boiling point of water in Celsius?",
      category: "Science",
      tags: ["Physics", "Water"],
      difficulty: "Easy",
      type: "Trivia",
      answerText: "100°C",
      questionTranslations: [
        { language: "English", value: "What is the boiling point of water in Celsius?" },
        { language: "French", value: "Quel est le point d'ébullition de l'eau en degrés Celsius ?" }
      ],
      answerTranslations: [
        { language: "English", value: "100°C" },
        { language: "French", value: "100°C" }
      ],
      parameters: null
    },
    {
      questionText: "What is the capital city of Australia?",
      category: "Geography",
      tags: ["Australia", "Canberra"],
      difficulty: "Medium",
      type: "Trivia",
      answerText: "Canberra",
      questionTranslations: [
        { language: "English", value: "What is the capital city of Australia?" },
        { language: "Spanish", value: "¿Cuál es la capital de Australia?" }
      ],
      answerTranslations: [
        { language: "English", value: "Canberra" },
        { language: "Spanish", value: "Canberra" }
      ],
      parameters: null
    },
    {
      questionText: "What is the most abundant gas in the Earth's atmosphere?",
      category: "Science",
      tags: ["Earth", "Atmosphere"],
      difficulty: "Easy",
      type: "Trivia",
      answerText: "Nitrogen",
      questionTranslations: [
        { language: "English", value: "What is the most abundant gas in the Earth's atmosphere?" },
        { language: "German", value: "Welches Gas ist am häufigsten in der Erdatmosphäre?" }
      ],
      answerTranslations: [
        { language: "English", value: "Nitrogen" },
        { language: "German", value: "Stickstoff" }
      ],
      parameters: null
    },
    {
      questionText: "What is the heaviest land animal?",
      category: "Biology",
      tags: ["Animals", "Elephants"],
      difficulty: "Medium",
      type: "Trivia",
      answerText: "African Elephant",
      questionTranslations: [
        { language: "English", value: "What is the heaviest land animal?" },
        { language: "Spanish", value: "¿Cuál es el animal terrestre más pesado?" }
      ],
      answerTranslations: [
        { language: "English", value: "African Elephant" },
        { language: "Spanish", value: "Elefante Africano" }
      ],
      parameters: null
    },
    {
      questionText: "What is the freezing point of water in Fahrenheit?",
      category: "Science",
      tags: ["Physics", "Water"],
      difficulty: "Easy",
      type: "Trivia",
      answerText: "32°F",
      questionTranslations: [
        { language: "English", value: "What is the freezing point of water in Fahrenheit?" }
      ],
      answerTranslations: [
        { language: "English", value: "32°F" }
      ],
      parameters: null
    },
    {
      questionText: "Who discovered penicillin?",
      category: "History",
      tags: ["Medicine", "Discovery"],
      difficulty: "Medium",
      type: "Trivia",
      answerText: "Alexander Fleming",
      questionTranslations: [
        { language: "English", value: "Who discovered penicillin?" },
        { language: "French", value: "Qui a découvert la pénicilline ?" }
      ],
      answerTranslations: [
        { language: "English", value: "Alexander Fleming" },
        { language: "French", value: "Alexander Fleming" }
      ],
      parameters: null
    },
    {
      questionText: "Which continent is known as the 'Dark Continent'?",
      category: "Geography",
      tags: ["Continents", "Africa"],
      difficulty: "Hard",
      type: "Trivia",
      answerText: "Africa",
      questionTranslations: [
        { language: "English", value: "Which continent is known as the 'Dark Continent'?" },
        { language: "Spanish", value: "¿Qué continente es conocido como el 'Continente Oscuro'?" }
      ],
      answerTranslations: [
        { language: "English", value: "Africa" },
        { language: "Spanish", value: "África" }
      ],
      parameters: null
    },
    {
      questionText: "What is the largest desert in the world?",
      category: "Geography",
      tags: ["Deserts", "Sahara"],
      difficulty: "Medium",
      type: "Trivia",
      answerText: "Sahara Desert",
      questionTranslations: [
        { language: "English", value: "What is the largest desert in the world?" },
        { language: "French", value: "Quel est le plus grand désert du monde ?" }
      ],
      answerTranslations: [
        { language: "English", value: "Sahara Desert" },
        { language: "French", value: "Désert du Sahara" }
      ],
      parameters: null
    },
    {
      questionText: "Which country is known as the Land of the Rising Sun?",
      category: "Geography",
      tags: ["Japan", "Culture"],
      difficulty: "Easy",
      type: "Trivia",
      answerText: "Japan",
      questionTranslations: [
        { language: "English", value: "Which country is known as the Land of the Rising Sun?" },
        { language: "German", value: "Welches Land ist als das Land der aufgehenden Sonne bekannt?" }
      ],
      answerTranslations: [
        { language: "English", value: "Japan" },
        { language: "German", value: "Japan" }
      ],
      parameters: null
    },
    {
      questionText: "What is the tallest mountain in the world?",
      category: "Geography",
      tags: ["Mountains", "Everest"],
      difficulty: "Hard",
      type: "Trivia",
      answerText: "Mount Everest",
      questionTranslations: [
        { language: "English", value: "What is the tallest mountain in the world?" },
        { language: "Spanish", value: "¿Cuál es la montaña más alta del mundo?" }
      ],
      answerTranslations: [
        { language: "English", value: "Mount Everest" },
        { language: "Spanish", value: "Monte Everest" }
      ],
      parameters: null
    },
    {
      questionText: "Which chemical element has the symbol 'O'?",
      category: "Science",
      tags: ["Chemistry", "Oxygen"],
      difficulty: "Easy",
      type: "Trivia",
      answerText: "Oxygen",
      questionTranslations: [
        { language: "English", value: "Which chemical element has the symbol 'O'?" },
        { language: "French", value: "Quel élément chimique a le symbole 'O' ?" }
      ],
      answerTranslations: [
        { language: "English", value: "Oxygen" },
        { language: "French", value: "Oxygène" }
      ],
      parameters: null
    },
    {
      questionText: "Which famous scientist developed the theory of relativity?",
      category: "Science",
      tags: ["Physics", "Einstein"],
      difficulty: "Medium",
      type: "Trivia",
      answerText: "Albert Einstein",
      questionTranslations: [
        { language: "English", value: "Which famous scientist developed the theory of relativity?" },
        { language: "Italian", value: "Quale famoso scienziato ha sviluppato la teoria della relatività?" }
      ],
      answerTranslations: [
        { language: "English", value: "Albert Einstein" },
        { language: "Italian", value: "Albert Einstein" }
      ],
      parameters: null
    },
    {
      questionText: "What is the largest mammal in the world?",
      category: "Biology",
      tags: ["Animals", "Blue Whale"],
      difficulty: "Medium",
      type: "Trivia",
      answerText: "Blue Whale",
      questionTranslations: [
        { language: "English", value: "What is the largest mammal in the world?" },
        { language: "Spanish", value: "¿Cuál es el mamífero más grande del mundo?" }
      ],
      answerTranslations: [
        { language: "English", value: "Blue Whale" },
        { language: "Spanish", value: "Ballena Azul" }
      ],
      parameters: null
    }

  ]
};
