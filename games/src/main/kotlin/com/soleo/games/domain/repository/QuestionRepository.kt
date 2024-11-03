package com.soleo.games.domain.repository

import com.soleo.games.domain.model.Page
import com.soleo.games.domain.model.Question
import com.soleo.games.domain.model.QuestionFilter

interface QuestionRepository {
    fun getQuestions(questionFilter: QuestionFilter): Page<Question>

    fun createQuestions(questionsToCreate: List<Question>): List<Question>
}