package com.soleo.games.infrastructure.mockrepository

import com.soleo.games.domain.model.Page
import com.soleo.games.domain.model.Task
import com.soleo.games.domain.model.TaskFilter
import com.soleo.games.domain.repository.TaskRepository
import com.soleo.games.infrastructure.mockrepository.RandomGeneratorUtils.generateRandomListOfWords
import com.soleo.games.infrastructure.mockrepository.RandomGeneratorUtils.generateRandomSentence
import com.soleo.games.infrastructure.mockrepository.RandomGeneratorUtils.generateRandomTranslations
import com.soleo.games.infrastructure.mockrepository.RandomGeneratorUtils.generateRandomWord
import org.springframework.stereotype.Repository
import kotlin.random.Random

@Repository
class TaskMockRepository : TaskRepository {
    override fun getTasks(taskFilter: TaskFilter): Page<Task> {
        val tasks = mutableListOf<Task>()
        repeat(taskFilter.limit.toInt()) {
            tasks.add(
                Task(
                    text = generateRandomSentence(),
                    category = taskFilter.category ?: generateRandomWord(),
                    tags = taskFilter.tags ?: generateRandomListOfWords(),
                    difficulty = taskFilter.difficulty ?: generateRandomWord(),
                    type = taskFilter.type ?: generateRandomWord(),
                    translations = generateRandomTranslations()
                )
            )
        }

        return Page(
            total = taskFilter.limit + Random.nextInt(10, 100),
            limit = taskFilter.limit,
            offset = taskFilter.offset,
            items = tasks
        )
    }

    override fun createTasks(tasksToCreate: List<Task>): List<Task> {
        return tasksToCreate
    }
}