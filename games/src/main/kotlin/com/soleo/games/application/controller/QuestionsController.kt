package com.soleo.games.application.controller

import com.soleo.games.application.model.request.CreateQuestionRequest
import com.soleo.games.application.model.response.Page
import com.soleo.games.application.model.response.QuestionResponse
import com.soleo.games.application.service.CsvParser
import com.soleo.games.domain.model.QuestionFilter
import com.soleo.games.domain.service.QuestionService
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*

@RestController
@RequestMapping("/v1/questions")
class QuestionsController(
    private val questionService: QuestionService,
    private val csvParser: CsvParser,
) {

    @GetMapping
    fun getQuestion(
        @RequestParam(required = false) category: String?,
        @RequestParam(required = false) tags: List<String>?,
        @RequestParam(required = false) difficulty: String?,
        @RequestParam(required = false) language: String?,
        @RequestParam(required = false) type: String?,
        @RequestParam(required = false, defaultValue = "100") limit: Long,
        @RequestParam(required = false, defaultValue = "0") offset: Long
    ): ResponseEntity<Page<QuestionResponse>> {
        val questionsPage = questionService.getQuestions(
            QuestionFilter(
                category = category,
                tags = tags,
                difficulty = difficulty,
                language = language,
                type = type,
                limit = limit,
                offset = offset
            )
        )
        return ResponseEntity.ok(Page(
            total = questionsPage.total,
            limit = questionsPage.limit,
            offset = questionsPage.offset,
            items = questionsPage.items.map { QuestionResponse.fromQuestion(it) }
        ))
    }

    @PostMapping
    fun createQuestion(@RequestBody questionRequest: CreateQuestionRequest): ResponseEntity<QuestionResponse> {
        val createdQuestion = questionService.createQuestions(listOf(questionRequest.toQuestion()))
        return ResponseEntity.ok(QuestionResponse.fromQuestion(createdQuestion[0]))
    }

    @PostMapping("import")
    fun importQuestions(@RequestBody questionsCsvString: String): ResponseEntity<List<QuestionResponse>> {
        val questionsToCreate = csvParser.parseQuestions(questionsCsvString)
        val createdQuestions = questionService.createQuestions(questionsToCreate.map { it.toQuestion() })
        return ResponseEntity.ok(createdQuestions.map { QuestionResponse.fromQuestion(it) })
    }
}