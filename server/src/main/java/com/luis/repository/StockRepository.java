package com.luis.repository;


import com.luis.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;

public interface StockRepository extends JpaRepository<Product, Long> {
}
