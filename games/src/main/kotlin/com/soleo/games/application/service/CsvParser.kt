package com.soleo.games.application.service

import com.fasterxml.jackson.dataformat.csv.CsvMapper
import com.fasterxml.jackson.dataformat.csv.CsvSchema
import com.soleo.games.application.model.request.CreateQuestionCsvRequest
import com.soleo.games.application.model.request.CreateQuestionRequest
import com.soleo.games.application.model.request.CreateTaskCsvRequest
import com.soleo.games.application.model.request.CreateTaskRequest
import org.springframework.stereotype.Service

@Service
class CsvParser {

    val csvMapper = CsvMapper()
    val schema: CsvSchema = CsvSchema.emptySchema().withHeader()

    fun parseQuestions(questionsCsvString:String):List<CreateQuestionRequest>{
        return csvMapper
            .readerFor(CreateQuestionCsvRequest::class.java)
            .with(schema)
            .readValues<CreateQuestionCsvRequest?>(questionsCsvString)
            .readAll().map { it.toCreateQuestionRequest() }
    }

    fun parseTasks(tasksCsvString: String): List<CreateTaskRequest> {
        return csvMapper
            .readerFor(CreateTaskCsvRequest::class.java)
            .with(schema)
            .readValues<CreateTaskCsvRequest?>(tasksCsvString)
            .readAll().map { it.toCreateTaskRequest() }
    }
}