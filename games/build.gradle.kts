import com.github.gradle.node.npm.task.NpxTask

plugins {
	kotlin("jvm") version "1.9.25"
	kotlin("plugin.spring") version "1.9.25"
	id("org.springframework.boot") version "3.3.4"
	id("io.spring.dependency-management") version "1.1.6"
	id("com.github.node-gradle.node") version "7.0.1"
}

group = "com.soleo"
version = "0.0.1-SNAPSHOT"

java {
	toolchain {
		languageVersion = JavaLanguageVersion.of(21)
	}
}

repositories {
	mavenCentral()
}

dependencies {
	implementation("org.springframework.boot:spring-boot-starter")
	implementation("org.jetbrains.kotlin:kotlin-reflect")
	implementation("org.springframework.boot:spring-boot-starter-web:3.3.4")
	implementation("com.fasterxml.jackson.core:jackson-databind:2.18.1")
	implementation("com.fasterxml.jackson.core:jackson-core:2.18.1")
	implementation("com.fasterxml.jackson.module:jackson-module-kotlin:2.18.1")
	implementation("com.fasterxml.jackson.dataformat:jackson-dataformat-csv:2.18.1")

	testImplementation("org.springframework.boot:spring-boot-starter-test")
	testImplementation("org.jetbrains.kotlin:kotlin-test-junit5")
	testRuntimeOnly("org.junit.platform:junit-platform-launcher")
}

kotlin {
	compilerOptions {
		freeCompilerArgs.addAll("-Xjsr305=strict")
	}
}

tasks.withType<Test> {
	useJUnitPlatform()
}

node {
	download = true
	distBaseUrl = "https://nodejs.org/dist"
	version = "20.10.0"
	nodeProjectDir = file("${project.projectDir}/src/main/angular")
}

tasks.register<Delete>("deleteStaticFolder") {
	val dirName = "src/main/resources/static"
	file(dirName).list()?.forEach { f ->
		delete("$dirName/$f")
	}
}

tasks.register<NpxTask>("buildAngularApp") {
	dependsOn("pnpmInstall")
	dependsOn("deleteStaticFolder")
	command = "pnpm"
	args.set(mutableListOf("build"))
	inputs.files("package.json", "pnpm-lock.yaml", "angular.json", "tsconfig.json")
	inputs.dir("src")
	outputs.dir("${layout.buildDirectory.get().asFile}/dist")
}

tasks.register<Copy>("copyAngularApp") {
	dependsOn("buildAngularApp")
	from("${project.layout.buildDirectory.get().asFile}/dist")
	into("${layout.buildDirectory.get().asFile}/resources/main/static/")
	}
