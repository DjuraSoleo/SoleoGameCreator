package com.soleo.games.application.configuration

import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration
import org.springframework.core.io.ClassPathResource
import org.springframework.core.io.Resource
import org.springframework.web.bind.annotation.RestController
import org.springframework.web.cors.CorsConfiguration
import org.springframework.web.cors.UrlBasedCorsConfigurationSource
import org.springframework.web.filter.CorsFilter
import org.springframework.web.method.HandlerTypePredicate
import org.springframework.web.servlet.config.annotation.PathMatchConfigurer
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer
import org.springframework.web.servlet.resource.PathResourceResolver
import java.io.IOException


@Configuration
class MvcConfiguration : WebMvcConfigurer {
    override fun addResourceHandlers(registry: ResourceHandlerRegistry) {
        registry.addResourceHandler("/**")
            .addResourceLocations("classpath:/static/")
            .resourceChain(true)
            .addResolver(object : PathResourceResolver() {
                @Throws(IOException::class)
                override fun getResource(resourcePath: String, location: Resource): Resource {
                    val requestedResource: Resource = location.createRelative(resourcePath)

                    return if (requestedResource.exists() && requestedResource.isReadable)
                        requestedResource
                    else
                        ClassPathResource("/static/index.html")
                }
            })
    }


    override fun configurePathMatch(configurer: PathMatchConfigurer) {
        configurer.addPathPrefix("api", HandlerTypePredicate.forAnnotation(RestController::class.java))
    }
}

@Configuration
class CorsConfig {

    @Bean
    fun corsFilter(): CorsFilter {
        val source = UrlBasedCorsConfigurationSource()
        val config = CorsConfiguration().apply {
            addAllowedOrigin("https://editor-next.swagger.io/")
            addAllowedMethod("*")
            addAllowedHeader("*")
            allowCredentials = true
        }
        source.registerCorsConfiguration("/**", config)
        return CorsFilter(source)
    }
}