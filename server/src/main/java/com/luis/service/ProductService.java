package com.luis.service;

import com.luis.model.Product;
import com.luis.repository.StockRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;

import javax.validation.Valid;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Positive;
import java.util.List;
import java.util.Optional;

@Service
public class ProductService {

    private final StockRepository stockRepository;

    public ProductService(StockRepository stockRepository) {
        this.stockRepository = stockRepository;
    }

    public List<Product> list() {
        return this.stockRepository.findAll();
    }

    public Optional<Product> findProduct(@NotNull @Positive Long id) {
        return this.stockRepository.findById(id);
    }
    public boolean deleteProduct(@NotNull @Positive Long id) {
        Optional<Product> product = stockRepository.findById(id);
        if(product.isPresent()) {
         this.stockRepository.deleteById(id);
         return true;
        }

        return false;
    }

    public Optional<Product> updateProduct(@NotNull @Positive Long id, @Valid Product product) {
        return stockRepository.findById(id)
                .map(recordFound -> {
                    recordFound.setAmount(product.getAmount());
                    return this.stockRepository.save(recordFound);
                });
    }

    public Product create(Product product) {

        return this.stockRepository.save(product);
    }

}
