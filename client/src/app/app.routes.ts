import { Routes } from '@angular/router';
import { StockControlComponent } from './views/stock-control/stock-control.component';
import { ProductComponent } from './views/product/product.component';
import { productResolver } from './views/guards/product.resolver';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'stock-control' },
  {
    path: 'stock-control',
    component: StockControlComponent,
    children: [
      {path: 'newProduct', component: ProductComponent, resolve: {product: productResolver}},
      {path: 'edit/:id', component: ProductComponent, resolve: {product: productResolver}}
    ]
  },
  { path: '**', redirectTo: 'stock-control' }
];


