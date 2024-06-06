import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsRoutes } from '../products.routing';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ProductsRoutes,

    ReactiveFormsModule,
    HttpClientModule,
  ]
})
export class ProductsModule { }
