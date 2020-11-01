import { Routes, RouterModule } from '@angular/router';
import { ProdutosFastfoodComponent } from './produtos-fastfood.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatRadioModule} from '@angular/material/radio';
import { MatButtonModule } from "@angular/material/button";

const routes: Routes = [
  { path: '', component: ProdutosFastfoodComponent }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatCardModule,
    MatCheckboxModule,
    MatRadioModule,
    MatButtonModule
  ]
})
export class ProdutosFastfoodModule { }
