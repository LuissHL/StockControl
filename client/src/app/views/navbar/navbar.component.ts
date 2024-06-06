import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AppMaterialModule } from '../../shared/app-material/app-material.module';
import { MatDialog } from '@angular/material/dialog';
import { ProductComponent } from '../product/product.component';
import { ProductsListComponent } from '../components/products-list/products-list.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [AppMaterialModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  @Output() add = new EventEmitter(false);

  constructor(public dialog: MatDialog) {}
  openDialog() {
    this.add.emit(true)
    const dialogRef = this.dialog.open(ProductComponent, {
       data: 'Cadastrar Produto',
    }).afterClosed().subscribe((list) => {
      this.listProduct.update()
    })
    console.log(this.listProduct)
  }


  @Input() listProduct!:ProductsListComponent
}
