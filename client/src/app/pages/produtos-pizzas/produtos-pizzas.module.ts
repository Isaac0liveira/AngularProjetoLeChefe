import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {MatCardModule} from "@angular/material/card";
import {ProdutosPizzasComponent} from "./produtos-pizzas.component";

const routes: Routes = [
  { path: '', component: ProdutosPizzasComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatCardModule
  ]
})
//@ts-ignore
export class ProdutosPizzasModule { }
