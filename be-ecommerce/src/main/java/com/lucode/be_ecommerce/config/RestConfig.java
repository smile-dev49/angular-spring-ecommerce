package com.lucode.be_ecommerce.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.data.rest.core.config.RepositoryRestConfiguration;
import org.springframework.data.rest.webmvc.config.RepositoryRestConfigurer;
import org.springframework.http.HttpMethod;
import org.springframework.web.servlet.config.annotation.CorsRegistry;

import com.lucode.be_ecommerce.entity.Category;
import com.lucode.be_ecommerce.entity.Product;

@Configuration
public class RestConfig implements RepositoryRestConfigurer {

    @Override
    public void configureRepositoryRestConfiguration(RepositoryRestConfiguration config, CorsRegistry cors) {

        RepositoryRestConfigurer.super.configureRepositoryRestConfiguration(config, cors);

        HttpMethod[] unsupportedAction = {HttpMethod.PUT, HttpMethod.POST, HttpMethod.DELETE};

        // Disable for Product API
        config.getExposureConfiguration()
            .forDomainType(Product.class)
            .withItemExposure((metadata, httpMethods) -> httpMethods.disable(unsupportedAction))
            .withCollectionExposure((metadata, httpMethods) -> httpMethods.disable(unsupportedAction));

        // Disable for Category API
        config.getExposureConfiguration()
            .forDomainType(Category.class)
            .withItemExposure((metadata, httpMethods) -> httpMethods.disable(unsupportedAction))
            .withCollectionExposure((metadata, httpMethods) -> httpMethods.disable(unsupportedAction));
    }

    

}
