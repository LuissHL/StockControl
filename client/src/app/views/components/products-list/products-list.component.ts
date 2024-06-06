import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AppMaterialModule } from '../../../shared/app-material/app-material.module';
import { Product } from '../../../models/product';
import { ProductService } from '../../../services/product.service';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-products-list',
  standalone: true,
  imports: [AppMaterialModule, CurrencyPipe],
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.scss'
})
export class ProductsListComponent {
  @Input() products: Product[]= []
  @Output() edit = new EventEmitter(false);
  @Output() remove = new EventEmitter(false);


  readonly displayedColumns = ['id', 'name', 'price','amount', 'actions']


  constructor(private service:ProductService) {

    this.update()

  }

  public update() {
    this.service.list().subscribe(products => {this.products = products})
  }

  public removeProduct(product: Product) {
    this.remove.emit(product)
  }

  public amountUp(product: Product) {
    console.log("aumentando quantidade")
     product.amount += 1;
    let prod1 =  this.service.update(product).subscribe(prod => product.amount = prod.amount)
    console.log(prod1)
  }

  public amountDown(product: Product) {
    if(product.amount == 0) {
      product.amount = 0
      console.log("zerado")
    } else {
    console.log("diminuindo quantidade")
     product.amount -= 1;
    }
    this.service.update(product).subscribe(prod => product.amount = prod.amount)
  }

    onEdit(product:Product) {
      this.edit.emit(product)
    }


}
