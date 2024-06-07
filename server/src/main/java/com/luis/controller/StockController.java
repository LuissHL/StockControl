package com.luis.controller;

import com.luis.model.Product;
import com.luis.repository.StockRepository;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Positive;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/stock-control")
public class StockController {

    private final StockRepository stockRepository;
    public StockController(StockRepository stockRepository) {
        this.stockRepository = stockRepository;
    }

    @GetMapping
    public List<Product> getProducts() {
        return this.stockRepository.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Product> findProduct(@PathVariable @NotNull @Positive Long id) {
        return stockRepository.findById(id)
                .map(recordFound ->
                    ResponseEntity.ok().body(recordFound)).orElse(ResponseEntity.notFound().build());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Product> deleteProduct(@PathVariable @NotNull @Positive Long id) {
        Optional<Product> product = stockRepository.findById(id);
        if(product.isPresent()) {
            this.stockRepository.deleteById(id);
            return ResponseEntity.ok(product.get());
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PutMapping("/{id}")
    public ResponseEntity<Product> updateProduct(@PathVariable @NotNull @Positive Long id, @RequestBody @Valid Product product) {
        return stockRepository.findById(id)
                .map(recordFound -> {
                    recordFound.setAmount(product.getAmount());
                    Product updated = this.stockRepository.save(recordFound);
                    return ResponseEntity.ok().body(updated);
                }).orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Product create(@RequestBody Product product) {
        return this.stockRepository.save(product);
    }
}
