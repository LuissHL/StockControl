import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { first, Observable, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

   private readonly API = '/api/stock-control'

  constructor(private httpClient: HttpClient) {}

  list() {
    return this.httpClient.get<Product[]>(this.API).pipe(
      first(),
      tap((product) => {
      console.log(product)
    }) );
  }

  loadById(id: string | null) {
      return this.httpClient.get<Product>(`${this.API}/${id}`);
  }


  save(product: Partial<Product>) {
    if(product.id) {
     return this.update(product);
    }
    return this.create(product);
  }

  private create(product: Partial<Product>) {
    return this.httpClient.post<Product>(this.API, product).pipe( first() );
  }

  public update(product: Partial<Product>) {
   return this.httpClient.put<Product>(`${this.API}/${product.id}`, product).pipe( first() );
  }

  public remove(id: string) {
    return this.httpClient.delete(`${this.API}/${id}`).pipe(first());
 }


}
