import { Component, ViewChild, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { ProductsListComponent } from '../components/products-list/products-list.component';
import { Product } from '../../models/product';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ConfirmationDialogComponent } from '../../shared/components/confirmation-dialog/confirmation-dialog.component';
import { ProductService } from '../../services/product.service';
import { ErrorDialogComponent } from '../../shared/components/error-dialog/error-dialog.component';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-stock-control',
  standalone: true,
  imports: [NavbarComponent, ProductsListComponent],
  templateUrl: './stock-control.component.html',
  styleUrls: ['./stock-control.component.scss']
})
export class StockControlComponent implements AfterViewInit {
onAdd() {
  this.router.navigate(['newProduct'], {relativeTo: this.route})
}
onEdit(product:Product) {
   this.router.navigate(['edit', product.id], { relativeTo: this.route})
}
  products$: Observable<Product[]> | null = null;

onError(errorMsg: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg
    });
  }

onRemove(product: Product) {
  const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
    data: 'Tem certeza que deseja remover esse produto?',
  });
  dialogRef.afterClosed().subscribe((result:boolean) => {
    if(result) {
    this.service.remove(product.id).subscribe(result=> {
      this.listProduct.update()
      this.snackBar.open('Produto removido com sucesso.', 'X', {duration: 5000, verticalPosition: 'bottom', horizontalPosition: 'right'});
  }, () => this.onError("Erro ao remover produto"))
    }
  })
}


  @ViewChild(ProductsListComponent) listProduct!: ProductsListComponent;

  constructor(private cdr: ChangeDetectorRef, private dialog: MatDialog, private snackBar: MatSnackBar, private service: ProductService, private route:ActivatedRoute, private router: Router) {}

  ngAfterViewInit() {
    // Marque para verificação de mudanças após a inicialização da visualização
    this.cdr.detectChanges();
  }
}

