import { Routes, RouterModule } from '@angular/router';
import { ProdutosBebidasComponent } from './produtos-bebidas.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from "@angular/material/input";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatButtonModule} from "@angular/material/button";

const routes: Routes = [
  { path: '', component: ProdutosBebidasComponent }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
  ]
})
export class ProdutosBebidasModule { }
