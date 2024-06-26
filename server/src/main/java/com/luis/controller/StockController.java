package com.luis.controller;

import com.luis.model.Product;
import com.luis.repository.StockRepository;
import com.luis.service.ProductService;
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

    private final ProductService productService;

    public StockController(ProductService productService) {
        this.productService = productService;
    }

    @GetMapping
    public List<Product> getProducts() {
        return this.productService.list();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Product> findProduct(@PathVariable @NotNull @Positive Long id) {
        return this.productService.findProduct(id)
                .map(recordFound ->
                    ResponseEntity.ok().body(recordFound)).orElse(ResponseEntity.notFound().build());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Product> deleteProduct(@PathVariable @NotNull @Positive Long id) {
        if(this.productService.deleteProduct(id)) {
            return ResponseEntity.accepted().build();
        } else {
            return ResponseEntity.noContent().build();
        }
    }

    @PutMapping("/{id}")
    public ResponseEntity<Product> updateProduct(@PathVariable @NotNull @Positive Long id, @RequestBody @Valid Product product) {
        return this.productService.updateProduct(id, product)
                .map(recordFound -> {

                    return ResponseEntity.ok().body(recordFound);
                }).orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Product create(@RequestBody Product product) {
        return this.productService.create(product);
    }
}
