package com.soleo.games.application.controller

import com.soleo.games.application.model.request.CreateTaskRequest
import com.soleo.games.application.model.response.Page
import com.soleo.games.application.model.response.TaskResponse
import com.soleo.games.application.service.CsvParser
import com.soleo.games.domain.model.TaskFilter
import com.soleo.games.domain.service.TaskService
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*

@RestController
@RequestMapping("/v1/tasks")
class TasksController(
    private val taskService: TaskService,
    private val csvParser: CsvParser,

    ) {

    @GetMapping
    fun getTask(
        @RequestParam(required = false) category: String?,
        @RequestParam(required = false) tags: List<String>?,
        @RequestParam(required = false) difficulty: String?,
        @RequestParam(required = false) language: String?,
        @RequestParam(required = false) type: String?,
        @RequestParam(required = false, defaultValue = "100") limit: Long,
        @RequestParam(required = false, defaultValue = "0") offset: Long
    ):ResponseEntity<Page<TaskResponse>>{
        val tasksPage = taskService.getTasks(
            TaskFilter(
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
            total = tasksPage.total,
            limit = tasksPage.limit,
            offset = tasksPage.offset,
            items = tasksPage.items.map { TaskResponse.fromTask(it) }
        ))
    }

    @PostMapping
    fun createTask(@RequestBody taskRequest: CreateTaskRequest):ResponseEntity<TaskResponse>{
        val createdTask = taskService.createTasks(listOf(taskRequest.toTask()))
        return ResponseEntity.ok(TaskResponse.fromTask(createdTask[0]))
    }

    @PostMapping("import")
    fun importTasks(@RequestBody tasksCsvString: String):ResponseEntity<List<TaskResponse>>{
        val tasksToCreate = csvParser.parseTasks(tasksCsvString)
        val createdTasks = taskService.createTasks(tasksToCreate.map { it.toTask() })
        return ResponseEntity.ok(createdTasks.map { TaskResponse.fromTask(it) })
    }
}