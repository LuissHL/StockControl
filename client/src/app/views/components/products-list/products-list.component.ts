import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AppMaterialModule } from '../../../shared/app-material/app-material.module';
import { Product } from '../../../models/product';

@Component({
  selector: 'app-products-list',
  standalone: true,
  imports: [AppMaterialModule],
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.scss'
})
export class ProductsListComponent {
  @Input() products: Product[]= []
  //@Output() add = new EventEmitter(false);
  //@Output() edit = new EventEmitter(false);
  //@Output() remove = new EventEmitter(false);


  readonly displayedColumns = ['id', 'name', 'price','amount', 'actions']


  constructor() {

  }


  //onAdd() {
    //this.add.emit(true)
   //}
   //onEdit(course: Course){
    //this.edit.emit(course)
   //}
   //onRemove(course: Course) {
    //this.remove.emit(course)
   //}
}
