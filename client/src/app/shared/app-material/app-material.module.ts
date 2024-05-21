import { NgModule } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';
import { MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import { FormsModule } from '@angular/forms';




@NgModule({
  exports: [MatIconModule, MatDialogModule,MatInputModule, MatButtonModule, MatTableModule, FormsModule]
})
export class AppMaterialModule { }
