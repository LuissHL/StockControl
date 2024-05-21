import { Component, Inject } from '@angular/core';
import { AppMaterialModule } from '../../shared/app-material/app-material.module';
import { CommonModule } from '@angular/common';
import {  NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ProductService } from '../../services/product.service';

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
    name: [''],
    price: ['']
   });

   constructor( private formBuilder: NonNullableFormBuilder ,
     public dialogRef: MatDialogRef<ProductComponent>,
    @Inject(MAT_DIALOG_DATA) public data: string,
    private service: ProductService
  ) {
    }

    closeDialog(): void {
      this.dialogRef.close();
   }

   onSave() {
    this.service.save(this.form.value)
    this.closeDialog()
   }
}
