import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { ProductsListComponent } from '../components/products-list/products-list.component';

@Component({
  selector: 'app-stock-control',
  standalone: true,
  imports: [NavbarComponent, ProductsListComponent],
  templateUrl: './stock-control.component.html',
  styleUrl: './stock-control.component.scss'
})
export class StockControlComponent {

}
