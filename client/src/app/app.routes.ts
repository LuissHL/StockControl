import { Routes } from '@angular/router';
import { StockControlComponent } from './views/stock-control/stock-control.component';

export const routes: Routes = [
  {path:'', pathMatch:'full', redirectTo: 'stock-control'},
  {path:'stock-control', component: StockControlComponent}
];