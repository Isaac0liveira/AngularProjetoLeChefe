import { InicioComponent } from './inicio.component';
import { MatButtonModule } from '@angular/material/button';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import {MatCardModule} from "@angular/material/card";

const routes: Routes = [
  { path: '', component: InicioComponent }
];
@NgModule({
  entryComponents:[],
  declarations: [],
  imports: [
      CommonModule,
      MatButtonModule,
      MatCardModule,
      FormsModule,
      MatFormFieldModule,
      ReactiveFormsModule,
      RouterModule.forChild(routes)
  ]
})
export class InicioModule { }
