import { Component } from '@angular/core';
import { AppMaterialModule } from '../../shared/app-material/app-material.module';
import { MatDialog } from '@angular/material/dialog';
import { ProductComponent } from '../product/product.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [AppMaterialModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  constructor(public dialog: MatDialog) {}
  openDialog(): void {
    const dialogRef = this.dialog.open(ProductComponent, {
       data: 'Cadastrar Produto',
    })
  }
}
