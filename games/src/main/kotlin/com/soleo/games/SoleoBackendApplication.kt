package com.soleo.games

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication

@SpringBootApplication
class SoleoBackendApplication

fun main(args: Array<String>) {
	runApplication<SoleoBackendApplication>(*args)
}
