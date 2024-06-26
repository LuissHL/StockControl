import { Component, Inject, OnInit } from '@angular/core';
import { AppMaterialModule } from '../../shared/app-material/app-material.module';
import { CommonModule } from '@angular/common';
import {  NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ProductService } from '../../services/product.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../models/product';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [AppMaterialModule, CommonModule, ReactiveFormsModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent {
  form = this.formBuilder.group({
    id: [''],
    name: ['', [Validators.required]],
    price: ['', [Validators.required]]
   });

   constructor( private formBuilder: NonNullableFormBuilder ,
     public dialogRef: MatDialogRef<ProductComponent>,
    @Inject(MAT_DIALOG_DATA) public data: string,
    private service: ProductService,
    private _snackbar: MatSnackBar,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const product: Product = this.route.snapshot.data['product'];
    if (product) {
      this.form.setValue({
        id: product.id,
        name: product.name,
        price: product.price
      });
    }
  }

    closeDialog(): void {

      this.dialogRef.close();
   }

   onSave() {
    this.service.save(this.form.value).subscribe(
      result =>  this.onSuccess(), error => this.onError())

   }

   onError() {
    this._snackbar.open('Erro ao salvar produto', '', {duration:5000})
   }
   onSuccess() {
    this.closeDialog();
    this._snackbar.open('Produto salvo com sucesso', '', {duration:5000})
   }

   errorMessage(fieldName : string) {
    const field = this.form.get(fieldName)

    if(field?.hasError('required')) {
      return 'campo obrigatório';
    }

    return 'Campo inválido';
  }

}
