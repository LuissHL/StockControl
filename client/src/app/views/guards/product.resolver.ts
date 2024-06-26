import { ResolveFn } from '@angular/router';
import { inject } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product';

export const productResolver: ResolveFn<Product> = (route, state): Observable<Product> => {
  if (route.params && route.params['id']) {
    const id = route.paramMap.get('id')
    return inject(ProductService).loadById(id);
  }
    return of({id:'', name:'', price:'', amount: 0});
};

