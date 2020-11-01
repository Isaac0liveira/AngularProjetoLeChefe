import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {MatCardModule} from "@angular/material/card";
import {MatInputModule} from "@angular/material/input";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatButtonModule} from "@angular/material/button";
import {CarrinhoComponent} from "./carrinho.component";
import {MatLineModule} from "@angular/material/core";
import {MatList, MatListModule} from "@angular/material/list";

const routes: Routes = [
  { path: '', component: CarrinhoComponent }
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
    MatLineModule,
    MatListModule
  ]
})
export class CarrinhoModule { }
