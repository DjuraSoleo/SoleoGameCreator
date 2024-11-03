package com.soleo.games.domain.service

import com.soleo.games.domain.model.Page
import com.soleo.games.domain.model.Question
import com.soleo.games.domain.model.QuestionFilter
import com.soleo.games.domain.repository.QuestionRepository
import org.springframework.stereotype.Service

@Service
class QuestionService(
    private val questionRepository: QuestionRepository,
) {

    fun getQuestions(questionFilter: QuestionFilter): Page<Question> {
        return questionRepository.getQuestions(questionFilter)
    }

    fun createQuestions(questionsToCreate: List<Question>): List<Question> {
        return questionRepository.createQuestions(questionsToCreate)
    }


}