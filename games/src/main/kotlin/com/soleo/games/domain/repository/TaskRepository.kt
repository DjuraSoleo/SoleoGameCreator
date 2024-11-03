package com.soleo.games.domain.repository

import com.soleo.games.domain.model.Page
import com.soleo.games.domain.model.Task
import com.soleo.games.domain.model.TaskFilter

interface TaskRepository {
    fun getTasks(taskFilter: TaskFilter): Page<Task>

    fun createTasks(tasksToCreate: List<Task>): List<Task>
}