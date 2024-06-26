import { Routes } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { productResolver } from './guards/product.resolver';

export const productRoutes: Routes = [
  {path: 'Products', children: [ {path: 'newProduct', component: ProductComponent, resolve: {product: productResolver}}]},
];

