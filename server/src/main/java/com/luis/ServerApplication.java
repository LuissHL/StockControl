package com.luis;

import com.luis.model.Product;
import com.luis.repository.StockRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class ServerApplication {

	public static void main(String[] args) {

		SpringApplication.run(ServerApplication.class, args);
	}

	@Bean
	CommandLineRunner initDatabase(StockRepository stockRepository) {
       return args -> {
		   stockRepository.deleteAll();

		   Product product = new Product();
		   product.setName("Notebook Samsung Galaxy");
		   product.setPrice(2399.0);
		   stockRepository.save(product);
	   };
	}

}
