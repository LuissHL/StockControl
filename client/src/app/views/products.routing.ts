import { Routes, RouterModule } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { StockControlComponent } from './stock-control/stock-control.component';

const routes: Routes = [
  {path: '', component: StockControlComponent},
  {path: 'new', component: ProductComponent   },
  {path: 'edit/:id', component: ProductComponent}
];

export const ProductsRoutes = RouterModule.forChild(routes);
