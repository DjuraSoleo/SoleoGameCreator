package com.soleo.games.integration

import com.soleo.games.application.controller.QuestionsController
import com.soleo.games.application.controller.TasksController
import com.soleo.games.application.model.request.CreateQuestionRequest
import com.soleo.games.application.model.request.CreateTaskRequest
import com.soleo.games.application.model.request.ParameterRequest
import com.soleo.games.application.model.request.TranslationRequest
import org.junit.jupiter.api.Assertions.assertEquals
import org.junit.jupiter.api.Test
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.test.context.SpringBootTest
import org.springframework.http.HttpStatusCode

@SpringBootTest
class ApiIntegrationTest {

    @Autowired
    lateinit var questionsController: QuestionsController

    @Autowired
    lateinit var tasksController: TasksController


    @Test
    fun `should get questions`() {
        val response = questionsController.getQuestion(
            category = CATEGORY,
            tags = listOf(TAG_1, TAG_2),
            difficulty = DIFFICULTY,
            language = LANGUAGE,
            type = QUESTION_TYPE,
            limit = LIMIT,
            offset = OFFSET
        )

        assertEquals(response.statusCode,  HttpStatusCode.valueOf(200))

    }

    @Test
    fun `should create 1 question`() {

        val response = questionsController.createQuestion(
            CreateQuestionRequest(
                questionText = QUESTION_TEXT,
                category = CATEGORY,
                tags = listOf(TAG_1, TAG_2),
                difficulty = DIFFICULTY,
                type = QUESTION_TYPE,
                answerText = ANSWER_TEXT,
                questionTranslations = listOf(TranslationRequest(
                    language = LANGUAGE,
                    value = TRANSLATION_VALUE
                )),
                answerTranslations = listOf(TranslationRequest(
                    language = LANGUAGE,
                    value = TRANSLATION_VALUE
                )),
                parameters = listOf(ParameterRequest(
                    name = PARAMETER_NAME,
                    type = PARAMETER_TYPE,
                    description = PARAMETER_DESCRIPTION
                ))
            )
        )
        assertEquals(response.statusCode,  HttpStatusCode.valueOf(200))

    }

    @Test
    fun `should create n questions`() {
        val response = questionsController.importQuestions(IMPORT_QUESTIONS_CSV)

        assertEquals(response.statusCode,  HttpStatusCode.valueOf(200))

    }

    @Test
    fun `should get tasks`() {
        val response = tasksController.getTask(
            category = CATEGORY,
            tags = listOf(TAG_1, TAG_2),
            difficulty = DIFFICULTY,
            language = LANGUAGE,
            type = QUESTION_TYPE,
            limit = LIMIT,
            offset = OFFSET
        )

        assertEquals(response.statusCode,  HttpStatusCode.valueOf(200))

    }

    @Test
    fun `should create 1 task`() {
        val response = tasksController.createTask( CreateTaskRequest(
            text = TASK_TEXT,
            category = CATEGORY,
            tags = listOf(TAG_1, TAG_2),
            difficulty = DIFFICULTY,
            type = TASK_TYPE,
            translations = listOf(TranslationRequest(
                language = LANGUAGE,
                value = TRANSLATION_VALUE
            ))
        )
        )

        assertEquals(response.statusCode,  HttpStatusCode.valueOf(200))

    }

    @Test
    fun `should create n tasks`() {

        val response = tasksController.importTasks(IMPORT_TASKS_CSV)

        assertEquals(response.statusCode,  HttpStatusCode.valueOf(200))

    }

    val CATEGORY = "testCategory"
    val TAG_1 = "testTag1"
    val TAG_2 = "testTag2"
    val DIFFICULTY = "testDifficulty"
    val LANGUAGE = "testLanguage"
    val QUESTION_TYPE = "testType"

    val QUESTION_TEXT = "testQuestionText"
    val ANSWER_TEXT = "testAnswerText"
    val TRANSLATION_VALUE = "testTranslationValue"
    val PARAMETER_NAME = "testParameterName"
    val PARAMETER_TYPE = "testParameterType"
    val PARAMETER_DESCRIPTION = "testParameterDescription"

    val TASK_TEXT = "testTaskTest"
    val TASK_TYPE = "testTaskType"

    val LIMIT = 10L
    val OFFSET = 100L

    val IMPORT_QUESTIONS_CSV = "questionText,answerText,category,difficulty,type\n" +
            "Which is the most trophy football club in Macedonia {player name}?,FK Vardar,sport,easy,corporate\n" +
            "testText1,testAnswer1,testCategory1,testDifficulty1,testType1\n" +
            "testText2,testAnswer2,testCategory2,testDifficulty2,testType2\n" +
            "testText3,testAnswer3,testCategory3,testDifficulty3,testType3\n" +
            "testText4,testAnswer4,testCategory4,testDifficulty4,testType4\n" +
            "testText5,testAnswer5,testCategory5,testDifficulty5,testType5\n"

    val IMPORT_TASKS_CSV = "text,category,difficulty,type\n" +
            "Do something,corporate,easy,sport\n" +
            "testText1,testCategory1,testDifficulty1,testType1\n" +
            "testText2,testCategory2,testDifficulty2,testType2\n" +
            "testText3,testCategory3,testDifficulty3,testType3\n" +
            "testText4,testCategory4,testDifficulty4,testType4\n" +
            "testText5,testCategory5,testDifficulty5,testType5\n"
}