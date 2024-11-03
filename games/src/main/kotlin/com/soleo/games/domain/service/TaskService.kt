package com.soleo.games.domain.service

import com.soleo.games.domain.model.Page
import com.soleo.games.domain.model.Task
import com.soleo.games.domain.model.TaskFilter
import com.soleo.games.domain.repository.TaskRepository
import org.springframework.stereotype.Service

@Service
class TaskService(
    private val taskRepository: TaskRepository,
) {

    fun getTasks(taskFilter: TaskFilter): Page<Task> {
        return taskRepository.getTasks(taskFilter)
    }

    fun createTasks(tasksToCreate: List<Task>): List<Task> {
        return taskRepository.createTasks(tasksToCreate)
    }
}